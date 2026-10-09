import { ChevDrop } from "@/components/Chevron_Drop";
import type { CurrentAdmin } from "@/lib/current-admin";

export default function NavBar({ admin }: { admin: CurrentAdmin }) {
  return (
    <header className="rounded-md border border-black-500 p-6 mx-10 mt-4">
      <div className="flex flex-row justify-between">
        <p className="font-sans justify-items-center mt-3 font-bold">จัดการผู้ใช้งาน</p>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-lg font-medium text-indigo-500">{admin.name}</span>
            <span className="text-xs text-muted-foreground">{admin.company}</span>
          </div>
          <ChevDrop />
        </div>
      </div>
    </header>
  );
}
