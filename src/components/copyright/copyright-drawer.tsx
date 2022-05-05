import React from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { Drawer, DrawerProps } from '@components/drawer';

type CopyrightDrawerProps = Omit<DrawerProps, 'children'> & {
  title?: string;
  body?: string;
};

export const CopyrightDrawer = (props: CopyrightDrawerProps) => {
  const { title, body, isOpen, onClose } = props;

  if (!title && !body) {
    return null;
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='bottom' {...props}>
      <Stack align='center' textAlign='center'>
        <Heading size='sm'>{title}</Heading>
        <Text>{body}</Text>
      </Stack>
    </Drawer>
  );
};
