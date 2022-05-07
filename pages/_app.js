import { Box, ChakraProvider, Stack } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistStore } from 'redux-persist';
import { PageLoading } from '@screens/page-loading';
import { AppWrapper } from '@components/app-wrapper';
import { ReduxPersistGate } from '../src/components/redux-persist-gate';
import { BuiltWith } from '../src/components/built-with';
import { constants } from '../src/utils/constants';
import { ToggleDarkMode } from '../src/components/toggle-dark-mode';
import { GoogleAnalytics } from '../src/components/google-analytics';
import { Copyright } from '../src/components/copyright';
import { LanguageSwitcher } from '../src/components/language-switcher';
import { useIsRTL } from '../src/utils/trans';

const queryClient = new QueryClient();

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const isRTL = useIsRTL();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ReduxPersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <AppWrapper>
              <Component {...pageProps} />
              <Box maxW='100%' maxH='100%' overflow='hidden'>
                <PageLoading />
                <Stack
                  isInline
                  position='fixed'
                  right={!isRTL && '15px'}
                  left={isRTL && '15px'}
                  top='15px'
                  alignItems='center'
                >
                  {constants?.builtWith && <BuiltWith />}
                  <ToggleDarkMode />
                  <LanguageSwitcher />
                </Stack>
              </Box>
            </AppWrapper>
            <Copyright position='fixed' right='15px' bottom='15px' alignItems='center' />
            <GoogleAnalytics gaId={constants?.ga?.id} />
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
