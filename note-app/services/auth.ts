import { apiRequest } from "../lib/api";

export async function signup(username: string, email: string, password: string, confirmPassword: string) {
  return apiRequest("/auth/signup", "POST", {
    username,
    email,
    password,
    confirm_password: confirmPassword,
  });
}

// export async function signin(email: string, password: string) {
//   return apiRequest<{ message: string; user_id: number }>("/auth/signin", "POST", {
//     email,
//     password,
//   });
// }
