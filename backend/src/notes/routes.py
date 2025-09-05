from fastapi import APIRouter, status
from fastapi.exceptions import HTTPException
from typing import List
from .schemas import NoteSchema, NoteUpdateSchema
from .note_data import Notes

note_router = APIRouter()


@note_router.get(path="/notes", response_model=List[NoteSchema])
async def get_all_notes():
    return Notes


@note_router.post(path="/notes", status_code=status.HTTP_201_CREATED)
async def create_note(note_data: NoteSchema) -> dict:
    new_data = note_data.model_dump()

    Notes.append(new_data)

    return new_data


@note_router.get(path="/notes/{note_id}")
async def get_note(note_id: int):
    for note in Notes:
        if note["id"] == note_id:
            return note

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail="Note not found")


@note_router.delete(path="/note/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_note(note_id: int):
    for note in Notes:
        if note["id"] == note_id:
            Notes.remove(note)

            return {}

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail="Note not found")


@note_router.patch(path="/note/{note_id}")
async def patch_note(note_id: int, note_update_data: NoteUpdateSchema):
    for note in Notes:
        if note["id"] == note_id:
            note["title"] = note_update_data.title
            note["text"] = note_update_data.text
            
            return note
        
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")