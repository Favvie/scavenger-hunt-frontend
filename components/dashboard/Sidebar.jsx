"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, Trophy, Image, Globe, Bell, Settings, HelpCircle, LogOut, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Challenges",
    href: "/dashboard/challenges",
    icon: Trophy,
  },
  {
    name: "NFT gallery",
    href: "/dashboard/nft-gallery",
    icon: Image,
  },
  {
    name: "Ecosystems",
    href: "/dashboard/ecosystems",
    icon: Globe,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    name: "Help and support",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function Sidebar({isOpen, setIsOpen}) {
  const pathname = usePathname()
 

  return (
    <>

      {/* Sidebar backdrop for mobile */}
      {/* {isOpen && <div className="fixed inset-0 bg-[#060B1C]/10 z-40 md:hidden" onClick={() => setIsOpen(false)} />} */}

      {/* Sidebar */}
      <aside
        className={cn("w-60 fixed hidden md:block transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0 block bg-[#060B1C] mt-10 md:mt-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col  md:h-[calc(100vh-6rem)] ">
          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-4 mt-5 ">
            {sidebarItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={cn("sidebar-item", pathname === item.href && "active")}>
                <item.icon className="sidebar-icon" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Sign out button */}
          <div className="p-4">
            <button className="sidebar-item w-full justify-start">
              <LogOut className="sidebar-icon" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

