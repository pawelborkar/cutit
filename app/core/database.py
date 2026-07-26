from collections.abc import AsyncIterator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from .config import settings


engine = create_async_engine(
    str(settings.postgres.DATABASE_URL),
    connect_args={"statement_cache_size": 0},
    echo=True,
)
async_session_factory = async_sessionmaker(engine, expire_on_commit=False)


async def async_get_db() -> AsyncIterator[AsyncSession]:
    async with async_session_factory() as session:
        try:
            yield session
            await session.commit()

        except Exception:
            await session.rollback()
            raise
