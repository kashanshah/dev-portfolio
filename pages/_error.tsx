import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Error(props: { statusCode?: number }) {
  return (
    <Box>
      <Heading>{props.statusCode}</Heading>
      <Text>Oops! something went wrong!</Text>
    </Box>
  );
}

export default Error;
