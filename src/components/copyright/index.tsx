import React from 'react';
import { Trigger } from '@components/copyright/trigger';
import { Box, BoxProps, useDisclosure } from '@chakra-ui/react';
import { constants } from '@utils/constants';
import { CopyrightDrawer } from '@components/copyright/copyright-drawer';

export const Copyright = (props: BoxProps) => {
  const { onToggle, onClose, isOpen } = useDisclosure();
  const copyright = constants?.copyright;
  const title = copyright?.content?.title;
  const body = copyright?.content?.body;

  if (!Object.keys(copyright || {}).length) {
    return null;
  }

  return (
    <Box {...props}>
      <Trigger onClick={onToggle} hasDrawer={!!title || !!body} />
      <CopyrightDrawer isOpen={isOpen} onClose={onClose} title={title} body={body} />
    </Box>
  );
};
