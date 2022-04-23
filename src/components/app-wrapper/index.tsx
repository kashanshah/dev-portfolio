import { BoxProps } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import React, { useLayoutEffect } from 'react';
import { updateIsPageLoading } from '@redux/common-slice';

export const AppWrapper = (props: BoxProps) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setTimeout(() => {
      dispatch(updateIsPageLoading(false));
    }, 500);
  }, []);

  return <React.Fragment {...props} />;
};
