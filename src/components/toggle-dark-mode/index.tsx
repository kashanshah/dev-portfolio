import React from 'react';
import { Box, BoxProps, Flex, useColorMode } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useIsDarkMode } from '@hooks/use-is-dark-mood';
import { pushGAEvent } from '@utils/ga';

export const ToggleDarkMode = (props: BoxProps) => {
  const { toggleColorMode } = useColorMode();
  const isDarkModeEnabled = useIsDarkMode();

  const onClick = () => {
    pushGAEvent('Color Mode Switch', `${isDarkModeEnabled ? 'light' : 'dark'} mode`, 'Color Mode', 1);
    toggleColorMode();
  };

  return (
    <Box onClick={onClick} fontSize='1.9em' {...props}>
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
