import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const pathname = ctx.req?.url?.split("?")[0] || ctx.pathname || "/";
    return { ...initialProps, pathname };
  }

  render() {
    const { pathname } = this.props;

    let lang = "en";
    if (pathname.startsWith("/hy") || pathname.startsWith("/book-hy")) lang = "hy";
    else if (pathname.startsWith("/ru") || pathname.startsWith("/book-ru")) lang = "ru";

    return (
      <Html lang={lang}>
        <Head>
          {/* Google Search Console Verification */}
          <meta
            name="google-site-verification"
            content="lWzFZ8ETkYyCUecO7_ZngB5mE_NDRBMcIfCzpXM6Roo"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
