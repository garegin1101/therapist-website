import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomeRu() {
  return (
    <>
      <Head>
        <title>
          Ара Микаелян | Психолог и Психотерапевт в Ереване, Армения
        </title>
        <meta
          name="description"
          content="Профессиональные психотерапевтические услуги в Ереване. Специализация на тревоге, депрессии, отношениях и личностном росте."
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
                href="/ru"
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
                  Обо мне
                </a>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#approach"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Подход
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Контакты
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
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    ՀԱՅ
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href="/ru"
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    РУ
                  </Link>
                </div>

                <Link
                  href="/book-ru"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg"
                >
                  Записаться на сессию
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
                    className="text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    ՀԱՅ
                  </Link>
                  <span className="text-gray-400 text-xs">|</span>
                  <Link
                    href="/ru"
                    className="text-xs font-medium text-primary-600 dark:text-primary-400"
                  >
                    РУ
                  </Link>
                </div>
                <Link
                  href="/book-ru"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Записаться
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
                Психолог / Психотерапевт
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Ереван, Армения
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed`}
              >
                Я предоставляю сострадательную, основанную на доказательствах
                терапию, чтобы помочь вам преодолеть жизненные трудности.
                Используя клиент-ориентированный подход с интеграцией
                когнитивно-поведенческой терапии (КПТ) и психодинамических
                техник, я помогаю людям достичь эмоционального благополучия,
                личностного роста и значимых изменений.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/book-ru"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 text-center"
                >
                  Записаться на сессию
                </Link>
                <a
                  href="#about"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
                >
                  Узнать больше
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
                      alt="Ара Микаелян - Психолог и Психотерапевт"
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
              </div>
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
              О терапевте
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  С 6-летним опытом работы в психологии и 3-летней
                  специализацией в качестве психотерапевта, я стремлюсь создать
                  безопасное, непредвзятое пространство, где клиенты могут
                  исследовать свои мысли, чувства и находить смысл в своем
                  опыте. Мой подход основан на логотерапии и
                  экзистенциально-гуманистической психологии, направленный на
                  то, чтобы помочь вам открыть цель и преодолеть жизненные
                  трудности.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Я имею степень бакалавра психологии Ереванского
                  государственного университета и прошел продвинутую подготовку
                  по логотерапии и экзистенциальному анализу в Московском
                  институте психоанализа. Я также обучался EMDR,
                  гештальт-терапии и расстройствам личности, применяя
                  интегративный подход, адаптированный к уникальным потребностям
                  каждого человека.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Независимо от того, сталкиваетесь ли вы с тревогой,
                  депрессией, травмой, проблемами в отношениях или ищете смысл
                  жизни, я здесь, чтобы поддержать вас на вашем пути к
                  исцелению, росту и более полноценной жизни.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    6
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Лет опыта
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Года психотерапевтом
                  </div>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Языка общения
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
              Предоставляемые услуги
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Комплексная терапевтическая поддержка, адаптированная к вашим
              индивидуальным потребностям
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
                  Индивидуальная терапия
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Индивидуальные сессии, сосредоточенные на ваших личных целях,
                  проблемах и потребностях в области психического здоровья.
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
                  Терапия пар
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Укрепите отношения, улучшите общение и разрешите конфликты
                  вместе.
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
                  Онлайн-сессии
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Удобная и конфиденциальная терапия в комфортной обстановке
                  через видеозвонок.
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
                  Тревога и стресс
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Изучите эффективные стратегии совладания для управления
                  тревогой, стрессом и подавляющими эмоциями.
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
                  Поддержка при депрессии
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Сострадательная помощь тем, кто испытывает депрессию,
                  подавленное настроение или потерю мотивации.
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
                  Личностный рост
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Развивайте самосознание, укрепляйте уверенность и работайте
                  над раскрытием своего полного потенциала.
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
              Терапевтический подход
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Методы, основанные на доказательствах, адаптированные к вашему
              уникальному пути
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Approach 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_1.jpg"
                    alt="Логотерапия"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 34%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Логотерапия
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Основанная на подходе Виктора Франкла, логотерапия помогает
                    вам открыть смысл и цель жизни даже в сложных
                    обстоятельствах. Она фокусируется на поиске того, что делает
                    вашу жизнь достойной того, чтобы жить, и использовании этого
                    как источника силы и мотивации.
                  </p>
                </div>
              </div>

              {/* Approach 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_2.jpg"
                    alt="Экзистенциально-гуманистическая терапия"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 44%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Экзистенциально-гуманистическая терапия
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Этот подход подчеркивает личную свободу, выбор и
                    ответственность. Вместе мы исследуем фундаментальные
                    жизненные вопросы, помогая вам делать подлинный выбор и жить
                    более полноценной, осмысленной жизнью в соответствии с
                    вашими ценностями.
                  </p>
                </div>
              </div>

              {/* Approach 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_3.jpg"
                    alt="EMDR и работа с травмой"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 58%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    EMDR и работа с травмой
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Десенсибилизация и переработка движениями глаз (EMDR) — это
                    научно обоснованный метод обработки травматических
                    воспоминаний и переживаний. Он помогает уменьшить
                    эмоциональный дистресс и поддерживает исцеление от ПТСР,
                    сложной травмы и трудных жизненных событий.
                  </p>
                </div>
              </div>

              {/* Approach 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/projects/therapy_4.jpg"
                    alt="Интегративный подход"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 12%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Интегративный подход
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Я объединяю техники гештальт-терапии, экзистенциальной
                    психологии и других научно обоснованных методов для создания
                    персонализированного плана лечения. Каждый человек уникален,
                    и ваша терапия должна быть адаптирована к вашим конкретным
                    потребностям и целям.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Языки
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Армянский
                </span>
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Английский
                </span>
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-2 rounded-full font-medium">
                  Русский
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Связаться
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Готовы начать свой путь? Запишитесь на сессию онлайн или
              обратитесь с любыми вопросами.
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
                        Телефон
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
                        Местоположение
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ереван, Армения
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        Доступны сессии лично и онлайн
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
                        Социальные сети
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
                    Предпочитаете записаться напрямую? Используйте систему
                    онлайн-бронирования для быстрой записи.
                  </p>
                  <Link
                    href="/book-ru"
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
                  >
                    Записаться на сессию сейчас
                  </Link>
                </div>
              </div>

              {/* Note about contact form */}
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
                  <strong>Примечание:</strong> Для записи на прием, пожалуйста,
                  используйте страницу бронирования. Для общих вопросов
                  обращайтесь по электронной почте.
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
                © {new Date().getFullYear()} Ara Miqayelyan. Все права защищены.
              </p>
              <p className="text-sm text-gray-500">
                Профессиональные психологические услуги в Ереване, Армения
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
