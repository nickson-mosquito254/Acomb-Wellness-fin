import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart } from "lucide-react"
import { ImageSlider } from "@/components/image-slider"

export const metadata = {
  title: "About Us | Acomb Wellness Center",
  description:
    "Learn about Acomb Wellness Center's mission, values, and team dedicated to providing mental health and addiction treatment services in Kenya.",
}

export default function AboutPage() {
  // About page hero images
  const aboutHeroImages = [
    {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2832&auto=format&fit=crop",
      alt: "Kenyan savannah at sunset with acacia trees, representing growth and healing",
    },
    {
      src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2946&auto=format&fit=crop",
      alt: "Mount Kenya with clear blue skies, symbolizing clarity and freedom",
    },
  ]

  // Facility images
  const facilityImages = [
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      alt: "Acomb Wellness Center Garden",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      alt: "Acomb Wellness Center Therapy Room",
    },
    {
      src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2069&auto=format&fit=crop",
      alt: "Acomb Wellness Center Common Area",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      alt: "Acomb Wellness Center Facility",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-kenyan-cream to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-kenyan-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              About Acomb Wellness Center
            </h1>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
              Dedicated to providing compassionate care for mental health and addiction recovery in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="relative">
              <ImageSlider
                images={aboutHeroImages}
                autoplay={true}
                interval={5000}
                className="rounded-2xl overflow-hidden shadow-md"
                height={500}
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-3 py-1 text-sm text-primary dark:text-green-400">
                Our Story
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white">
                Our Journey of Healing
              </h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Acomb Wellness Center was founded with a vision to create a safe, supportive environment for Kenyans
                struggling with mental health issues and addiction. Our founders recognized the need for comprehensive,
                culturally sensitive treatment options in Kenya.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Since our establishment, we have been committed to helping individuals obtain a free environment void of
                drugs and alcohol use. Sobriety is our main focus, and our competency in helping those struggling with
                addiction is evident in our approach and success stories.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Today, we continue to grow and evolve, expanding our services to meet the changing needs of our
                community while staying true to our core mission of compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="py-16 md:py-24 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Mission */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-primary-dark dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  To provide compassionate, evidence-based mental health and addiction treatment services that empower
                  individuals to achieve lasting recovery and improved quality of life.
                </p>
                <p className="text-muted-foreground dark:text-gray-300">
                  We are committed to creating a safe, supportive environment where individuals can heal, grow, and
                  thrive, free from the constraints of mental health challenges and addiction.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-secondary-light dark:bg-secondary/30 flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-primary-dark dark:text-white mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Compassion</p>
                      <p className="text-muted-foreground dark:text-gray-300">
                        We approach each individual with empathy, understanding, and respect.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Excellence</p>
                      <p className="text-muted-foreground dark:text-gray-300">
                        We strive for the highest standards in all aspects of our care.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Integrity</p>
                      <p className="text-muted-foreground dark:text-gray-300">
                        We act with honesty, transparency, and ethical responsibility.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Inclusivity</p>
                      <p className="text-muted-foreground dark:text-gray-300">
                        We welcome and respect individuals of all backgrounds and walks of life.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Empowerment</p>
                      <p className="text-muted-foreground dark:text-gray-300">
                        We believe in each individual's capacity for growth and transformation.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-block rounded-full bg-secondary-light dark:bg-secondary/30 px-3 py-1 text-sm text-secondary dark:text-green-400 mb-4">
              Our Team
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-4">
              Meet Our Dedicated Professionals
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              Our team of experienced professionals is committed to providing compassionate, evidence-based care to help
              you on your journey to recovery.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
                  alt="Clinical Director"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-1">
                  Dr. Jane Mwangi
                </h3>
                <p className="text-primary dark:text-green-400 font-medium mb-3">Clinical Director</p>
                <p className="text-muted-foreground dark:text-gray-300">
                  Dr. Mwangi has over 15 years of experience in mental health and addiction treatment, specializing in
                  trauma-informed care.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Lead Counselor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-1">David Ochieng</h3>
                <p className="text-primary dark:text-green-400 font-medium mb-3">Lead Counselor</p>
                <p className="text-muted-foreground dark:text-gray-300">
                  David brings a wealth of experience in addiction counseling and is passionate about helping clients
                  achieve lasting recovery.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                  alt="Mental Health Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-1">Sarah Kamau</h3>
                <p className="text-primary dark:text-green-400 font-medium mb-3">Mental Health Specialist</p>
                <p className="text-muted-foreground dark:text-gray-300">
                  Sarah specializes in anxiety and depression treatment, with a focus on culturally sensitive approaches
                  for Kenyan clients.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white btn-calm-hover" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-accent-muted dark:bg-accent/30 px-3 py-1 text-sm text-accent dark:text-green-400">
                Our Facilities
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white">
                A Healing Environment
              </h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Our facility is designed to provide a safe, comfortable, and therapeutic environment for healing and
                recovery. Located in Kimunyu, off Kenyatta Road, our center offers a peaceful setting away from the
                stresses of everyday life.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                We provide both inpatient and outpatient services, with comfortable accommodations for those staying
                with us. Our treatment spaces are designed to foster both individual reflection and community
                connection.
              </p>
              <Button variant="outline" className="btn-calm-hover dark:text-white dark:border-gray-600" asChild>
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {facilityImages.map((image, index) => (
                <div key={index} className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
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
              Take the first step towards recovery and a healthier, more fulfilling life. Our team is here to support
              you every step of the way.
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
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

