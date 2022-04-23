import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { RouteParams } from 'next-routes';
import { updateIsPageLoading } from '@redux/common-slice';

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

  return (url: string) => {
    dispatch(updateIsPageLoading(true));
    setTimeout(() => {
      router.push(url);
      setTimeout(() => {
        dispatch(updateIsPageLoading(false));
      }, 500);
    }, 500);
  };
};
