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
  showCloseBtn?: boolean;
};

export const Drawer = (props: DrawerProps) => {
  const {
    isOpen,
    onClose,
    header,
    children,
    headerProps,
    bodyProps,
    contentProps,
    showCloseBtn = true,
    ...rest
  } = props;

  return (
    <ChakraDrawer placement='bottom' onClose={onClose} isOpen={isOpen} closeOnEsc {...rest}>
      <DrawerOverlay />
      <DrawerContent {...contentProps}>
        {showCloseBtn && <DrawerCloseButton zIndex={2} />}
        {header && <DrawerHeader {...headerProps}>{header}</DrawerHeader>}
        <DrawerBody {...bodyProps}>{children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
