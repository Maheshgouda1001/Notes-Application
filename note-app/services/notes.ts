// services/notes.ts
import { apiRequest } from "../lib/api";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface ApiResponse<T> {
  data: T;
}

export async function addNote(userId: number, title: string, content: string, token?: string) {
  const response: ApiResponse<Note> = await apiRequest(
    "/notes/add",
    "POST",
    { title, content, user_id: userId },
    token
  );
  return response;
}

export async function getNotes(userId: number, token?: string) {
  const response: ApiResponse<Note[]> = await apiRequest(`/notes/all`, "GET", undefined, token);
  return response;
}
