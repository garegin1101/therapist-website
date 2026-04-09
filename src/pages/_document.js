import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pathname: ctx.pathname };
  }

  render() {
    const { pathname } = this.props;

    let lang = "en";
    if (pathname === "/hy" || pathname === "/book-hy") lang = "hy";
    else if (pathname === "/ru" || pathname === "/book-ru") lang = "ru";

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
