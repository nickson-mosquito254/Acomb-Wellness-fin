import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata = {
  title: "Mental Health Treatment | Acomb Wellness Center",
  description:
    "Comprehensive mental health services at Acomb Wellness Center in Kenya. We provide evidence-based approaches to help you overcome anxiety, depression, and other mental health challenges.",
}

export default function MentalHealthPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-kenyan-cream to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-kenyan-pattern opacity-5"></div>
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
                Mental Health Treatment
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
                Comprehensive, compassionate care for those struggling with anxiety, depression, trauma, and other
                mental health challenges.
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
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
                alt="Peaceful Kenyan landscape with mountains, symbolizing mental clarity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Mental Health Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2832&auto=format&fit=crop"
                alt="Kenyan savannah at sunset with acacia trees, representing growth and healing"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-3 py-1 text-sm text-primary dark:text-green-400">
                Understanding Mental Health
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white">
                What is Mental Health?
              </h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Mental health encompasses our emotional, psychological, and social well-being. It affects how we think,
                feel, and act, and helps determine how we handle stress, relate to others, and make choices.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                At Acomb Wellness Center, we understand that mental health conditions are medical conditions that can
                affect anyone, regardless of age, gender, or background. We approach mental health treatment with
                compassion, evidence-based practices, and a commitment to helping you achieve lasting wellness.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Our approach to mental health treatment is based on the latest research and evidence-based practices,
                tailored to meet the unique needs of each individual we serve, with special consideration for Kenyan
                cultural contexts.
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
              Comprehensive Mental Health Treatment
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We provide a holistic approach to mental health treatment that addresses the physical, psychological, and
              social aspects of wellness.
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
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Medical and psychiatric evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Psychological assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Personalized treatment planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Therapy & Counseling */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
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
                  Our evidence-based therapeutic approaches help you understand and address the root causes of mental
                  health challenges and develop healthy coping strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Individual therapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Group therapy and peer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Family therapy and education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Medication Management */}
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
                  Medication Management
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  When appropriate, our medical team provides careful evaluation, prescription, and monitoring of
                  medications to support your mental health treatment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Psychiatric evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Medication monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Integration with therapy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {/* Holistic Approaches */}
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
                  Holistic Approaches
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  We incorporate holistic practices that support overall wellbeing and complement traditional treatment
                  methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Mindfulness and meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Physical exercise and nutrition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Creative expression and art therapy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Crisis Intervention */}
            <Card className="border-none shadow-md dark:bg-gray-800">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop"
                  alt="About Acomb Wellness Center"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Crisis Intervention
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  We provide immediate support and intervention for individuals experiencing mental health crises.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">24/7 crisis support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Safety planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Stabilization services</span>
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
                  Our support continues beyond formal treatment, with ongoing resources to help you maintain your mental
                  health journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Continuing care planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Support groups and alumni programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300">Regular check-ins and follow-up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary-light dark:bg-primary/30 px-3 py-1 text-sm text-primary dark:text-green-400 mb-4">
              Our Services
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-white mb-6">
              Mental Health Conditions We Treat
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We provide specialized treatment for a wide range of mental health conditions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">Depression</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Comprehensive treatment for various forms of depression, including major depressive disorder,
                  persistent depressive disorder, and seasonal affective disorder.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Anxiety Disorders
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Specialized care for generalized anxiety disorder, panic disorder, social anxiety, and specific
                  phobias.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">Trauma & PTSD</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Evidence-based treatment for post-traumatic stress disorder and other trauma-related conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Bipolar Disorder
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Comprehensive care for managing bipolar disorder, including medication management and therapy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Dual Diagnosis
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Integrated treatment for co-occurring mental health and substance use disorders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-dark dark:text-white mb-3">
                  Stress Management
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Support for managing stress and developing healthy coping strategies for life's challenges.
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
              Taking the first step toward mental wellness is an act of courage. We're here to support you every step of
              the way.
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

