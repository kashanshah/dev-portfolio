import React from 'react';
import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip/tooltip';
import { constants } from '@utils/constants';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { trans } from '@utils/trans';

export const Trigger = (props: FlexProps) => {
  return (
    <Box fontSize='1.9em'>
      <Flex
        cursor='pointer'
        width='1.5em'
        height='1.5em'
        border='1px solid'
        bg='gray.200'
        justifyContent='center'
        alignItems='center'
        {...props}
      >
        <Tooltip label={trans(constants?.builtWith?.triggerTooltip)}>
          <InfoOutlineIcon color='yellow.500' fontSize='3xl' />
        </Tooltip>
      </Flex>
    </Box>
  );
};
