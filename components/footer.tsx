import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ChevronRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-kenyan-dark text-white">
      <div className="container">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-700/50">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Stay Updated on Mental Health & Recovery
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for tips, resources, and updates on mental health and addiction recovery.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-full bg-gray-700/50 border border-gray-600/50 text-white w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  className="rounded-full whitespace-nowrap bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                  size="lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jADPHXdLHce7WvvcUxEfcJUI8ad5WU.png"
                  alt="Acomb Wellness Logo"
                  width={180}
                  height={60}
                  className="brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 max-w-xs">
                Your partner in mental health and recovery, helping Kenyans obtain a free environment void of drugs and
                alcohol use.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services/addiction" className="text-gray-300 hover:text-white flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                    Addiction Treatment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mental-health"
                    className="text-gray-300 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                    Mental Health
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Kimunyu, Off Kenyatta Road
                    <br />
                    P.O. Box 1432-01000
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-gray-300">0712986990, 0720865495</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-gray-300">acombwellness.ke@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-gray-300">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Our Location</h4>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0131227847!2d36.9397878!3d-1.1069444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8c3e1e7d7d%3A0x5f7e3da5e6c1f0b7!2sAcomb%20Wellness%20Center!5e0!3m2!1sen!2sus!4v1710507600000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Acomb Wellness Center Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white btn-calm-hover" asChild>
                <a href="https://maps.app.goo.gl/ggvz2geEv44ZVeCb6" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-700/50 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Acomb Wellness Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

