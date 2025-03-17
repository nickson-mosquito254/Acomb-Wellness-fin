import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Users, Shield, ArrowRight, Star, Check, Phone, Mail, MapPin } from "lucide-react"
import { ImageSlider } from "@/components/image-slider"

export default function Home() {
  // Hero slider images - using Kenyan-themed imagery
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2946&auto=format&fit=crop",
      alt: "Mount Kenya with clear blue skies, symbolizing clarity and freedom",
    },
    {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2832&auto=format&fit=crop",
      alt: "Kenyan savannah at sunset with acacia trees, representing growth and healing",
    },
    {
      src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop",
      alt: "Peaceful Kenyan landscape with mountains in the background, symbolizing the journey to recovery",
    },
  ]

  // Service images
  const addictionImage = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop"
  const mentalHealthImage =
    "https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=2070&auto=format&fit=crop"

  // About section images
  const aboutImage = "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
  const aboutAccentImage =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"

  // CTA section image
  const ctaImage = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Hero Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <ImageSlider
            images={heroImages}
            autoplay={true}
            interval={6000}
            showControls={false}
            height={800}
            overlayClassName="bg-hero-gradient"
          />
        </div>

        <div className="container relative z-10 pt-20 pb-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8 text-white">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Partner in Mental Health and Recovery
              </h1>
              <p className="text-xl text-white/90 max-w-[600px]">
                Acomb Wellness Center provides compassionate care to help Kenyans achieve a life free from drugs and
                alcohol addiction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full text-lg bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                  asChild
                >
                  <Link href="/contact">Get Help Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg bg-transparent border-white text-white hover:bg-white/10 btn-calm-hover"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero CTA Card */}
            <div className="bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-md ml-auto animate-fadeIn">
              <h3 className="font-heading text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
                Start Your Healing Journey
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary-dark/30 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Confidential consultation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary-dark/30 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Experienced clinical team</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary-dark/30 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Personalized treatment plans</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-light dark:bg-primary-dark/30 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Nurturing, supportive environment</p>
                </div>
              </div>
              <Button
                className="w-full rounded-full gap-2 bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                size="lg"
              >
                <Phone className="h-4 w-4" /> Call Now: 0712 986 990
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary-light dark:bg-primary-dark/30 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Services
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Comprehensive Care for Mental Health & Addiction
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We provide evidence-based treatment approaches tailored to your unique needs and circumstances.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Addiction Treatment */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
              <div className="relative h-[300px]">
                <Image
                  src={addictionImage || "/placeholder.svg"}
                  alt="Serene Kenyan landscape symbolizing the journey to recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-light dark:bg-primary-dark/30 flex items-center justify-center">
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
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Alcohol & drug addiction treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Detoxification support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Relapse prevention strategies</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="rounded-full group btn-calm-hover dark:text-white dark:border-gray-600"
                  asChild
                >
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
                  src={mentalHealthImage || "/placeholder.svg"}
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
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Individual & group therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Trauma-informed care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Holistic wellness approaches</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="rounded-full group btn-calm-hover dark:text-white dark:border-gray-600"
                  asChild
                >
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

      {/* About Us Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={aboutImage || "/placeholder.svg"}
                  alt="Kenyan landscape with acacia trees at sunset, symbolizing growth and healing"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating accent image */}
              <div className="absolute -bottom-10 -right-10 h-[200px] w-[200px] rounded-2xl overflow-hidden shadow-md border-8 border-white dark:border-gray-900 hidden md:block">
                <Image
                  src={aboutAccentImage || "/placeholder.svg"}
                  alt="Nairobi skyline at dusk, representing hope and new beginnings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block rounded-full bg-secondary-light dark:bg-secondary/30 px-4 py-1.5 text-sm font-medium text-secondary dark:text-green-400">
                About Us
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-dark dark:text-white">
                Dedicated to Your Healing Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Acomb Wellness Center is committed to helping individuals in Kenya obtain a life free from drugs and
                alcohol use. Our focus is on holistic recovery, addressing the physical, emotional, and social aspects
                of wellness.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded by experienced healthcare professionals with a passion for mental health and addiction recovery,
                our center provides a safe, nurturing environment where healing can flourish.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-kenyan-light dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-accent-muted dark:bg-accent/30 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-primary-dark dark:text-white">Experienced Team</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Led by experts in mental health & addiction
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-kenyan-light dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-primary-dark dark:text-white">Safe Environment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">A nurturing space for healing & growth</p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="rounded-full bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                  size="lg"
                  asChild
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-kenyan-light dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-kenyan-pattern opacity-5"></div>

        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-4 py-1.5 text-sm font-medium text-primary dark:text-green-400 mb-4">
              Why Choose Us
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              What Makes Acomb Wellness Center Different
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We provide a unique approach to mental health and addiction treatment that sets us apart.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Safe Space */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">Safe Space</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide a safe, supportive environment where clients can heal and recover without fear of judgment
                  or stigma, fostering trust and openness.
                </p>
              </CardContent>
            </Card>

            {/* Experienced Clinical Team */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-secondary"></div>
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-secondary-light dark:bg-secondary/30 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Experienced Clinical Team
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of seasoned professionals brings extensive knowledge and expertise in mental health and
                  addiction treatment to support your recovery journey.
                </p>
              </CardContent>
            </Card>

            {/* Community & Peer Support */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-accent"></div>
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-accent-muted dark:bg-accent/30 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Community Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We foster a sense of community and belonging, where clients can connect with others who understand
                  their experiences and build supportive relationships.
                </p>
              </CardContent>
            </Card>

            {/* Holistic & Evidence-Based Approaches */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Holistic Approaches
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We combine evidence-based treatments with holistic approaches to address the whole person—mind, body,
                  and spirit—for comprehensive healing.
                </p>
              </CardContent>
            </Card>

            {/* Aftercare & Continued Support */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-secondary"></div>
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-secondary-light dark:bg-secondary/30 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Aftercare Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our support doesn't end when treatment does. We provide ongoing aftercare to help maintain recovery
                  and prevent relapse over the long term.
                </p>
              </CardContent>
            </Card>

            {/* Cultural Sensitivity */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-accent"></div>
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-accent-muted dark:bg-accent/30 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Cultural Sensitivity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We understand and respect the cultural context of our clients, incorporating Kenyan values and
                  traditions into our treatment approaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-accent-muted dark:bg-accent/30 px-4 py-1.5 text-sm font-medium text-accent dark:text-green-400 mb-4">
              Success Stories
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Stories of Transformation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Read what our clients have to say about their healing journey at Acomb Wellness Center.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  "Acomb Wellness Center changed my life. The staff was compassionate and understanding, and the
                  treatment program was tailored to my specific needs. I'm now one year sober and living a fulfilling
                  life."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20">
                      <span className="text-primary font-bold">JM</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary-dark dark:text-white">John M.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nairobi • Recovery Program</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  "I was struggling with depression for years before finding Acomb. Their holistic approach to mental
                  health treatment helped me develop coping strategies and rebuild my life. I'm forever grateful."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/10 dark:bg-secondary/20">
                      <span className="text-secondary font-bold">SW</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary-dark dark:text-white">Sarah W.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mombasa • Mental Health Program</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  "As a family member of someone struggling with addiction, I found incredible support at Acomb. Their
                  family program helped us understand addiction and learn how to support our loved one's recovery
                  journey."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center bg-accent/10 dark:bg-accent/20">
                      <span className="text-accent font-bold">DK</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary-dark dark:text-white">David K.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nakuru • Family Support Program</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="rounded-full btn-calm-hover dark:text-white dark:border-gray-600"
              size="lg"
              asChild
            >
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-secondary to-primary/90 dark:from-secondary/80 dark:to-primary/70 relative">
        <div className="absolute inset-0 bg-kenyan-pattern opacity-10"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="text-white space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Begin Your Healing Journey Today
                </h2>
                <p className="text-xl text-white/80">
                  Take the first step towards recovery and a healthier, more fulfilling life. Our team is here to
                  support you every step of the way.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full text-lg bg-white text-primary hover:bg-white/90 btn-calm-hover"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-lg bg-transparent border-white text-white hover:bg-white/10 btn-calm-hover"
                    asChild
                  >
                    <a href="tel:0712986990">Call Now</a>
                  </Button>
                </div>
              </div>

              <Card className="border-none shadow-md overflow-hidden dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="relative h-[400px]">
                    <Image
                      src={ctaImage || "/placeholder.svg"}
                      alt="Peaceful Kenyan garden setting, representing the healing environment at Acomb Wellness Center"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-8">
                        <p className="text-white text-xl font-medium mb-2">
                          "Recovery is a journey, not a destination."
                        </p>
                        <p className="text-white/80">Let us walk with you on your path to wellness.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary-light dark:bg-primary/30 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                0712 986 990
                <br />
                0720 865 495
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-secondary-light dark:bg-secondary/30 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">acombwellness.ke@gmail.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent-muted dark:bg-accent/30 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kimunyu, Off Kenyatta Road, Near Juja
                <br />
                P.O. Box 1432-01000
              </p>
              <a
                href="https://maps.app.goo.gl/ggvz2geEv44ZVeCb6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm mt-1 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

