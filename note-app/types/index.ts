export interface User {
    id: number;
    username: string;
    email: string;
  }
  
  export interface AuthResponse {
    message: string;
    user_id: number;
  }
  
  export interface Note {
    title: string;
    content: string;
  }
  