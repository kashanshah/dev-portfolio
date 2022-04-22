import { Box, BoxProps } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import React, { useEffect, useLayoutEffect } from 'react';
import { updateIsPageLoading } from '@redux/common-slice';

export const AppWrapper = (props: BoxProps) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(updateIsPageLoading(false));
  }, []);

  return <React.Fragment {...props} />;
};
