import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export async function fetcher(url: string) {
  const response = await api.get(url);
  return response.data;
}