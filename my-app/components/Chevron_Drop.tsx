"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function ChevDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <ChevronDown className="h-4 w-4 text-indigo-500" />
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuItem render={<Link href="/Home" />}>
          Log Out
          <DropdownMenuShortcut>
            <LogOut className="href h-4 w-4 text-red-500" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}