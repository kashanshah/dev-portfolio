import 'antd/dist/antd.css';
import 'normalize.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistStore } from 'redux-persist';
import { PageLoading } from '@screens/page-loading';
import { AppWrapper } from '@components/app-wrapper';
import { ReduxPersistGate } from '@components/redux-persist-gate';
import { BuiltWith } from '../src/components/built-with';
import { constants } from '@helpers/constants';

const queryClient = new QueryClient();

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ReduxPersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <AppWrapper>
              <Component {...pageProps} />
              <Box maxW='100%' maxH='100%' overflow='hidden'>
                <PageLoading />
                {constants?.builtWith && <BuiltWith />}
              </Box>
            </AppWrapper>
          </ChakraProvider>
        </ReduxPersistGate>
      </Provider>
    </QueryClientProvider>
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
