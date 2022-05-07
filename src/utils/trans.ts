import { MultiLingualString } from '@utils/types';
import { useRouter } from 'next/router';
// import { router } from 'next/client';

export const trans = (str: MultiLingualString, lang?: string): string => {
  const { locale: currentLocale } = useRouter();
  const defaultLocale = 'en';
  const inputLocal = lang;

  if (typeof str === 'string') {
    return str;
  }

  if (inputLocal && str?.[inputLocal]) {
    return str?.[inputLocal];
  }

  if (currentLocale && str?.[currentLocale]) {
    return str?.[currentLocale];
  }

  return str?.[defaultLocale];
};

const rtlLanguages = ['ar', 'ur'];

export function getLangDir(language: string) {
  if (rtlLanguages.includes(language)) {
    return 'rtl';
  }

  return 'ltr';
}

export const useIsRTL = () => {
  const { locale } = useRouter();
  return getLangDir(locale) === 'rtl';
};
