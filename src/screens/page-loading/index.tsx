import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

type PageLoadingProps = {
  isLoading: boolean;
};

export const PageLoading = (props: PageLoadingProps) => {
  const isLoading = useSelector((state: RootState) => state.common.isPageLoading);
  return (
    <Box
      position='absolute'
      top='50%'
      left='50%'
      m='auto'
      w='400vh'
      h='400vh'
      borderRadius='50%'
      bg='blue.500'
      transform={`translate(-50%, -50%) scale(${isLoading ? '1' : '0'})`}
      transition='.5s all ease'
      transformOrigin='50% 50%'
      zIndex={100}
    >
      loading...
    </Box>
  );
};
