export type User = {
  id: string
  name: string
  firstname: string
  lastname: string
  email: string
  role: string
  company: string
  status: "เปิดใช้งาน" | "ปิดใช้งาน"
}

// Mock records shared by the listing and configuration pages.
export const users: User[] = ([
    {
      id: "1",
      name: "A",
      role: "Company Admin",
      company: "DDEXP",
      status: "เปิดใช้งาน"
    },
    {
      id: "2",
      name: "B",
      role: "Company Admin",
      company: "DDEXP",
      status: "ปิดใช้งาน"
    },
    {
      id: "3",
      name: "C",
      role: "Company Admin",
      company: "DDEXP",
      status: "เปิดใช้งาน"
    },
    {
      id: "4",
      name: "D",
      role: "Company Admin",
      company: "DDEXP",
      status: "ปิดใช้งาน"
    },
    {
      id: "5",
      name: "E",
      role: "Company Admin",
      company: "DDEXP",
      status: "เปิดใช้งาน"
    },
    {
      id: "6",
      name: "F",
      role: "Company Admin",
      company: "DDEXP",
      status: "ปิดใช้งาน"
    },
    {
      id: "7",
      name: "G",
      role: "Company Admin",
      company: "DDEXP",
      status: "เปิดใช้งาน"
    },
    {
      id: "8",
      name: "H",
      role: "Company Admin",
      company: "DDEXP",
      status: "ปิดใช้งาน"
    },
    {
      id: "9",
      name: "I",
      role: "Company Admin",
      company: "DDEXP",
      status: "ปิดใช้งาน"
    },
    {
      id: "10",
      name: "J",
      role: "Company Admin",
      company: "DDEXP",
      status: "เปิดใช้งาน"
    },
    {
      id: "11",
      name: "K",
      role: "Company Admin",
      company: "DDEXP",
      status: "ปิดใช้งาน"
    },
    // ...
  ]
).map((user) => ({
  ...user,
  status: user.status as User["status"],
  firstname: user.name,
  // Sample profile details; replace with API data when available.
  lastname: "ตัวอย่าง",
  email: `user${user.id}@example.com`,
}))
