import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata = {
  title: "Addiction Treatment | Acomb Wellness Center",
  description:
    "Comprehensive addiction treatment services at Acomb Wellness Center in Kenya. We provide evidence-based approaches to help you overcome substance abuse and behavioral addictions.",
}

export default function AddictionTreatmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-kenyan-cream to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-kenyan-pattern opacity-5"></div>
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
                Addiction Treatment
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
                Comprehensive, compassionate care for those struggling with substance abuse and behavioral addictions.
              </p>
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-white btn-calm-hover"
                size="lg"
                asChild
              >
                <Link href="/contact">Get Help Today</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop"
                alt="Serene Kenyan landscape symbolizing the journey to recovery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Addiction Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop"
                alt="Peaceful Kenyan landscape with mountains, symbolizing the journey to recovery"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-3 py-1 text-sm text-primary dark:text-green-400">
                Understanding Addiction
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white">
                What is Addiction?
              </h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Addiction is a complex, chronic condition characterized by compulsive substance use or behavior despite
                harmful consequences. It involves changes in brain function that can persist long after the immediate
                effects of substances have worn off.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                At Acomb Wellness Center, we understand that addiction is not a moral failing or lack of willpower, but
                a treatable medical condition that requires comprehensive care and support.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Our approach to addiction treatment is based on the latest research and evidence-based practices,
                tailored to meet the unique needs of each individual we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-secondary-light dark:bg-secondary/30 px-3 py-1 text-sm text-secondary dark:text-green-400 mb-4">
              Our Approach
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Comprehensive Addiction Treatment
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We provide a holistic approach to addiction treatment that addresses the physical, psychological, and
              social aspects of recovery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Assessment & Evaluation */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=2070&auto=format&fit=crop"
                  alt="Supportive conversation in Kenya"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Assessment & Evaluation
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  Our treatment begins with a comprehensive assessment to understand your unique needs, history, and
                  goals for recovery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Medical and psychiatric evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Substance use history assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Personalized treatment planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Detoxification */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                  alt="Wellness center environment"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Detoxification
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  For those who need it, we provide safe, medically-supervised detoxification to manage withdrawal
                  symptoms and prepare for ongoing treatment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">24/7 medical supervision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Medication-assisted treatment when appropriate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Comfortable, supportive environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Therapy & Counseling */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                  alt="Professional healthcare worker"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Therapy & Counseling
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  Our evidence-based therapeutic approaches help you understand and address the root causes of addiction
                  and develop healthy coping strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Individual therapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Group therapy and peer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Family therapy and education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {/* Relapse Prevention */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop"
                  alt="Supportive therapy session"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Relapse Prevention
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  We equip you with the tools and strategies needed to maintain long-term recovery and prevent relapse.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Identifying triggers and warning signs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Developing coping strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Building a support network</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Holistic Approaches */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2832&auto=format&fit=crop"
                  alt="Kenyan savannah at sunset with acacia trees, representing growth and healing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Holistic Approaches
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  We incorporate holistic practices that support overall wellbeing and complement traditional treatment
                  methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Mindfulness and meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Physical exercise and nutrition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Creative expression and art therapy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Aftercare & Support */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
                  alt="Nairobi skyline at dusk, representing hope and new beginnings"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Aftercare & Support
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  Our support continues beyond formal treatment, with ongoing resources to help you maintain your
                  recovery journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Continuing care planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Support groups and alumni programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Regular check-ins and follow-up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Addiction We Treat */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-3 py-1 text-sm text-primary dark:text-green-400 mb-4">
              Our Services
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Types of Addiction We Treat
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We provide specialized treatment for a wide range of substance use and behavioral addictions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2946&auto=format&fit=crop"
                alt="Mount Kenya with clear blue skies, symbolizing clarity and freedom"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-primary-dark dark:text-white">
                Substance Addictions
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                We provide comprehensive treatment for various substance addictions, addressing both the physical and
                psychological aspects of dependency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-white">Alcohol Addiction</p>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Comprehensive treatment for alcohol dependency, including detoxification, therapy, and long-term
                      support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-white">Drug Addiction</p>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Specialized care for addiction to prescription medications, opioids, stimulants, and other
                      substances.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-white">Prescription Drug Abuse</p>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Specialized treatment for dependency on prescription medications, including painkillers and
                      sedatives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="font-heading text-2xl font-bold text-primary-dark dark:text-white">
                Other Addictions & Services
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                Beyond substance use disorders, we also provide treatment for behavioral addictions and specialized
                services for complex cases.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-white">Behavioral Addictions</p>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Treatment for non-substance addictions such as gambling, internet, and gaming disorders.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-white">Co-occurring Disorders</p>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Integrated treatment for addiction alongside mental health conditions like depression, anxiety, or
                      trauma.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-white">Relapse Recovery</p>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Support for those who have experienced relapse, with renewed focus on sustainable recovery
                      strategies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                alt="Peaceful Kenyan garden setting, representing the healing environment at Acomb Wellness Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Programs Section */}
      <section className="py-16 md:py-24 bg-kenyan-light dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-secondary-light dark:bg-secondary/30 px-3 py-1 text-sm text-secondary dark:text-green-400 mb-4">
              Treatment Programs
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Our Addiction Recovery Programs
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We offer a range of treatment programs to accommodate different levels of care and individual
              circumstances.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
                  Residential Treatment
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our residential program provides 24/7 care in a structured, supportive environment, ideal for those
                  with severe addiction challenges.
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
                  src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2069&auto=format&fit=crop"
                  alt="Acomb Wellness Center Common Area"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Family Program
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Support and education for family members to help them understand addiction and learn how to support
                  their loved one's recovery.
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
              Begin Your Recovery Journey Today
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

