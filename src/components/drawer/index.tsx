import React, { ReactElement } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentProps,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps as ChakraDrawerProps,
  ModalBodyProps,
  ModalHeaderProps,
} from '@chakra-ui/react';

export type DrawerProps = ChakraDrawerProps & {
  header?: ReactElement;
  headerProps?: ModalHeaderProps;
  bodyProps?: ModalBodyProps;
  contentProps?: DrawerContentProps;
};

export const Drawer = (props: DrawerProps) => {
  const { isOpen, onClose, header, children, headerProps, bodyProps, contentProps, ...rest } = props;
  return (
    <ChakraDrawer placement='bottom' onClose={onClose} isOpen={isOpen} closeOnEsc {...rest}>
      <DrawerOverlay />
      <DrawerContent maxH={['75vh', 'none']} {...contentProps}>
        <DrawerCloseButton zIndex={2} />
        <DrawerHeader {...headerProps}>{header}</DrawerHeader>
        <DrawerBody {...bodyProps}>{children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
