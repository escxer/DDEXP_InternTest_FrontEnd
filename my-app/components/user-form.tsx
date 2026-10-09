"use client"

import { useState, type ReactNode } from "react"
import type { User } from "@/lib/users"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { useForm, Controller, } from "react-hook-form"
import { useFrames } from "next/dist/next-devtools/dev-overlay/utils/get-error-by-type"

const inputClassName = "h-10 rounded-md border-slate-300 bg-white px-3 placeholder:text-slate-400"
const roles = [{ label: "Company Admin", value: "Company Admin" }, { label: "User", value: "User"}]



function PasswordField({ id, label, placeholder, masked = false }: {
  id: string
  label: string
  placeholder: string
  masked?: boolean
}) {
  const [visible, setVisible] = useState(false)

  return (
    <Field className="gap-1">
      <FieldLabel htmlFor={id} className="gap-0.5 text-sm text-slate-700">
        {label}<span aria-hidden="true" className="text-destructive">*</span>
      </FieldLabel>
      <div className="relative">
        <Input
          id={id}
          name={id}
          type={masked || visible ? "text" : "password"}
          autoComplete="new-password"
          placeholder={placeholder}
          value={masked ? "************" : undefined}
          readOnly={masked}
          required
          className={`${inputClassName} pr-12`}
        />
        {!masked && <button
          type="button"
          aria-label={`${visible ? "ซ่อน" : "แสดง"}${label}`}
          aria-controls={id}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
          className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-md text-slate-400 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-ring"
        >
          {visible ? <EyeOff aria-hidden="true" className="size-5" /> : <Eye aria-hidden="true" className="size-5" />}
        </button>}
      </div>
    </Field>
  )
}
type FormValues = {
  firstname: string,
  lastname: string,
  email: string,
  company: string}


export function UserForm({ user, headerAction }: { user?: User; headerAction?: ReactNode }) {
  const {control, handleSubmit} = useForm<FormValues>
  ({defaultValues:{
    firstname: user?.firstname ?? "",
    lastname: user?.lastname ?? "",
    email: user?.email ?? "",
    company: user?.company ?? "",
  },
})


  return (
    <main lang="th" className="min-h-screen bg-slate-50/50 px-4 py-6">
      <header className="mb-6">
        <div className="flex items-start justify-between gap-4">
        <Link
          href="/show_usr"
          className="inline-flex items-center gap-2 rounded-sm text-sm text-slate-600 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          ย้อนกลับ
        </Link>
        {headerAction}
        </div>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">{user ? "แก้ไขผู้ใช้งาน" : "เพิ่มผู้ใช้งาน"}</h1>
      </header>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FieldSet className="gap-6">
          <FieldLegend className="mb-6 text-base font-semibold">
            ข้อมูลผู้ใช้งาน
          </FieldLegend>
          <FieldGroup className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2">

          <Controller
            name="firstname"
            control={control}
            render={({field}) => (
            <Field className="gap-1">
              <FieldLabel htmlFor="firstname" className="gap-0.5 text-sm text-slate-700">
                ชื่อจริง<span aria-hidden="true" className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id="firstname"
                autoComplete="given-name"
                placeholder="กรอกชื่อจริง"
                required
                className="h-10 rounded-md border-slate-300 bg-white px-3 placeholder:text-slate-400"
              />
            </Field>
            )}
          />
            
           <Controller
            name='lastname'
            control={control}
            render={({field}) => (
            <Field className="gap-1">
              <FieldLabel htmlFor="lastname" className="gap-0.5 text-sm text-slate-700">
                นามสกุล<span aria-hidden="true" className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id="lastname"
                autoComplete="family-name"
                placeholder="กรอกนามสกุล"
                required
                className="h-10 rounded-md border-slate-300 bg-white px-3 placeholder:text-slate-400"
              />
            </Field>
            )}
           />
        
          </FieldGroup>
        </FieldSet>
        <Separator className="my-6" />


        <FieldSet className="gap-6">
          <FieldLegend className="mb-6 text-base font-semibold">
            ตั้งค่าบัญชี
          </FieldLegend>
          <FieldGroup className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2">

            <Controller
              name="email"
              control={control}
              render={({field}) => (
                <Field className="gap-1">
              <FieldLabel htmlFor="email" className="gap-0.5 text-sm text-slate-700">
                อีเมล<span aria-hidden="true" className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id="email"
                type="email"
                autoComplete="email"
                placeholder="กรอกอีเมล"
                required
                className={inputClassName}
              />
            </Field>
              )}
            />
            
            <Controller
              name="company"
              control={control}
              render = {({field}) => (
                <Field className="gap-1">
              <FieldLabel htmlFor="company" className="gap-0.5 text-sm text-slate-700">
                บริษัท<span aria-hidden="true" className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id="company"
                autoComplete="organization"
                placeholder="กรอกบริษัท"
                required
                className={inputClassName}
              />
            </Field>
              )}
            />

            
            <Field className="gap-1 sm:col-span-2">
              <FieldLabel htmlFor="role" className="gap-0.5 text-sm text-slate-700">
                สิทธิ์การใช้งาน<span aria-hidden="true" className="text-destructive">*</span>
              </FieldLabel>
              <Select name="role" items={roles} defaultValue={user?.role ?? null} required>
                <SelectTrigger id="role" aria-required="true" className="w-full rounded-md border-slate-300 bg-white px-3 data-[size=default]:h-10 data-placeholder:text-slate-400">
                  <SelectValue placeholder="เลือกสิทธิ์การใช้งาน" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </Field>
            <PasswordField masked={!!user} id="password" label="รหัสผ่าน" placeholder="กรอกรหัสผ่าน" />
            <PasswordField masked={!!user} id="confirmPassword" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" />
          </FieldGroup>

        </FieldSet>

        <footer className="mt-6 flex justify-end gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
          <Button
            variant="outline"
            render={<Link href="/show_usr" />}
            nativeButton={false}
            className="h-9 min-w-24 rounded-md border-slate-300 text-slate-700"
          >
            ยกเลิก
          </Button>
          <Button
            type="submit"
            className="h-9 min-w-24 rounded-md bg-indigo-500 px-4 text-white hover:bg-indigo-600"
          >
            {user ? "แก้ไข" : "เพิ่มผู้ใช้งาน"}
          </Button>
        </footer>

      </form>

    </main>
  )
}
