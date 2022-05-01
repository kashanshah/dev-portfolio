import Script from 'next/script';
import { constants } from '@helpers/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const router = useRouter();

  useEffect(() => {
    if (!gaId || !constants?.ga?.trackHistory) {
      return;
    }

    const handleRouteChange = () => {
      const url = window.location.pathname + window.location.search + window.location.hash;
      // @ts-ignore
      window.gtag?.('config', constants?.ga?.id, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });`,
        }}
      />
    </>
  );
}
