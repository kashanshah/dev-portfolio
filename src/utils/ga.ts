import { constants } from '@helpers/constants';

export const pushGAEvent = (action: string, label?: string, category = 'general', value: number = 1) => {
  if (!window || !constants?.ga?.id) {
    return;
  }

  // @ts-ignore
  window.gtag?.('event', action, {
    event_label: label,
    event_value: value,
    event_category: category,
  });

  return;
};

export const pushGAConfig = (gaId: string) => {
  if (!window || !constants?.ga?.id) {
    return;
  }

  const url = window.location.pathname + window.location.search + window.location.hash;

  // @ts-ignore
  window.gtag?.('config', gaId, {
    page_path: url,
  });
  return;
};
