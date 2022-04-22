import Router from 'next/router';
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
  // else sdk side redirect
  if (!Router.router) {
    return;
  }

  return async (props: goToUrlType) => {
    dispatch(updateIsPageLoading(true));
    const asd = await new Promise(() => {
      setTimeout(() => {
        const { path = '', params = {}, opt = {}, replace = false, disableAutoScroll = false } = props;
        if (replace) {
          Router.replace(path, params, opt).then(autoScrollToTop(disableAutoScroll));
        } else {
          Router.push(path, params, opt).then(autoScrollToTop(disableAutoScroll));
        }
      }, 500);
      setTimeout(() => {
        dispatch(updateIsPageLoading(false));
      }, 1000);
    });
  };
};
