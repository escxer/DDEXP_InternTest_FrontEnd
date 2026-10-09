"use client"

import { createColumnHelper } from "@tanstack/react-table"
import Link from "next/link"
import type { User } from "@/lib/users"

import { type DataTableFeatures } from "./data-table-features"

export type { User } from "@/lib/users"

const columnHelper = createColumnHelper<DataTableFeatures, User>()

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "รหัสผู้ใช้งาน",
    cell: ({ getValue }) => (
      <Link
        href={`/config_usr?id=${encodeURIComponent(getValue())}`}
        className="rounded-sm text-indigo-600 underline underline-offset-4 hover:text-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("name", {
    header: "ชื่อผู้ใช้งาน",
  }),
  columnHelper.accessor("role", {
    header: "สิทธิ์การใช้งาน",
  }),
  columnHelper.accessor("company", {
    header: "บริษัท",
  }),
  columnHelper.accessor("status", {
    header: "สถานะ",
    cell: ({ getValue }) => {
      const status = getValue()
      return (
        <span className={status === "เปิดใช้งาน" 
          ? "font-medium text-emerald-700 rounded-full border border-emerald-500 bg-emerald-50/30 px-1.5 py-1"
          : "font-medium text-red-700 rounded-full border border-red-500 bg-red-50/30 px-2 py-1"}>{status}</span>
      )
    }
  }),
])
