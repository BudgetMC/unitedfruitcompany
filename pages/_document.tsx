import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

const Document = () => (
  <Html lang="en-US">
    <Head>
      <meta property="og:image" content="/opengraph.jpg" />
      <meta
        name="google-site-verification"
        content="8tSV9w6RXemjzTTzDYPpTO17MBILISwyw3209Qec08M"
      />
      <meta
        name="msvalidate.01"
        content="05C20B864F39C5927EDE879C9B069800"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Alegreya:ital,wght@0,400..900;1,400..900&family=Special+Elite&display=swap" rel="stylesheet"></link>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
