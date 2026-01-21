import Head from "next/head";
import Link from "next/link";
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ara Miqayelyan
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-6 font-medium">
              Психолог / Психотерапевт
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ереван, Армения
            </p>
            <p
              className={`${inter.className} text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed`}
            >
              Я предоставляю сострадательную, основанную на доказательствах терапию, чтобы помочь вам преодолеть жизненные трудности. Используя клиент-ориентированный подход с интеграцией когнитивно-поведенческой терапии (КПТ) и психодинамических техник, я помогаю людям достичь эмоционального благополучия, личностного роста и значимых изменений.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-ru"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Записаться на сессию
              </Link>
              <a
                href="#about"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-full text-lg font-semibold transition-all w-full sm:w-auto"
              >
                Узнать больше
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
              О терапевте
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  С 6-летним опытом работы в психологии и 3-летней специализацией в качестве психотерапевта, я стремлюсь создать безопасное, непредвзятое пространство, где клиенты могут исследовать свои мысли, чувства и находить смысл в своем опыте. Мой подход основан на логотерапии и экзистенциально-гуманистической психологии, направленный на то, чтобы помочь вам открыть цель и преодолеть жизненные трудности.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Я имею степень бакалавра психологии Ереванского государственного университета и прошел продвинутую подготовку по логотерапии и экзистенциальному анализу в Московском институте психоанализа. Я также обучался EMDR, гештальт-терапии и расстройствам личности, применяя интегративный подход, адаптированный к уникальным потребностям каждого человека.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Независимо от того, сталкиваетесь ли вы с тревогой, депрессией, травмой, проблемами в отношениях или ищете смысл жизни, я здесь, чтобы поддержать вас на вашем пути к исцелению, росту и более полноценной жизни.
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
              Комплексная терапевтическая поддержка, адаптированная к вашим индивидуальным потребностям
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
                  Индивидуальные сессии, сосредоточенные на ваших личных целях, проблемах и потребностях в области психического здоровья.
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
                  Укрепите отношения, улучшите общение и разрешите конфликты вместе.
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
                  Удобная и конфиденциальная терапия в комфортной обстановке через видеозвонок.
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
                  Изучите эффективные стратегии совладания для управления тревогой, стрессом и подавляющими эмоциями.
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
                  Сострадательная помощь тем, кто испытывает депрессию, подавленное настроение или потерю мотивации.
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
                  Развивайте самосознание, укрепляйте уверенность и работайте над раскрытием своего полного потенциала.
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
              Методы, основанные на доказательствах, адаптированные к вашему уникальному пути
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Approach 1 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Логотерапия
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Основанная на подходе Виктора Франкла, логотерапия помогает вам открыть смысл и цель жизни даже в сложных обстоятельствах. Она фокусируется на поиске того, что делает вашу жизнь достойной того, чтобы жить, и использовании этого как источника силы и мотивации.
                </p>
              </div>

              {/* Approach 2 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Экзистенциально-гуманистическая терапия
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Этот подход подчеркивает личную свободу, выбор и ответственность. Вместе мы исследуем фундаментальные жизненные вопросы, помогая вам делать подлинный выбор и жить более полноценной, осмысленной жизнью в соответствии с вашими ценностями.
                </p>
              </div>

              {/* Approach 3 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  EMDR и работа с травмой
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Десенсибилизация и переработка движениями глаз (EMDR) — это научно обоснованный метод обработки травматических воспоминаний и переживаний. Он помогает уменьшить эмоциональный дистресс и поддерживает исцеление от ПТСР, сложной травмы и трудных жизненных событий.
                </p>
              </div>

              {/* Approach 4 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Интегративный подход
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Я объединяю техники гештальт-терапии, экзистенциальной психологии и других научно обоснованных методов для создания персонализированного плана лечения. Каждый человек уникален, и ваша терапия должна быть адаптирована к вашим конкретным потребностям и целям.
                </p>
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
              Готовы начать свой путь? Запишитесь на сессию онлайн или обратитесь с любыми вопросами.
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
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Предпочитаете записаться напрямую? Используйте систему онлайн-бронирования для быстрой записи.
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
                  <strong>Примечание:</strong> Для записи на прием, пожалуйста, используйте страницу бронирования. Для общих вопросов обращайтесь по электронной почте.
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
