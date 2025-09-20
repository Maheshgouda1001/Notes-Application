from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    confirm_password: str

class UserLogin(BaseModel):
    username: EmailStr
    password: str

class NoteBase(BaseModel):
    header: str
    note: str

class NoteCreate(NoteBase):
    pass

class NoteOut(NoteBase):
    id: int
    class Config:
        orm_mode = True
