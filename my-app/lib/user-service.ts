// Set NEXT_PUBLIC_USERS_API_URL to the backend users collection URL.
// Expected contract: DELETE {collection URL}/{encoded user ID} returns 200 or 204.
// Adjust authentication and the URL here to match the backend when available.
export async function deleteUser(id: string): Promise<void> {
  const collectionUrl = process.env.NEXT_PUBLIC_USERS_API_URL

  if (!collectionUrl) {
    throw new Error("ยังไม่สามารถลบผู้ใช้งานได้ กรุณาลองใหม่ภายหลัง")
  }

  const response = await fetch(`${collectionUrl.replace(/\/$/, "")}/${encodeURIComponent(id)}`, {
    method: "DELETE",
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("ลบผู้ใช้งานไม่สำเร็จ กรุณาลองอีกครั้ง")
  }
}
