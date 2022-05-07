import { NextRouter, useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { RouteParams } from 'next-routes';
import { updateIsPageLoading } from '@redux/common-slice';
import { UrlObject } from 'url';

type goToUrlType = {
  path: string;
  params?: RouteParams;
  opt?: {};
  replace?: boolean;
  disableAutoScroll?: boolean;
};

const autoScrollToTop =
  (disableAutoScroll: boolean = false) =>
  () =>
    !disableAutoScroll && window && window.scrollTo(0, 0);

export const useGoToUrl = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locale } = router;

  return (url: string, options?: { shallow?: boolean; locale?: string | false; scroll?: boolean }, as?: string) => {
    dispatch(updateIsPageLoading(true));
    setTimeout(() => {
      router.push(url, as, { ...options, locale: options?.locale || locale });
    }, 500);
  };
};
