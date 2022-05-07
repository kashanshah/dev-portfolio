import React from 'react';
import { Trigger } from '@components/copyright/trigger';
import { Box, BoxProps, useDisclosure } from '@chakra-ui/react';
import { constants } from '@utils/constants';
import { CopyrightDrawer } from '@components/copyright/copyright-drawer';
import { trans } from '@utils/trans';

export const Copyright = (props: BoxProps) => {
  const { onToggle, onClose, isOpen } = useDisclosure();
  const copyright = constants?.copyright;
  const title = trans(copyright?.title);
  const body = trans(copyright?.body);

  if (!Object.keys(copyright || {}).length) {
    return null;
  }

  return (
    <Box {...props}>
      <Trigger onClick={onToggle} />
      <CopyrightDrawer isOpen={isOpen} onClose={onClose} title={title} body={body} />
    </Box>
  );
};
