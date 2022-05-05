import React from 'react';
import { BoxProps, Flex, useColorModeValue } from '@chakra-ui/react';
import { CopyrightCircleOutlined } from '@ant-design/icons';

export const Trigger = (props: BoxProps) => {
  const bg = useColorModeValue('white', ' black');

  return (
    <Flex
      border='1px solid'
      borderColor='alphaWhite.100'
      bg={bg}
      width='30px'
      height='30px'
      justifyContent='center'
      alignItems='center'
      cursor='pointer'
      {...props}
    >
      <CopyrightCircleOutlined />
    </Flex>
  );
};
