import React from 'react';
import { useColorMode } from '@chakra-ui/react';

export const useIsDarkMode = () => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark';
};
