dev:
  fastapi dev

cdev:
  cd client/ && bun run dev

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
