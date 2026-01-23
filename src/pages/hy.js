import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomeHy() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Արա Միքայելյան | Հոգեբան և Հոգեթերապևտ Երևան, Հայաստան</title>
        <meta
          name="description"
          content="Մասնագիտական հոգեթերապևտիկ ծառայություններ Երևանում: Մասնագիտացված տագնապի, դեպրեսիայի, հարաբերությունների և անձնական աճի հարցերում:"
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
                href="/hy"
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                Արա Միքայելյան
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Իմ Մասին
                </a>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Ծառայություններ
                </a>
                <a
                  href="#approach"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Մոտեցում
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Կապ
                </a>

                {/* Language Switcher */}
                <div className="flex items-center gap-2 border-l border-gray-300 dark:border-gray-600 pl-4">
                  <Link
                    href="/"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    EN
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href="/hy"
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
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
                  href="/book-hy"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg"
                >
                  Ամրագրել Հանդիպում
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-3">
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-1">
                  <Link
                    href="/"
                    className="text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    EN
                  </Link>
                  <span className="text-gray-400 text-xs">|</span>
                  <Link
                    href="/hy"
                    className="text-xs font-medium text-primary-600 dark:text-primary-400"
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
                  href="/book-hy"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Ամրագրել
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
                Արա Միքայելյան
              </h1>
              <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-4 font-medium">
                Հոգեբան / Հոգեթերապևտ
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Երևան, Հայաստան
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed`}
              >
                Ողջույն, ես Արա Միքայելյանն եմ՝ դիպլոմավորված հոգեբան, հոգեկան
                առողջության խորհրդատու և հոգեկրթության մասնագետ: Logotherapy and
                Existential Analysis Association-ի և ԱՇԴՎ Հայաստանի ասոցիացիայի
                անդամ եմ: Հանդիսանում եմ ռեթրիթային խմբերի ֆասիլիտատոր, որտեղ
                ապահովում ենք կոնֆիդենցիալ միջավայր խմբերի և անհատների համար:
                Զբաղվում եմ նաև միջազգային երիտասարդական ծրագրերով, որոնք
                ուղղված են երիտասարդների փափուկ հմտությունների (soft skills)
                զարգացմանը, ադապտացիային, մասնագիտական կողմնորոշմանը և ներքին
                այլ գործընթացների կատարելագործմանը: Իրականացնում եմ քոուչինգ և
                մենթորություն: «Headway Projects» ՀԿ համահիմնադիրն ու խորհրդի
                անդամն եմ:
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/book-hy"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 text-center"
                >
                  Ամրագրել Հանդիպում
                </Link>
                <a
                  href="#about"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
                >
                  Իմանալ Ավելին
                </a>
              </div>
            </div>

            {/* Right side - Profile Image & Video */}
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
                      alt="Արա Միքայելյան - Հոգեբան և Հոգեթերապևտ"
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
                  <span>Դիտել Տեսանյութը</span>
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
                      Ձեր դիտարկիչը չի աջակցում տեսանյութի նվագարկմանը:
                    </video>
                  </div>

                  {/* Video Title */}
                  <div className="p-6 bg-gray-800">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Բարև, ես Արա Միքայելյանն եմ
                    </h3>
                    <p className="text-gray-400">
                      Իմանալ ավելին իմ մոտեցման և աշխատանքի ոճի մասին
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
              Հոգեթերապևտի Մասին
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center">
                  Որպես հոգեթերապևտ՝ ես կարևորում եմ թերապևտիկ
                  հարաբերությունների անվտանգությունն ու էթիկան։ Իմ մոտեցումը
                  հիմնված է հարգանքի և ընդունման վրա, որտեղ չկան պարտադրված
                  դատողություններ։ Սա յուրօրինակ տարածք է՝ ուղղված մտքերի և
                  հույզերի համատեղ ուսումնասիրությանը, ինչը թույլ է տալիս ավելի
                  խորությամբ ճանաչել սեփական փորձառությունները:
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
                  Աշխատանքային Փորձ
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Հոգեբան-Խորհրդատու
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        Փետրվար 2024 – Մինչ օրս
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Ifeel - Humanising Growth
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Հոգեբան-Հոգեթերապևտ
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        2025 – Մինչ օրս
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      «Այստեղ» Հոգեբանական Կենտրոն
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Հոգեբան-Հոգեթերապևտ
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        Սեպտեմբեր 2022 – Մինչ օրս
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Psyguard.me Հոգեբանական Ծառայության Հարթակ
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Կլինիկական Հոգեբան
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        Սեպտեմբեր - Նոյեմբեր 2020
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Միքայելյան Վիրաբուժության Ինստիտուտ
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Աշխատանք 2020թ. 44-օրյա պատերազմից տուժած զինծառայողների և
                      նրանց ընտանիքի անդամների հետ
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Հոգեբան-Խորհրդատու
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
                        Օգոստոս 2019 - Սեպտեմբեր 2021
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      «Suggest» Հոգեբանական Արվեստանոց
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
                  Կրթություն
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Հոգեբանություն, Բակալավրիատ
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2015-2019
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Երևանի Պետական Համալսարան (ԵՊՀ)
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Հետդիպլոմային Կրթություն
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2023-2024
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Կրակովի Յագելոնիան Համալսարան, Լեհաստան
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-primary-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Պրոֆեսիոնալ Սերտիֆիկացիա
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2022-2025
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Մոսկվայի Փսիխոանալիզի Ինստիտուտ, Ռուսաստան
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
                  Վերապատրաստումներ և Սերտիֆիկատներ
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Գեշտալտ Հոգեթերապիա
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          62 ժամ | Նոյեմբեր 2018 - Մարտ 2019
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          ԵՊՀ Կիրառական Հոգեբանության Կենտրոն
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Էքզիստենցիալ Հոգեբանություն և Հոգեթերապիա
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          192 ժամ (4 փուլ) | 2020
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          ԵՊՀ Կիրառական Հոգեբանության Կենտրոն
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Կոգնիտիվ Վարքաբանական Թերապիա
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          60 ժամ | 2020
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Բազային Կուրս
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          ESC Կամավորություն
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2023 | Կիելցե, Լեհաստան
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Մշակութային և Կրթական Կենտրոններ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Բարեկեցության Հմտություններ
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2024 | Գրեմի, Վրաստան
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Երիտասարդական Հետ Աշխատանքում
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Կարիերայի Խորհրդատվություն
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2024 | Պոզնան, Լեհաստան
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Երիտասարդների Կարիերայի Խորհրդատվական Կենտրոն
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          ԱՇԴՎ Թրեյնինգ
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Սեպտեմբեր 18-20, 2025 | Երևան
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Տեսություն և Կլինիկական Մեթոդներ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Անձնային Խանգարումներ
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2025 | Երևան
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Սկզբունքներ և Դիագնոստիկա
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700/30 p-5 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow md:col-span-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Մարսողական Խնդիրներ Առանց Օրգանական Պատճառի
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          2025 | Երևան
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Մտքերի և Մարսողական Համակարգի Երկխոսություն
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
                    Տարի Փորձ
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Տարի Որպես Հոգեթերապևտ
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Լեզուներ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Մասնագիտական Հետաքրքրություններ և Աշխատանքի Շրջանակ
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Համապարփակ աջակցություն բազմազան հոգեբանական և հուզական խնդիրների
              լուծման համար
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: Anxiety & Mood Disorders */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_1.jpg"
                    alt="Տագնապ և Տրամադրության Խանգարումներ"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 34%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Տագնապ և Տրամադրության Խանգարումներ
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Տագնապային սպեկտրի խանգարումներ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Տրամադրության խանգարումներ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Դեպրեսիա և բարդացված դեպրեսիա՝ ուղեկցվող սուիցիդալ
                        մտքերով
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Հույզերի ապրման, վերահսկման և արտահայտման
                        դժվարություններ
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
                    alt="Տրավմա և ՀՏՍԽ"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 44%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Տրավմա և Հետտրավմատիկ Սթրես
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Հետտրավմատիկ սթրեսային խանգարում (ՀՏՍԽ)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Կոմպլեքս հետտրավմատիկ սթրեսային խանգարում</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Կորստի և վշտի ապրման բարդություններ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Խրոնիկ մեղքի և ամոթի զգացում</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Relationships & Identity */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_3.jpg"
                    alt="Հարաբերություններ և Ադապտացիա"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 58%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Հարաբերություններ և Ադապտացիա
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Միջանձնային հարաբերություններում սահմանների խնդիրներ
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>
                        Դժվարություններ և կոնֆլիկտներ ներանձնային
                        հարաբերություններում
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Սահմանային անձնային խանգարում (BPD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>LGBTQ+ անձանց հետ աշխատանք</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4: Meaning & Personal Growth */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_4.jpg"
                    alt="Իմաստ և Անձնական Աճ"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 12%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Իմաստ և Անձնական Աճ
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Կյանքի իմաստի կորուստ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Անձնային աճի և ադապտացիայի խնդիրներ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Ինքնագնահատականի խնդիրներ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>Հոգեսոմատիկ խնդիրներ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Լեզուներ
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Հայերեն
                </span>
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Անգլերեն
                </span>
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Ռուսերեն
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Կապ Հաստատել
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Պատրա՞ստ եք սկսել ձեր ուղևորությունը: Ամրագրեք հանդիպում առցանց
              կամ կապ հաստատեք ցանկացած հարցով:
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
                        Էլ. Փոստ
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
                        Հեռախոս
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
                        Գտնվելու Վայրը
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Երևան, Հայաստան
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        Անձնական և օնլայն հանդիպումներ հասանելի են
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
                        Սոցիալական ցանցեր
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
                  </div>{" "}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Նախընտրու՞մ եք ուղղակի ամրագրել: Օգտագործեք առցանց ամրագրման
                    համակարգը ավելի արագ ժամանակացույցի համար:
                  </p>
                  <Link
                    href="/book-hy"
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
                  >
                    Ամրագրել Հանդիպում Հիմա
                  </Link>
                </div>
              </div>

              {/* Note about contact */}
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
                  <strong>Նշում:</strong> Հանդիպման հարցումների համար, խնդրում
                  ենք օգտագործել ամրագրման էջը: Ընդհանուր հարցումների համար
                  կարող եք էլ. փոստով կապ հաստատել:
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
                © {new Date().getFullYear()} Արա Միքայելյան: Բոլոր իրավունքները
                պաշտպանված են:
              </p>
              <p className="text-sm text-gray-500">
                Մասնագիտական հոգեբանական ծառայություններ Երևանում, Հայաստան
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
