import { apiRequest } from "../lib/api";

export async function signup(username: string, email: string, password: string, confirmPassword: string) {
  return apiRequest("/auth/signup", "POST", {
    username,
    email,
    password,
    confirm_password: confirmPassword,
  });
}

export async function signin(username: string, password: string) {
  return apiRequest("/auth/signin", "POST", {
    username,
    password,
  });
}