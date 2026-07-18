ARG PYTHON_VERSION=3.14.6

FROM python:${PYTHON_VERSION}-slim-trixie

RUN useradd -m sage

RUN pip install uv

WORKDIR /app

COPY uv.lock pyproject.toml .python-version ./

RUN uv sync --frozen

ENV PATH="/app/.venv/bin:$PATH"

COPY . .

USER sage

EXPOSE 8000

CMD ["fastapi", "run"] 
