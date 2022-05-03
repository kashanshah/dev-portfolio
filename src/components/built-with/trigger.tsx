import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { constants } from '@utils/constants';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export const Trigger = (props: BoxProps) => {
  return (
    <Box cursor='pointer' {...props}>
      <Tooltip label={constants?.builtWith?.triggerTooltip}>
        <InfoOutlineIcon fontSize='4xl' />
      </Tooltip>
    </Box>
  );
};
