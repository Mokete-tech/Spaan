"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, User, Search, Bell } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useSession, signIn, signOut } from "next-auth/react"

export function Header() {
  const { data: session } = useSession()
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold text-2xl sm:inline-block">Spaan</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/browse" className="hover:text-primary transition-colors">
              Browse Jobs
            </Link>
            <Link href="/post-job" className="hover:text-primary transition-colors">
              Post a Job
            </Link>
            <Link href="/become-a-provider" className="hover:text-primary transition-colors">
              Become a Provider
            </Link>
            <Link href="/local-services" className="hover:text-primary transition-colors">
              Local Services
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className={`flex w-full items-center space-x-2 ${isSearchVisible ? "" : "md:w-auto"}`}>
            {isSearchVisible && (
              <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
                <Input
                  type="search"
                  placeholder="Search jobs or services..."
                  className="h-9 md:w-[300px] lg:w-[400px]"
                />
              </form>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Toggle search</span>
            </Button>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <Link href="/notifications">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {session ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    {session.user.role === "admin" && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin/dashboard">Admin Dashboard</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => signOut()}>Log out</DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem onSelect={() => signIn()}>Sign In</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="font-bold text-2xl">
        Spaan
      </Link>
      <Link href="/browse" className="hover:text-primary transition-colors">
        Browse Jobs
      </Link>
      <Link href="/post-job" className="hover:text-primary transition-colors">
        Post a Job
      </Link>
      <Link href="/become-a-provider" className="hover:text-primary transition-colors">
        Become a Provider
      </Link>
      <Link href="/local-services" className="hover:text-primary transition-colors">
        Local Services
      </Link>
      {session && (
        <>
          <Link href="/profile" className="hover:text-primary transition-colors">
            Profile
          </Link>
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
          {session.user.role === "admin" && (
            <Link href="/admin/dashboard" className="hover:text-primary transition-colors">
              Admin Dashboard
            </Link>
          )}
          <Link href="/settings" className="hover:text-primary transition-colors">
            Settings
          </Link>
          <Link href="/notifications" className="hover:text-primary transition-colors">
            Notifications
          </Link>
          <button onClick={() => signOut()} className="hover:text-primary transition-colors text-left">
            Log out
          </button>
        </>
      )}
      {!session && (
        <button onClick={() => signIn()} className="hover:text-primary transition-colors text-left">
          Sign In
        </button>
      )}
    </div>
  )
}

