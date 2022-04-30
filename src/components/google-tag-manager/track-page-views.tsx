import React, { useEffect } from 'react';
import { dataLayerPush } from '@utils/ga';
import { useRouter } from 'next/router';

export const TrackPageViews = ({ isEnabled }: { isEnabled: boolean }) => {
  const { query } = useRouter();

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    dataLayerPush({
      event: 'pageview',
      page: window.location.pathname + window.location.search + window.location.hash,
    });
  }, [query]);

  return <></>;
};
