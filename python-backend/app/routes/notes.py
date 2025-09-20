from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import schemas, crud
from ..database import get_db

router = APIRouter(prefix="/notes", tags=["Notes"])

@router.post("/add", response_model=schemas.NoteOut)
def add_note(note: schemas.NoteCreate, user_id: int, db: Session = Depends(get_db)):
    return crud.create_note(db, note, user_id)

@router.get("/all", response_model=list[schemas.NoteOut])
def get_notes(user_id: int, db: Session = Depends(get_db)):
    return crud.get_notes(db, user_id)
