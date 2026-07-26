dev:
  fastapi dev

cdev:
  cd client/ && bun run dev

format:
  ruff format . && cd client && bun format

up:
  docker compose up

down:
  docker compose down

run:
  fastapi run

image:
  docker image ls

img:
  docker image ls

cl:
  docker container ls
