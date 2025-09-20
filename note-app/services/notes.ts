// services/notes.ts
import { apiRequest } from "../lib/api";

export async function addNote(userId: number, title: string, content: string, token?: string) {
  return apiRequest("/notes/add", "POST", { title, content, user_id: userId }, token);
}

export async function getNotes(userId: number, token?: string) {
  return apiRequest(`/notes/all?user_id=${userId}`, "GET", undefined, token);
}
