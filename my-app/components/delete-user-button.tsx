"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { deleteUser } from "@/lib/user-service"

export function DeleteUserButton({ userId }: { userId: string }) {
  const router = useRouter()
  const inFlight = useRef(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleDelete() {
    if (inFlight.current) return
    inFlight.current = true
    setPending(true)
    setError(null)

    try {
      await deleteUser(userId)
      router.replace("/show_usr")
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : "ลบผู้ใช้งานไม่สำเร็จ กรุณาลองอีกครั้ง")
      inFlight.current = false
      setPending(false)
    }
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <Button
        type="button"
        variant="outline"
        disabled={pending}
        aria-busy={pending}
        onClick={handleDelete}
        className="h-8 rounded-lg border-red-300 bg-white px-3 text-red-500 hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 aria-hidden="true" className="size-4" />
        {pending ? "กำลังลบ..." : "ลบผู้ใช้งาน"}
      </Button>
      {error && <p role="alert" className="max-w-xs text-right text-sm text-red-600">{error}</p>}
    </div>
  )
}
