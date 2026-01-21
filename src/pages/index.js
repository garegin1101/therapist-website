import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ara Miqayelyan | Psychologist & Therapist in Yerevan, Armenia
        </title>
        <meta
          name="description"
          content="Professional psychological therapy services in Yerevan. Specialized in anxiety, depression, relationships, and personal growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Navigation */}
        <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                Ara Miqayelyan
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#approach"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Approach
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
                
                {/* Language Switcher */}
                <div className="flex items-center gap-2 border-l border-gray-300 dark:border-gray-600 pl-4">
                  <Link
                    href="/"
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    EN
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href="/hy"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    ՀԱՅ
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href="/ru"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    РУ
                  </Link>
                </div>

                <Link
                  href="/book"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg"
                >
                  Book a Session
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-3">
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-1">
                  <Link href="/" className="text-xs font-medium text-primary-600 dark:text-primary-400">EN</Link>
                  <span className="text-gray-400 text-xs">|</span>
                  <Link href="/hy" className="text-xs font-medium text-gray-600 dark:text-gray-400">ՀԱՅ</Link>
                  <span className="text-gray-400 text-xs">|</span>
                  <Link href="/ru" className="text-xs font-medium text-gray-600 dark:text-gray-400">РУ</Link>
                </div>
                <Link
                  href="/book"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ara Miqayelyan
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-6 font-medium">
              Psychologist / Therapist
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Based in Yerevan, Armenia
            </p>
            <p
              className={`${inter.className} text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed`}
            >
              I provide compassionate, evidence-based therapy to help you
              navigate life's challenges. With a client-centered approach
              integrating cognitive-behavioral therapy (CBT) and psychodynamic
              techniques, I support individuals in achieving emotional
              well-being, personal growth, and meaningful change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Book a Session
              </Link>
              <a
                href="#about"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-full text-lg font-semibold transition-all w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-white dark:bg-gray-800 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              About the Therapist
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  With 6 years of experience in psychology and 3 years specializing as a psychotherapist, 
                  I am dedicated to creating a safe, non-judgmental space where clients can explore their 
                  thoughts, feelings, and find meaning in their experiences. My approach is rooted in 
                  Logotherapy and Existential-Humanistic psychology, focusing on helping you discover 
                  purpose and overcome life's challenges.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I hold a Bachelor's degree in Psychology from Yerevan State University and completed 
                  advanced training in Logotherapy and Existential Analysis at the Moscow Institute of 
                  Psychoanalysis. I've also trained in EMDR, Gestalt therapy, and personality disorders, 
                  bringing an integrative approach tailored to each individual's unique needs.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Whether you're dealing with anxiety, depression, trauma, relationship challenges, or 
                  searching for life's meaning, I'm here to support you on your journey toward healing, 
                  growth, and a more fulfilling life.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    6
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Years as Psychotherapist
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Languages Spoken
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Services Offered
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive therapeutic support tailored to your individual
              needs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Individual Therapy
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  One-on-one sessions focused on your personal goals,
                  challenges, and mental health needs.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Couples Therapy
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strengthen your relationship, improve communication, and
                  resolve conflicts together.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Online Sessions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Convenient and confidential therapy from the comfort of your
                  own space via video call.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Anxiety & Stress
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learn effective coping strategies to manage anxiety, stress,
                  and overwhelming emotions.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Depression Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Compassionate care for those experiencing depression, low
                  mood, or loss of motivation.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Personal Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop self-awareness, build confidence, and work toward your
                  full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section
          id="approach"
          className="bg-white dark:bg-gray-800 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Therapeutic Approach
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Evidence-based methods tailored to your unique journey
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Approach 1 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Logotherapy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Based on Viktor Frankl's approach, Logotherapy helps you discover meaning and purpose in life, 
                  even in challenging circumstances. It focuses on finding what makes your life worth living and 
                  using that as a source of strength and motivation.
                </p>
              </div>

              {/* Approach 2 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Existential-Humanistic Therapy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This approach emphasizes personal freedom, choice, and responsibility. Together, we explore 
                  life's fundamental questions, helping you make authentic choices and live a more fulfilling, 
                  meaningful life aligned with your values.
                </p>
              </div>

              {/* Approach 3 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  EMDR & Trauma Work
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based method for processing 
                  traumatic memories and experiences. It helps reduce emotional distress and supports healing from 
                  PTSD, complex trauma, and difficult life events.
                </p>
              </div>

              {/* Approach 4 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Integrative Approach
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I combine techniques from Gestalt therapy, existential psychology, and other evidence-based 
                  methods to create a personalized treatment plan. Each person is unique, and your therapy should 
                  be tailored to your specific needs and goals.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Armenian
                </span>
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  English
                </span>
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Russian
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Ready to start your journey? Book a session online or reach out
              with any questions.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:arayikmiqayelyan1997@gmail.com"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        arayikmiqayelyan1997@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +374 94 164634
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Yerevan, Armenia
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        In-person and online sessions available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Prefer to book directly? Use the online booking system for
                    fastest scheduling.
                  </p>
                  <Link
                    href="/book"
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
                  >
                    Book a Session Now
                  </Link>
                </div>
              </div>

              {/* Note about contact form */}
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
                  <strong>Note:</strong> For appointment requests, please use
                  the booking page. For general inquiries, feel free to email
                  directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                © {new Date().getFullYear()} Ara Miqayelyan. All rights
                reserved.
              </p>
              <p className="text-sm text-gray-500">
                Professional psychological services in Yerevan, Armenia
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
