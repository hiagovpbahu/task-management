"use client"

import Image from "next/image"
import TaskManagementLogo from "@/public/logo_transparent.png"
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Avatar from "react-avatar"

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center rounded-b-2xl bg-gray-500/10 p-5 md:flex-row md:pb-0 md:pt-2">
        <div className="absolute left-0 top-0 -z-50 h-96 w-full rounded-md bg-gradient-to-b from-[#d4d9e0] to-[#2F3742] opacity-50 blur-3xl filter" />

        <Image
          src={TaskManagementLogo}
          alt="Task Management Logo"
          width={300}
          height={100}
          className="h-28 w-44 object-cover object-center"
          placeholder="blur"
          priority
        />

        <div className="flex w-full flex-1 items-center justify-end space-x-5">
          <form className="flex flex-1 items-center space-x-5 rounded-md bg-white p-2 shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="Hiago Bahú" round size="50" color="#2F3742" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex w-fit max-w-3xl items-center rounded-xl bg-white p-5 pr-5 text-sm font-light italic text-[#2F3742] shadow-xl">
          <UserCircleIcon className="mr-1 inline-block h-10 w-10 text-[#2F3742]" />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  )
}
