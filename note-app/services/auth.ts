import { apiRequest } from "../lib/api";
import { LoginResponse } from "../types"; 

export async function signup(username: string, email: string, password: string, confirmPassword: string) {
  return apiRequest("/auth/signup", "POST", {
    username,
    email,
    password,
    confirm_password: confirmPassword,
  });
}

export async function signin(username: string, password: string): Promise<LoginResponse> {
  return apiRequest<LoginResponse>("/auth/signin", "POST", {
    email: username,
    password,
  } as Record<string, unknown>); 
}