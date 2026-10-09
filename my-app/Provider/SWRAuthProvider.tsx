"use client";

import { SWRConfig } from 'swr';
import type { ReactNode } from "react";
import { fetcher } from "../lib/api";
//import axios, { AxiosInstance } from 'axios';
//import type { SWRHooksConfig } from '../type/swr/swr';

export default function SWRAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SWRConfig value={{ fetcher }}>
      {children}
    </SWRConfig>
  );
}



