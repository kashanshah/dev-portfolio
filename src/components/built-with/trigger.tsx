import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { constants } from '@helpers/constants';
import { IconMapper } from '@components/icon-mapper';
import { InfoIcon } from '@chakra-ui/icons';

export const Trigger = (props: BoxProps) => {
  return (
    <Box position='fixed' right='15px' bottom='15px' {...props}>
      <Tooltip label={constants?.builtWith?.triggerTooltip}>
        <InfoIcon fontSize='4xl' cursor='pointer' />
      </Tooltip>
    </Box>
  );
};
