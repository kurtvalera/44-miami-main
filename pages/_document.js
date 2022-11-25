import { AppConstant } from '../constant/AppConstant';
import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://fortyfourmiami.com/images/favicon.png"
            type="image/png"
          />
          <meta name="description" content={AppConstant.meta.description} />
          <meta property="og:title" content={AppConstant.meta.title} />
          <meta property="og:url" content={AppConstant.meta.url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={AppConstant.meta.description}
          />
          <meta property="og:image" content={AppConstant.meta.image} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={AppConstant.meta.title} />
          <meta
            name="twitter:description"
            content={AppConstant.meta.description}
          />
          <meta name="twitter:image" content={AppConstant.meta.image} />
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