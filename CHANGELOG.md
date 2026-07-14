## [unreleased]

### 🚀 Features

- Add models and schemas
- Add schemas for link
- Add create short_code endpoint
- Redirect to destination/original URL from short_code
- Database connection
- Using async driver intead of sync
- Add url-redirect and counter

### 🐛 Bug Fixes

- On_update bug and set id to be PK
- Entity is not getting store in db due to timezone

### 🚜 Refactor

- Base class
- Using sqlalchemy 2.0 convention Mapped for types
- Using psycopg2(synchronous driver) as of now to start things simple
- Adapt more descriptive name LinkCreate
- Add title to the API docs along with routes
- Using modern timestamp api
- Add default factory settings for app and postgres
- Modularize models
- Using secrets to generate base64 urlsafe tokens

### 🎨 Styling

- *(user-model)* Consistent formatting using ruff

### ⚙️ Miscellaneous Tasks

- Add pyright config
- Add configs for app and postgresql
- Add commitizen for better commit messages and git workflows
- Ignore db files
- Ignore mac native .DS_Store
- Env var
- Use postgresql instead of shelve
- Use env vars
- Modularize
- Remove logfire
- Add alembic for migrations
- Add justfile support to quickly run commands
