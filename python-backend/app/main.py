from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models
from .database import engine
from .routes import auth, notes
from app.auth import JWTAuthMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Notes API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(JWTAuthMiddleware)

app.include_router(auth.router)
app.include_router(notes.router)