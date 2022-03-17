// _document is only rendered on the server side and not on the sdk side
// Event handlers like onClick can't be added to this file

import React from 'react';
import getConfig from 'next/config';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { IncomingMessage } from 'http';
const { publicRuntimeConfig } = getConfig();
const { gaId } = publicRuntimeConfig;

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<!-- Global site tag (gtag.js) - Google Analytics --> <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}'); </script>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

interface DocumentIncomingMessage extends IncomingMessage {
  gaId?: string;
  initialApiData: any;
}

interface IDocumentContext extends DocumentContext {
  req?: DocumentIncomingMessage;
}

MyDocument.getInitialProps = async (ctx: IDocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);

  const {
    req: { gaId, initialApiData },
  } = ctx;

  return {
    ...initialProps,
    initialApiData,
    gaId: gaId ? gaId : 'UA-117582605-4',
  };
};

export default MyDocument;
