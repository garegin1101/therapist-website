import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          Ara Miqayelyan | Psychologist & Mental Health Specialist in Yerevan,
          Armenia
        </title>
        <meta
          name="description"
          content="Professional psychological therapy services in Yerevan. Specialized in anxiety, depression, relationships, and personal growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>

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
                  <Link
                    href="/"
                    className="text-xs font-medium text-primary-600 dark:text-primary-400"
                  >
                    EN
                  </Link>
                  <span className="text-gray-400 text-xs">|</span>
                  <Link
                    href="/hy"
                    className="text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    ՀԱՅ
                  </Link>
                  <span className="text-gray-400 text-xs">|</span>
                  <Link
                    href="/ru"
                    className="text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    РУ
                  </Link>
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Ara Miqayelyan
              </h1>
              <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-4 font-medium">
                Psychologist / Mental Health Specialist
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Based in Yerevan, Armenia
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed`}
              >
                Hello, I am Ara Mikaelyan—a certified psychologist, mental
                health counselor, and psychoeducation specialist. I am a member
                of the Logotherapy and Existential Analysis Association and the
                EMDR Armenia Association. I serve as a facilitator for retreat
                groups, where we provide a confidential environment for both
                groups and individuals. Additionally, I am involved in
                international youth programs focused on developing soft skills,
                adaptation, professional orientation, and the enhancement of
                internal personal processes. I also provide coaching and
                mentoring services. I am the co-founder and a board member of
                the 'Headway Projects' NGO.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/book"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 text-center"
                >
                  Book a Session
                </Link>
                <a
                  href="#about"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex justify-center md:justify-start relative">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-64 h-64 bg-primary-300/20 dark:bg-primary-800/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="relative z-10 w-full max-w-md">
                <div className="relative aspect-square">
                  {/* Decorative frame elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10 rounded-3xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary-600/5 to-transparent rounded-3xl"></div>

                  <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary-500/50 hover:-translate-y-2">
                    <Image
                      src="/images/profile/ara_mikayelyan_headshot.jpg"
                      alt="Ara Miqayelyan - Psychologist & Therapist"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "50% 100%" }}
                      priority
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>
                {/* Video Introduction Button */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="mt-6 w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-3 group"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400 transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
            {/* Video Modal */}
            {isVideoOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
                onClick={() => setIsVideoOpen(false)}
              >
                <div
                  className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    aria-label="Close video"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Video Player */}
                  <div className="relative aspect-video bg-black">
                    <video
                      controls
                      autoPlay
                      className="w-full h-full"
                      poster="/images/profile/ara_mikayelyan_headshot.jpg"
                    >
                      <source
                        src="/videos/ara_introduction.mp4"
                        type="video/mp4"
                      />
                      <track
                        kind="captions"
                        src="/videos/ara_introduction.vtt"
                        srcLang="hy"
                        label="Հայերեն"
                      />
                      Your browser does not support video playback.
                    </video>
                  </div>

                  {/* Video Title */}
                  <div className="p-6 bg-gray-800">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Hey, I'm Ara Mikayelyan
                    </h3>
                    <p className="text-gray-400">
                      Learn more about my approach and work style
                    </p>
                  </div>
                </div>
              </div>
            )}
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
            <div className="max-w-5xl mx-auto">
              <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center">
                  As a psychotherapist, I prioritize the safety and ethics of
                  the therapeutic relationship. My approach is based on respect
                  and acceptance, where there are no imposed judgments. This is
                  a unique space aimed at the joint exploration of thoughts and
                  emotions, allowing for a deeper understanding of one's own
                  experiences.
                </p>
              </div>

              {/* Work Experience */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg
                    className="w-7 h-7 text-primary-600 dark:text-primary-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Psychologist-Counselor
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        February 2024 – Present
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Ifeel - Humanising Growth
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Psychologist-Psychotherapist
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        2025 – Present
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      "Aystegh" Psychological Center
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Psychologist-Psychotherapist
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        September 2022 – Present
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Psyguard.me Psychological Service Platform
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Clinical Psychologist
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        September - November 2020
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Mikaelyan Institute of Surgery
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Work with military personnel affected by the 2020 44-day
                      war and their family members
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Psychologist-Counselor
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        August 2019 - September 2021
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      "Suggest" Psychological Workshop
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg
                    className="w-7 h-7 text-primary-600 dark:text-primary-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Psychology, Bachelor's Degree
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2015-2019
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Yerevan State University (YSU)
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Postgraduate Education
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2023-2024
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Jagiellonian University in Krakow, Poland
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Professional Certification
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2022-2025
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Moscow Institute of Psychoanalysis, Russia
                    </p>
                  </div>
                </div>
              </div>

              {/* Training & Certifications */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg
                    className="w-7 h-7 text-primary-600 dark:text-primary-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Trainings and Certificates
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Gestalt Psychotherapy
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          62 hours | November 2018 - March 2019
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          YSU Center for Applied Psychology
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Existential Psychology and Psychotherapy
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          192 hours (4 stages) | 2020
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          YSU Center for Applied Psychology
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Cognitive Behavioral Therapy
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          60 hours | 2020
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Basic Course
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          ESC Volunteering
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2023 | Kielce, Poland
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Cultural and Educational Centers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Well-being Skills
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2024 | Gremi, Georgia
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Working with Youth
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Career Counseling
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2024 | Poznań, Poland
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Youth Career Counseling Center
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          EMDR Training
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          September 18-20, 2025 | Yerevan
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Theory and Clinical Methods
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Personality Disorders
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2025 | Yerevan
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Principles and Diagnostics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow md:col-span-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Digestive Issues Without Organic Cause
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2025 | Yerevan
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Dialogue Between Thoughts and the Digestive System
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    6
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Years of Experience
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Years as a Psychotherapist
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Languages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}

        {/* Approach Section */}
        <section id="approach" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Approach
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Professional Interests and Scope of Work
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: Anxiety & Mood Disorders */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_1.jpg"
                    alt="Anxiety and Mood Disorders"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 34%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Anxiety and Mood Disorders
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Anxiety spectrum disorders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Mood disorders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Depression and complex depression accompanied by
                        suicidal ideation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Difficulties in experiencing, controlling, and
                        expressing emotions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Trauma & PTSD */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_2.jpg"
                    alt="Trauma and PTSD"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 44%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Trauma and Post-Traumatic Stress
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Post-Traumatic Stress Disorder (PTSD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Complex Post-Traumatic Stress Disorder (C-PTSD)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Difficulties in processing loss and grief</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Chronic feelings of guilt and shame</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Relationships & Identity */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_3.jpg"
                    alt="Relationships and Adaptation"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 58%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Relationships and Adaptation
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Boundary issues in interpersonal relationships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Difficulties and conflicts in intrapersonal
                        relationships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Borderline Personality Disorder (BPD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Working with LGBTQ+ individuals</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4: Meaning & Personal Growth */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_4.jpg"
                    alt="Meaning of Life and Personal Growth"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 12%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Meaning of Life and Personal Growth
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Loss of meaning in life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Issues with personal growth and adaptation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Self-esteem issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Psychosomatic issues</span>
                    </li>
                  </ul>
                </div>
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
                      <div className="flex items-center gap-3">
                        <p className="text-gray-600 dark:text-gray-400">
                          +374 94 164634
                        </p>
                        <a
                          href="https://wa.me/37494164634"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 transition-colors"
                          aria-label="Contact via WhatsApp"
                          title="Message on WhatsApp"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </a>
                      </div>
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

                  {/* Social Media */}
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
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Connect on Social Media
                      </h3>
                      <div className="flex gap-4">
                        <a
                          href="https://www.linkedin.com/in/ara-mikayelyan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/ami_kayelyan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          aria-label="Instagram"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61575994023913"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          aria-label="Facebook"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>
                      </div>
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
