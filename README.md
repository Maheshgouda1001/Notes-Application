# Notes Application

A simple **Notes Application** with a **Next.js frontend** and **FastAPI + PostgreSQL backend**.

### 1. Create PostgreSQL Database
```sql
CREATE DATABASE notesdb;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    header VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE
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
