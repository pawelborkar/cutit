import secrets
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from sqlalchemy.engine import url
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
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
async def redirect_to_destination(short_code: str):
    pass
