"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jADPHXdLHce7WvvcUxEfcJUI8ad5WU.png"
            alt="Acomb Wellness Logo"
            width={180}
            height={60}
            priority
            className="dark:brightness-0 dark:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="text-foreground/80 transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/services/addiction" className="text-foreground/80 transition-colors hover:text-primary">
            Addiction Treatment
          </Link>
          <Link href="/services/mental-health" className="text-foreground/80 transition-colors hover:text-primary">
            Mental Health
          </Link>
          <Link href="/contact" className="text-foreground/80 transition-colors hover:text-primary">
            Contact
          </Link>
          <ThemeToggle />
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Get Help Today</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-foreground/80 transition-colors hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services/addiction"
              className="text-foreground/80 transition-colors hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Addiction Treatment
            </Link>
            <Link
              href="/services/mental-health"
              className="text-foreground/80 transition-colors hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mental Health
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 transition-colors hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Help Today
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

