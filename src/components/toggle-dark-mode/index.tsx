import React from 'react';
import { Box, BoxProps, Flex, useColorMode } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useIsDarkMode } from '@hooks/use-is-dark-mood';
import { pushGAEvent } from '@utils/ga';
import { isDark, mode } from '@chakra-ui/theme-tools';

export const ToggleDarkMode = (props: BoxProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkModeEnabled = useIsDarkMode();

  const onClick = () => {
    pushGAEvent('click', 'color mode: ' + isDarkModeEnabled ? 'dark' : 'light', 1, 'ColorMode');
    toggleColorMode();
  };

  return (
    <Box position='fixed' right='15px' top='15px' onClick={onClick} fontSize='1.9em' {...props}>
      <Tooltip label={`${isDarkModeEnabled ? 'Disabled' : 'Enable'} dark mode`}>
        <Flex
          cursor='pointer'
          width='1.5em'
          height='1.5em'
          border='1px solid'
          bg='gray.200'
          justifyContent='center'
          alignItems='center'
        >
          {isDarkModeEnabled ? <SunIcon color='yellow.500' /> : <MoonIcon color='gray.500' />}
        </Flex>
      </Tooltip>
    </Box>
  );
};
