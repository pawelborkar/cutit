from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.link import router

load_dotenv()


app = FastAPI(debug=True, title="Cutlet: The URL shortener API docs")
app.include_router(router)

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://c.pawel.in",
    "https://c.pawel.in",
    "http://cutit.pawel.in",
    "https://cutit.pawel.in",
]

app.add_middleware(
    CORSMiddleware,
    # allow_credentials=True, # uncomment when you implement auth using cookies or other
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"message": "System is working fine."}
