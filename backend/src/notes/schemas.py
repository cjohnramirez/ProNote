from pydantic import BaseModel

class NoteSchema(BaseModel):
    id: int
    title: str
    text: str
    created_by: str
    created_on: str
    modified_by: str
    modified_on: str

class NoteUpdateSchema(BaseModel):
    title: str
    text: str