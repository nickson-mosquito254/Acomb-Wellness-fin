"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Check } from "lucide-react"
import { ImageSlider } from "@/components/image-slider"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form and show success message
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setIsSubmitted(true)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Contact page hero images
  const contactHeroImages = [
    {
      src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2946&auto=format&fit=crop",
      alt: "Mount Kenya with clear blue skies, symbolizing clarity and freedom",
    },
    {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2832&auto=format&fit=crop",
      alt: "Kenyan savannah at sunset with acacia trees, representing growth and healing",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageSlider
            images={contactHeroImages}
            autoplay={true}
            interval={5000}
            showControls={false}
            height={500}
            overlayClassName="bg-hero-gradient"
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 mb-8">
              We're here to help. Reach out to us with any questions or to schedule a consultation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">Call Us</h3>
                <p className="text-white/80">0712 986 990</p>
                <p className="text-white/80">0720 865 495</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">Email Us</h3>
                <p className="text-white/80">acombwellness.ke@gmail.com</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <MapPin className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-white/80">Kimunyu, Off Kenyatta Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-4 py-1.5 text-sm font-medium text-primary dark:text-green-400 mb-4">
                  Contact Us
                </div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-dark dark:text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="border-none shadow-md dark:bg-gray-800">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-xl p-6 mb-6 flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Message Sent!</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Thank you for your message! We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {error ? (
                    <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-xl p-6 mb-6">
                      {error}
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="rounded-lg h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        required
                      />
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="rounded-lg h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="rounded-lg h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full gap-2 h-12 text-base bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Info */}
            <div>
              <div className="mb-8">
                <div className="inline-block rounded-full bg-secondary-light dark:bg-secondary/30 px-4 py-1.5 text-sm font-medium text-secondary dark:text-green-400 mb-4">
                  Our Location
                </div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-dark dark:text-white mb-4">
                  Find Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Visit our facility at Kimunyu, Off Kenyatta Road.</p>
              </div>

              {/* Map */}
              <Card className="border-none shadow-md overflow-hidden mb-8 dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="relative h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0131227847!2d36.9397878!3d-1.1069444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8c3e1e7d7d%3A0x5f7e3da5e6c1f0b7!2sAcomb%20Wellness%20Center!5e0!3m2!1sen!2sus!4v1710507600000!5m2!1sen!2sus"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Acomb Wellness Center Location"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Additional info */}
              <Card className="border-none shadow-md dark:bg-gray-800">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-6">
                    Hours of Operation
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 border-b border-gray-100 dark:border-gray-700">
                      <span className="font-medium dark:text-white">Monday - Friday</span>
                      <span className="text-gray-600 dark:text-gray-400">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-100 dark:border-gray-700">
                      <span className="font-medium dark:text-white">Saturday</span>
                      <span className="text-gray-600 dark:text-gray-400">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-3">
                      <span className="font-medium dark:text-white">Sunday</span>
                      <span className="text-gray-600 dark:text-gray-400">Closed</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-4">
                      Getting Here
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Our facility is located in Kimunyu, off Kenyatta Road, near Juja. We're easily accessible by both
                      private and public transportation.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you need help with directions or have any questions about visiting us, please don't hesitate to
                      contact us.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-accent-muted dark:bg-accent/30 px-4 py-1.5 text-sm font-medium text-accent dark:text-green-400 mb-4">
              Emergency Support
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              If you or a loved one is experiencing a crisis or needs immediate support, our team is available to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full text-lg bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                asChild
              >
                <a href="tel:0712986990">Call Our Helpline</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg dark:text-white dark:border-gray-600 btn-calm-hover"
                asChild
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

