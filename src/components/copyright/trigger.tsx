import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Tooltip } from '@components/tooltip';
import { constants } from '@utils/constants';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { CopyrightCircleOutlined } from '@ant-design/icons';

export const Trigger = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Tooltip label={constants?.copyright?.triggerTooltip}>
        <CopyrightCircleOutlined />
      </Tooltip>
    </Box>
  );
};
