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
  showHeader?: boolean;
};

export const Drawer = (props: DrawerProps) => {
  const { isOpen, onClose, header, children, headerProps, bodyProps, contentProps, showHeader = true, ...rest } = props;
  return (
    <ChakraDrawer placement='bottom' onClose={onClose} isOpen={isOpen} closeOnEsc {...rest}>
      <DrawerOverlay />
      <DrawerContent {...contentProps}>
        <DrawerCloseButton zIndex={2} />
        {showHeader && <DrawerHeader {...headerProps}>{header}</DrawerHeader>}
        <DrawerBody {...bodyProps}>{children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
