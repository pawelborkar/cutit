from functools import lru_cache
import secrets
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse

from sqlalchemy import select, update
from sqlalchemy.ext.asyncio import AsyncSession

from typing import Annotated
from starlette.status import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND

from app.core.config import settings
from app.core.database import async_get_db

from app.schemas.link import LinkCreate
from app.models.url import URL


router = APIRouter()


"""
@params: Destination URL
@method: POST
@return: Short Code
"""


@router.post("/links", tags=["Links"])
async def create_short_code(
    link: LinkCreate, db: Annotated[AsyncSession, Depends(async_get_db)]
):
    try:
        short_code = secrets.token_urlsafe(4)
        new_url = URL(short_code=short_code, url=str(link.url))
        db.add(new_url)
        await db.flush()
        return new_url

    except Exception as e:
        raise HTTPException(status_code=HTTP_400_BAD_REQUEST, detail=str(e))


"""
@params: Short Code
@method: GET
@return: Redirects to the Destination URL - uses 302 Temporary redirect
"""


@router.get("/{short_code}")
@lru_cache(maxsize=500)
async def redirect_to_destination(
    short_code: str, db: Annotated[AsyncSession, Depends(async_get_db)]
):
    results = await db.execute(select(URL).where(URL.short_code == short_code))
    url_entry = results.scalar_one_or_none()

    if url_entry is None:
        raise HTTPException(
            status_code=HTTP_404_NOT_FOUND, detail="Short URL not found"
        )

    await db.execute(
        update(URL).where(URL.short_code == short_code).values(count=URL.count + 1)
    )
    await db.commit()
    return RedirectResponse(
        url=url_entry.url, status_code=settings.app.APP_DEFAULT_REDIRECT_TYPE
    )

    # try:
    #     _url = await db.get(entity=url, ident=short_code)
    #     print(_url)

    # except Exception as e:
    #     raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
