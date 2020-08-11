import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T54CP95');
            `
          }} />
          {/* <!-- End Google Tag Manager --> */}

          <link rel="preload" as="font" href="/fonts/Nexa/NexaHeavy.otf" type="opentype" />
          <link rel="preload" as="font" href="/fonts/Nexa/NexaLightItalic.otf" type="opentype" />
          <link rel="preload" as="font" href="/fonts/Infra/InfraRegular.otf" type="opentype" />
          <link rel="preload" as="font" href="/fonts/Infra/InfraBold.otf" type="opentype" />
          <link rel="preload" as="font" href="/fonts/Infra/InfraExtraBold.otf" type="opentype" />
          <link rel="preload" as="font" href="/fonts/Infra/InfraSemiBold.otf" type="opentype" />
          <link rel="preload" as="font" href="/fonts/Infra/InfraSemiBoldItalic.otf" type="opentype" />
          <style jsx global>{`
            @font-face {
              font-family: 'NexaHeavy';
              font-display: swap;
              src: url('/fonts/Nexa/NexaHeavy.otf') format('opentype');
            }
            @font-face {
              font-family: "NexaLightItalic";
              font-display: swap;
              src: url('/fonts/Nexa/NexaLightItalic.otf') format("opentype");
            }
            @font-face {
              font-family: "InfraRegular";
              font-display: swap;
              src: url('/fonts/Infra/InfraRegular.otf') format("opentype");
            }
            @font-face {
              font-family: "InfraBold";
              font-display: swap;
              src: url('/fonts/Infra/InfraBold.otf') format("opentype");
            }
            @font-face {
              font-family: "InfraExtraBold";
              font-display: swap;
              src: url('/fonts/Infra/InfraExtraBold.otf') format("opentype");
            }
            @font-face {
              font-family: "InfraSemiBold";
              font-display: swap;
              src: url('/fonts/Infra/InfraSemiBold.otf') format("opentype");
            }
            @font-face {
              font-family: "InfraSemiBoldItalic";
              font-display: swap;
              src: url('/fonts/Infra/InfraSemiBoldItalic.otf') format("opentype");
            }
          `}</style>
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T54CP95" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
          }} />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
