interface User {
  id: number;
  email: string;
  username: string;
}

interface LoginPayload {
  token: string;
  user: User;
}

export interface LoginResponse {
  status: 'success' | 'error';
  message: string;
  data: LoginPayload;
}