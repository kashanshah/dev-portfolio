import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
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
        <ReactMarkdown children={body} linkTarget='_blank' />
      </Stack>
    </Drawer>
  );
};
