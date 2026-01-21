import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomeRu() {
  return (
    <>
      <Head>
        <title>Ара Микаелян | Психолог и Психотерапевт Ереван, Армения</title>
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
                Ара Микаелян
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
                <Link
                  href="/book-ru"
                  className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Записаться
                </Link>

                {/* Language Switcher */}
                <div className="flex items-center space-x-2 text-sm border-l pl-4 ml-4">
                  <Link
                    href="/"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    EN
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/hy"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    ՀԱՅ
                  </Link>
                  <span className="text-gray-300">|</span>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    РУ
                  </span>
                </div>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-gray-600 dark:text-gray-300">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Ара Микаелян
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
                Психолог / Психотерапевт
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Ереван, Армения
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/book-ru"
                  className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors text-lg font-medium"
                >
                  Записаться на сессию
                </Link>
                <a
                  href="#contact"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-lg font-medium"
                >
                  Связаться со мной
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Обо мне
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Добро пожаловать! Я Ара Микаелян, психолог и психотерапевт из Еревана, 
                Армении, с более чем <strong>6 годами опыта в психологии</strong> и{" "}
                <strong>3 годами практики в психотерапии</strong>.
              </p>

              <div className="bg-primary-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Образование
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Бакалавр психологии</strong> - Ереванский государственный 
                    университет (2015-2019)
                  </li>
                  <li>
                    <strong>Подготовка по логотерапии</strong> - Московский институт 
                    психоанализа (2022-2025)
                  </li>
                  <li>
                    <strong>Международное обучение</strong> - Ягеллонский университет 
                    (Польша)
                  </li>
                  <li>
                    <strong>Сертификация EMDR</strong> - Специализированная подготовка 
                    по терапии десенсибилизации и переработки движениями глаз
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Моя практика основана на глубоком понимании человеческого опыта. Я 
                специализируюсь в{" "}
                <strong>
                  логотерапии, экзистенциально-гуманистическом подходе, EMDR и 
                  интегративной терапии
                </strong>
                , предлагая сострадательную и персонализированную поддержку клиентам, 
                работающим над преодолением личных трудностей.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Текущие роли
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Ifeel</strong> - Предоставление онлайн-терапии клиентам по 
                    всему миру
                  </li>
                  <li>
                    <strong>Psyguard.me</strong> - Оказание профессиональной 
                    психологической помощи
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Стремлюсь создать безопасное, непредвзятое пространство, где клиенты 
                могут исследовать свои эмоции, обрести ясность и развить навыки для 
                долгосрочного благополучия. Будь то тревога, депрессия, проблемы в 
                отношениях или личностный рост, я здесь, чтобы поддержать вас на каждом 
                этапе пути.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Терапевтические услуги
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Я предлагаю специализированную поддержку в следующих областях
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Тревога и стресс
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Научитесь управлять чрезмерным беспокойством, паническими атаками и 
                  стрессом с помощью проверенных терапевтических техник.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Депрессия
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Найдите поддержку в преодолении печали, утраты мотивации и 
                  восстановлении радости в жизни.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Консультирование отношений
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Улучшите общение, разрешите конфликты и укрепите связи с любимыми.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Травма и ПТСР
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Исцелитесь от прошлых травм с помощью EMDR и специализированных 
                  травма-информированных подходов.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Личностный рост
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Исследуйте свои ценности, раскройте свой потенциал и создайте более 
                  осмысленную жизнь.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Экзистенциальные проблемы
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Найдите смысл, цель и направление, столкнувшись с жизненными 
                  вопросами и переходами.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Мой терапевтический подход
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Логотерапия
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Основываясь на работе Виктора Франкла, я помогаю клиентам открыть 
                  смысл и цель даже в сложных обстоятельствах. Этот подход особенно 
                  эффективен для экзистенциальных проблем и вопросов жизненного 
                  направления.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Экзистенциально-гуманистический подход
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Я верю в вашу врожденную способность к росту и самореализации. Мы 
                  работаем вместе, исследуя вашу уникальную систему ценностей, выбор и 
                  жизненный опыт, чтобы способствовать подлинным изменениям.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  EMDR (Десенсибилизация и переработка движениями глаз)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Для клиентов, переживающих травму или ПТСР, я предлагаю EMDR - 
                  научно обоснованную терапию, которая помогает переработать 
                  травматические воспоминания и уменьшить их эмоциональное воздействие.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Интегративный подход
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Понимая, что каждый человек уникален, я объединяю элементы из 
                  различных терапевтических модальностей, чтобы создать 
                  персонализированный опыт лечения, который наилучшим образом 
                  соответствует вашим конкретным потребностям и целям.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Давайте начнем
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Готовы сделать первый шаг к благополучию? Свяжитесь, чтобы записаться 
              на консультацию или задать любые вопросы.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:arayikmiqayelyan1997@gmail.com"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      arayikmiqayelyan1997@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Телефон
                    </h3>
                    <a
                      href="tel:+37494164634"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      +374 94 164634
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/book-ru"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors text-lg font-medium"
              >
                Записаться на сессию сейчас
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">
                © 2026 Ара Микаелян. Все права защищены.
              </p>
              <p className="text-xs mt-2 text-gray-400">
                Профессиональные психотерапевтические услуги в Ереване, Армения
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
