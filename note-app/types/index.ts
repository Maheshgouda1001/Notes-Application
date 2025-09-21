export interface User {
    id: number;
    username: string;
    email: string;
  }
  
export interface LoginResponse {
access_token:string 
message: string
refresh_token:string
user_id:number
}

  export interface AuthResponse {
    message: string;
    user_id: number;
  }
  
  export interface Note {
    title: string;
    content: string;
  }
  