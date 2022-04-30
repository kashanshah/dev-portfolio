import React from 'react';
import { Box, BoxProps, Flex, useColorMode } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { InfoIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useIsDarkMode } from '@hooks/use-is-dark-mood';
import { mode } from '@chakra-ui/theme-tools';

export const ToggleDarkMode = (props: BoxProps) => {
  const { toggleColorMode } = useColorMode();
  const isDarkModeEnabled = useIsDarkMode();

  return (
    <Box position='fixed' right='15px' top='15px' onClick={toggleColorMode} {...props}>
      <Tooltip label={`${isDarkModeEnabled ? 'Disabled' : 'Enable'} dark mode`}>
        <Flex
          fontSize='30px'
          cursor='pointer'
          width='45px'
          height='45px'
          border='1px solid'
          justifyContent='center'
          alignItems='center'
        >
          {isDarkModeEnabled ? <SunIcon color='yellow.500' /> : <MoonIcon color='gray.500' />}
        </Flex>
      </Tooltip>
    </Box>
  );
};
