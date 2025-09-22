import { api } from "@/lib/axios";

export interface RefreshRequest {
  refresh: string;
}

export interface RefreshResponse {
  access: string;
}

export async function refreshToken(data: RefreshRequest) {
  const response = await api.post<RefreshResponse>(
    "/auth/token/refresh/",
    data
  );

  return response;
}
