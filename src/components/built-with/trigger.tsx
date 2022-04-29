import React from 'react';
import { Box } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { constants } from '@helpers/constants';
import { IconMapper } from '@components/icon-mapper';

type TriggerProps = {
  onClick: () => void;
};
export const Trigger = (props: TriggerProps) => {
  const { onClick } = props;

  return (
    <Box onClick={onClick} position='fixed' right='15px' bottom='15px'>
      <Tooltip label={constants?.builtWith?.triggerTooltip}>
        <IconMapper icon={constants?.builtWith?.triggerIcon} fontSize='4xl' cursor='pointer' />
      </Tooltip>
    </Box>
  );
};
