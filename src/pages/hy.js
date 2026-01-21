import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomeHy() {
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Արա Միքայելյան
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-6 font-medium">
              Հոգեբան / Հոգեթերապևտ
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Երևան, Հայաստան
            </p>
            <p
              className={`${inter.className} text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed`}
            >
              Ես տրամադրում եմ համակրող, ապացույցների վրա հիմնված թերապիա՝
              օգնելու ձեզ հաղթահարել կյանքի դժվարությունները: Հաճախորդակենտրոն
              մոտեցմամբ՝ ինտեգրելով ճանաչողական-վարքային թերապիան (CBT) և
              հոգեդինամիկ տեխնիկան՝ ես աջակցում եմ մարդկանց հուզական
              բարեկեցության, անձնական աճի և իմաստալի փոփոխությունների հասնելու
              գործում:
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-hy"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Ամրագրել Հանդիպում
              </Link>
              <a
                href="#about"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-full text-lg font-semibold transition-all w-full sm:w-auto"
              >
                Իմանալ Ավելին
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
              Հոգեթերապևտի Մասին
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Ունենալով 6 տարվա փորձ հոգեբանության մեջ և 3 տարի
                  մասնագիտանալով որպես հոգեթերապևտ՝ ես նվիրված եմ ստեղծելու
                  անվտանգ, դատողություններից զերծ տարածք, որտեղ հաճախորդները
                  կարող են ուսումնասիրել իրենց մտքերը, զգացմունքները և գտնել
                  իմաստ իրենց փորձառություններում: Իմ մոտեցումը հիմնված է
                  լոգոթերապիայի և էքզիստենցիալ-հումանիստական հոգեբանության վրա՝
                  կենտրոնանալով ձեզ օգնելու բացահայտել նպատակը և հաղթահարել
                  կյանքի դժվարությունները:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Ես ունեմ Հոգեբանության բակալավրի կոչում Երևանի պետական
                  համալսարանից և ավարտել եմ առաջադեմ ուսուցում լոգոթերապիայի և
                  էքզիստենցիալ անալիզի ոլորտում Մոսկվայի հոգեանալիզի
                  ինստիտուտում: Ես նաև վերապատրաստվել եմ EMDR-ի, գեշտալտ
                  թերապիայի և անհատականության խանգարումների ուղղությամբ՝ բերելով
                  ինտեգրատիվ մոտեցում, որը հարմարեցված է յուրաքանչյուր մարդու
                  եզակի կարիքներին:
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Անկախ նրանից՝ արդյոք դուք հանդիպում եք տագնապի, դեպրեսիայի,
                  տրավմայի, հարաբերությունների դժվարությունների հետ, կամ փնտրում
                  եք կյանքի իմաստը՝ ես այստեղ եմ՝ աջակցելու ձեզ ձեր ուղղությամբ
                  դեպի բուժում, աճ և ավելի լիարժեք կյանք:
                </p>
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

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Մատուցվող Ծառայություններ
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Համապարփակ թերապևտիկ աջակցություն՝ հարմարեցված ձեր անհատական
              կարիքներին
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
                  Անհատական Թերապիա
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Անհատական նիստեր՝ կենտրոնացած ձեր անձնական նպատակների,
                  դժվարությունների և մտավոր առողջության կարիքների վրա:
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Օնլայն Հանդիպումներ
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Հարմարավետ և գաղտնի թերապիա ձեր տան հարմարավետությունից՝
                  տեսազանգի միջոցով:
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
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Տագնապ և Սթրես
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Սովորեք արդյունավետ հաղթահարման ռազմավարություններ տագնապը,
                  սթրեսը և ճնշող հույզերը կառավարելու համար:
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Դեպրեսիայի Աջակցություն
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Համակրող խնամք նրանց համար, ովքեր ապրում են դեպրեսիա, ցածր
                  տրամադրություն կամ մոտիվացիայի կորուստ:
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Անձնական Աճ
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Զարգացրեք ինքնագիտակցությունը, կառուցեք վստահություն և աշխատեք
                  դեպի ձեր լիարժեք ներուժը:
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Տրավմա և PTSD
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Մասնագիտացված աջակցություն հետտրավմատիկ սթրեսային խանգարման և
                  կոմպլեքս տրավմայի բուժման համար:
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
              Թերապևտիկ Մոտեցում
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Ապացույցների վրա հիմնված մեթոդներ՝ հարմարեցված ձեր եզակի
              ուղղությանը
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Approach 1 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Լոգոթերապիա
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Հիմնված Վիկտոր Ֆրանկլի մոտեցման վրա՝ Լոգոթերապիան օգնում է ձեզ
                  հայտնաբերել իմաստ և նպատակ կյանքում, նույնիսկ դժվար
                  իրավիճակներում: Այն կենտրոնանում է գտնելու այն, ինչը դարձնում
                  է ձեր կյանքը արժանի ապրելու և օգտագործել այն որպես ուժի և
                  մոտիվացիայի աղբյուր:
                </p>
              </div>

              {/* Approach 2 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Էքզիստենցիալ-Հումանիստական Թերապիա
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Այս մոտեցումը շեշտադրում է անձնական ազատությունը, ընտրությունը
                  և պատասխանատվությունը: Միասին մենք ուսումնասիրում ենք կյանքի
                  հիմնարար հարցերը՝ օգնելով ձեզ կատարել իսկական ընտրություններ և
                  ապրել ավելի լիարժեք, իմաստալից կյանք՝ համաձայն ձեր արժեքների:
                </p>
              </div>

              {/* Approach 3 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  EMDR և Տրավմայի Աշխատանք
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Աչքերի շարժման դեսենսիտիզացիան և վերամշակումը (EMDR)
                  ապացուցված մեթոդ է տրավմատիկ հիշողությունների և
                  փորձառությունների մշակման համար: Այն օգնում է նվազեցնել
                  հուզական վիշտը և աջակցում է PTSD-ի, կոմպլեքս տրավմայի և դժվար
                  կյանքի իրադարձությունների բուժմանը:
                </p>
              </div>

              {/* Approach 4 */}
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Ինտեգրատիվ Մոտեցում
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ես համադրում եմ տեխնիկաներ գեշտալտ թերապիայից, էքզիստենցիալ
                  հոգեբանությունից և այլ ապացույցների վրա հիմնված մեթոդներից՝
                  ստեղծելու անհատականացված բուժման պլան: Յուրաքանչյուր մարդ
                  եզակի է, և ձեր թերապիան պետք է հարմարեցված լինի ձեր կոնկրետ
                  կարիքներին և նպատակներին:
                </p>
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
