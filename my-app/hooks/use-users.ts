"use client";

import useSWR from "swr";

type ApiUser = {
  id: string;
  firstname: string;
  lastname: string;
  name: string;
  email: string;
  company: string;
  role: "admin" | "user";
  banned: boolean | null;
};

type UsersResponse = {
  data: ApiUser[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};

export function useUsers(page = 1, perPage = 10) {
  return useSWR<UsersResponse>(
    `/users/?page=${page}&perPage=${perPage}`
  );
}