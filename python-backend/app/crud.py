from sqlalchemy.orm import Session
from .models import User, Note
from .schemas import UserCreate, NoteCreate
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def create_user(db: Session, user: UserCreate):
    hashed_pw = hash_password(user.password)
    db_user = User(username=user.username, email=user.email, password=hashed_pw)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    print(db.query(User).filter(User.email == email).first())
    return db.query(User).filter(User.email == email).first()

def create_note(db: Session, note: NoteCreate, user_id: int):
    db_note = Note(header=note.header, note=note.note, user_id=user_id)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def get_notes(db: Session, user_id: int):
    return db.query(Note).filter(Note.user_id == user_id).all()
