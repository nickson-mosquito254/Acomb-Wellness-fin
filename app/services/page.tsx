import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Services | Acomb Wellness Center",
  description:
    "Explore the comprehensive mental health and addiction treatment services offered by Acomb Wellness Center in Kenya.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-kenyan-cream to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-kenyan-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
              Comprehensive, compassionate care for mental health and addiction recovery in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Addiction Treatment */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop"
                  alt="Serene Kenyan landscape symbolizing the journey to recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary-dark dark:text-white">
                    Addiction Treatment
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our comprehensive addiction treatment programs help individuals overcome substance abuse and
                  behavioral addictions through evidence-based therapies, peer support, and personalized recovery plans.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We provide treatment for alcohol addiction, drug addiction, behavioral addictions, and co-occurring
                  disorders, with a focus on long-term recovery and relapse prevention.
                </p>
                <Button className="rounded-full group bg-primary hover:bg-primary/90 text-white btn-calm-hover" asChild>
                  <Link href="/services/addiction" className="inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mental Health Treatment */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=2070&auto=format&fit=crop"
                  alt="Peaceful Kenyan landscape with mountains, symbolizing mental clarity"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary-light dark:bg-secondary/30 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary-dark dark:text-white">
                    Mental Health Treatment
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our mental health services address a wide range of conditions, including anxiety, depression, trauma,
                  and more, with compassionate care and evidence-based approaches.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We offer individual therapy, group therapy, medication management, and holistic wellness approaches to
                  support your mental health journey.
                </p>
                <Button className="rounded-full group bg-primary hover:bg-primary/90 text-white btn-calm-hover" asChild>
                  <Link href="/services/mental-health" className="inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Programs Section */}
      <section className="py-16 md:py-24 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-3 py-1 text-sm text-primary dark:text-green-400 mb-4">
              Treatment Programs
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Flexible Treatment Options
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We offer a range of treatment programs to accommodate different levels of care and individual
              circumstances.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                  alt="Acomb Wellness Center Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Inpatient Treatment
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our residential program provides 24/7 care in a structured, supportive environment, ideal for those
                  with severe addiction or mental health challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
                  alt="Acomb Wellness Center Garden"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Outpatient Programs
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Flexible treatment options that allow you to continue with work, school, or family responsibilities
                  while receiving care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Acomb Wellness Center Therapy Room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Aftercare & Support
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Ongoing support to help maintain recovery and prevent relapse after completing initial treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-primary/90 dark:from-secondary/80 dark:to-primary/70 relative text-white">
        <div className="absolute inset-0 bg-kenyan-pattern opacity-10"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Taking the first step toward recovery is an act of courage. We're here to support you every step of the
              way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 btn-calm-hover" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-white border-white hover:bg-white/10 btn-calm-hover"
                asChild
              >
                <a href="tel:0712986990">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

