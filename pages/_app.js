import Router from 'next/router';
import 'antd/dist/antd.css';
import 'normalize.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import Script from 'next/script';

Router.events.on('routeChangeComplete', () => {
  // alert('complete');
});
Router.events.on('routeChangeStart', () => {
  // alert('start');
});

const ScriptTags = () => {
  return (
    <Script
      id='google-analytics'
      dangerouslySetInnerHTML={{
        __html: `<!-- Global site tag (gtag.js) - Google Analytics --> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117582605-4"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-117582605-4'); </script>`,
      }}
    />
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScriptTags />
      <Provider store={store}>
        <ChakraProvider>
          <div className='asdasd'>
            <Component {...pageProps} />
          </div>
        </ChakraProvider>
      </Provider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
