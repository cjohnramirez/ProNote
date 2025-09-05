from fastapi import FastAPI
from src.notes.routes import note_router

version = 'v1'

app = FastAPI(
    title='ProNote',
    description='Main API for an online, collaborative notes app',
    version=version
)

app.include_router(note_router, prefix=f"/api/{version}/notes", tags=['notes'])
