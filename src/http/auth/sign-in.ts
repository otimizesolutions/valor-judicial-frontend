import { api } from "@/lib/axios";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
}

export interface SignInResponse {
  refresh: string;
  access: string;
  user: User;
}

export async function signIn(data: SignInRequest) {
  const response = await api.post<SignInResponse>("/auth/token/", data);

  return response;
}
