import Head from "next/head";
import Link from "next/link";

export default function BookHy() {
  return (
    <>
      <Head>
        <title>Ամրագրել Թերապիայի Հանդիպում | Արա Միքայելյան</title>
        <meta
          name="description"
          content="Ամրագրեք թերապիայի հանդիպում Արա Միքայելյանի հետ - Հոգեբան և Հոգեթերապևտ Երևան, Հայաստան"
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
                href="/hy"
                className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Արա Միքայելյան
              </Link>
              <Link
                href="/hy"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                ← Վերադառնալ Գլխավոր
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ամրագրել Թերապիայի Հանդիպում
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ընտրեք ձեզ հարմար ժամանակ: Դուք կստանաք էլ. փոստի հաստատում՝ 
              հանդիպման բոլոր մանրամասներով:
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-6 mb-6">
            <iframe
              src="https://cal.com/aramikayelyan/therapy-session"
              className="w-full h-[75vh] md:h-[80vh] rounded-lg border-0"
              loading="lazy"
              allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
              title="Ամրագրել Թերապիայի Հանդիպում"
            />
          </div>

          {/* Fallback Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Խնդի՞ր կա ամրագրման ֆորման տեսնելու հետ:
            </p>
            <a
              href="https://cal.com/aramikayelyan/therapy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
            >
              Սեղմեք այստեղ՝ նոր էջում բացելու համար
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-primary-50 dark:bg-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Ինչ սպասել
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Ընտրեք ձեր նախընտրած ամսաթիվը և ժամանակը հասանելի
                  տարբերակներից
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Տրամադրեք հիմնական տեղեկատվություն և պատասխանեք մի քանի
                  նախնական հարցերի
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Ստացեք էլ. փոստի հաստատում՝ հանդիպման մանրամասներով և
                  նախապատրաստման խորհուրդներով
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Միացեք հանդիպմանը առցանց կամ անձնապես՝ ըստ ամրագրված ժամանակի
                </span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
