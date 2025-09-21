# Notes Application

A simple **Notes Application** with a **Next.js frontend** and **FastAPI + PostgreSQL backend**.

### 1. Create PostgreSQL Database
```sql
CREATE DATABASE notesdb;

-- Create USER table
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create NOTES table
CREATE TABLE notes (
    note_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_title VARCHAR(200) NOT NULL,
    note_content TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id UUID NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

2. Configure .env
env
Copy code
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/notesdb
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
3. Setup Python environment
bash
Copy code
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install "pydantic[email]"
4. Run FastAPI server
bash
Copy code
uvicorn app.main:app --reload
Server: http://127.0.0.1:8000

Swagger docs: http://127.0.0.1:8000/docs

Frontend Setup (Next.js)
1. Install dependencies
bash
Copy code
cd frontend
npm install
# or
yarn install
2. Configure API URL
Create .env.local in frontend:

env
Copy code
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
3. Run frontend
bash
Copy code
npm run dev
# or
yarn dev
Frontend: http://localhost:3000

Usage
Signup

http
Copy code
POST /auth/signup
Signin → get JWT token

http
Copy code
POST /auth/signin
Access Notes (JWT in header)

http
Copy code
GET /notes/
Authorization: Bearer <your_jwt_token>

POST /notes/
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "header": "First Note",
  "content": "This is the note content"
}
Notes
Make sure virtual environment is activated before installing Python packages or running server.

If you get email-validator missing, run:

bash
Copy code
pip install "pydantic[email]"
Git Commands
bash
Copy code
git remote remove origin
git remote add origin https://github.com/Maheshgouda1001/Notes-Application.git
git branch -M main
git push -u origin main
yaml
Copy code

---

Do you want me to **also add a short “How to run backend + frontend together” section** for convenience?
