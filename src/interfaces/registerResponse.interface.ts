interface RegisterPayload {
  email: string,
  id: number,
  username: string
}

export interface RegisterResponse {
  status: 'success' | 'error';
  message: string;
  data: RegisterPayload;
}