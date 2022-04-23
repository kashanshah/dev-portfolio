import { Box, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

type PageLoadingProps = {
  isLoading: boolean;
};

export const PageLoading = (props: PageLoadingProps) => {
  const isLoading = useSelector((state: RootState) => state.common.isPageLoading);
  return (
    <Box
      position='fixed'
      top='0%'
      left='0%'
      m='auto'
      w='100%'
      h='100%'
      bg='blue.500'
      transform={`scaleX(${isLoading ? '1' : '0'})`}
      transition='.5s all ease'
      zIndex={100}
      display='flex'
      alignItems='center'
      justifyContent='center'
      {...props}
    >
      <Heading as='span' color='white'>
        loading...
      </Heading>
    </Box>
  );
};
