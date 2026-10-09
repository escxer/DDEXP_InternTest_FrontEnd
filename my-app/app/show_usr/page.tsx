"use client";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
//import { users } from "@/lib/users"


import { useUsers } from "@/hooks/use-users";
import type { User } from "@/lib/users";

export default function DemoPage() {

  const { data, error, isLoading } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Unable to load users.</p>;

  const users: User[] = (data?.data ?? []).map((user) => ({
    ...user,
    role: user.role === "admin" ? "Company Admin" : "User",
    status: user.banned ? "ปิดใช้งาน" : "เปิดใช้งาน",
  }));

  return (
    // Keep your existing page JSX.
    // Change the table to:
    <DataTable columns={columns} data={users} />
  );

  /*
  const data = users

  return (
    <div>
    <div className="flex flex-col justify-between mt-10">
    <div>
      <div className="flex flex-row justify-between">
      <p className="ml-10 font-bold text-2xl">รายการชื่อผู้ใช้งาน</p>
      <div>
        <Button variant="default" className="bg-indigo-500 mr-10" render={<Link href="/add_usr" />}>
          <Plus className="h-4 w-4 text-white-500"/>เพิ่มผู้ใช้งาน
        </Button>
      </div>
      </div>
    </div>
    
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>

    </div>
  )
  */


}
