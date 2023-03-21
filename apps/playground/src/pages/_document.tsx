import { siteConfig } from "@/meta/config/site"
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{siteConfig.name}</title>
          <meta key="keywords" name="keywords" content={siteConfig.keywords} />
          <meta name="description" content={siteConfig.description} />
          <link rel="canonical" href="https://labxd.com/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://cdn.jsdelivr.net/npm/@labxd/assets@latest/src/favicon-16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://cdn.jsdelivr.net/npm/@labxd/assets@latest/src/favicon-32.png"
          />
          <meta property="og:title" content={siteConfig.name} />
          <meta property="og:description" content={siteConfig.description} />
          <meta property="og:url" content="https://labxd.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://labXD.com/cover.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hausofxd" />
          <meta name="twitter:creator" content="@hausofxd" />
          <meta name="twitter:title" content="Haus of XD" />
          <meta
            name="twitter:description"
            content="Haus of XD is the voice for labXD, developing the DesignOps toolchain."
          />
          <meta name="twitter:image" content="https://labXD.com/cover.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
