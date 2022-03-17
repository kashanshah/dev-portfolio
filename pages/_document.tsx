// _document is only rendered on the server side and not on the sdk side
// Event handlers like onClick can't be added to this file

import React from 'react';
import getConfig from 'next/config';
import { Head, Html, Main, NextScript } from 'next/document';
const { publicRuntimeConfig } = getConfig();
const { gaId = 'UA-117582605-4' } = publicRuntimeConfig;

const MyDocument = (props: any) => {
  console.log(props);
  return (
    <Html>
      <Head />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<!-- Global site tag (gtag.js) - Google Analytics --> <script async src='https://www.googletagmanager.com/gtag/js?id=${gaId}'></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}'); </script>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
