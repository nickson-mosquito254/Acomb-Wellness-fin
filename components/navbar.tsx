"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Addiction Treatment", href: "/services/addiction" },
      { label: "Mental Health", href: "/services/mental-health" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo placeholder - replace with actual logo */}
          <div className="relative h-12 w-40">
            <div className="flex items-center">
              <span className="font-heading text-2xl font-bold text-primary">Acomb</span>
              <span className="font-heading text-2xl font-bold text-secondary">Wellness</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.children ? (
                <button
                  className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                  onClick={() => toggleDropdown(link.label)}
                >
                  {link.label}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )}

              {link.children && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <div className="py-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button size="lg" className="hidden lg:flex rounded-full shadow-md">
            Get Help Now
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in lg:hidden bg-white",
          isMenuOpen ? "slide-in-from-top-80" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <div>
                  <button
                    className="flex w-full items-center justify-between text-lg font-medium"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("h-5 w-5 transition-transform", activeDropdown === link.label ? "rotate-180" : "")}
                    />
                  </button>

                  {activeDropdown === link.label && (
                    <div className="mt-2 ml-4 grid gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="text-base text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="flex w-full items-center text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Button className="w-full mt-4 rounded-full" size="lg">
            Get Help Now
          </Button>
        </div>
      </div>
    </header>
  )
}

