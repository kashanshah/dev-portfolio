import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@utils/theme';
import { getLangDir } from '@utils/trans';

export default class MyDocument extends Document {
  render() {
    const language = this.props.__NEXT_DATA__.locale;
    return (
      <Html lang={language} dir={getLangDir(language)}>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
