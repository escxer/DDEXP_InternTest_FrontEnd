import { Suspense } from "react"
import { notFound } from "next/navigation"
import { UserForm } from "@/components/user-form"
import { users } from "@/lib/users"
import { DeleteUserButton } from "@/components/delete-user-button"

type ConfigUserProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function SelectedUser({ searchParams }: ConfigUserProps) {
  const { id } = await searchParams
  const user = typeof id === "string" ? users.find((user) => user.id === id) : undefined

  if (!user) notFound()

  return (
    <UserForm
      key={user.id}
      user={user}
      headerAction={<DeleteUserButton userId={user.id} />}
    />
  )
}

export default function ConfigUserPage(props: ConfigUserProps) {
  return (
    <Suspense fallback={<p className="p-6" role="status">กำลังโหลดข้อมูลผู้ใช้งาน...</p>}>
      <SelectedUser {...props} />
    </Suspense>
  )
}
