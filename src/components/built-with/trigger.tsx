import React from 'react';
import { Box } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { Tooltip } from '@components/tooltip';

type TriggerProps = {
  onClick: () => void;
};
export const Trigger = (props: TriggerProps) => {
  const { onClick } = props;

  return (
    <Box onClick={onClick} position='fixed' right='15px' bottom='15px'>
      <Tooltip label='See what has been used to build this'>
        <InfoIcon fontSize='4xl' cursor='pointer' />
      </Tooltip>
    </Box>
  );
};
