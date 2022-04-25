import React from 'react';
import { Drawer, DrawerProps } from '@components/drawer';
import { List } from '@chakra-ui/react';
import { ListItem } from '@components/built-with/list-item';

type BuiltWithDrawerProps = DrawerProps & {};
export const BuiltWithDrawer = (props: BuiltWithDrawerProps) => {
  const { isOpen, onClose, ...rest } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right' {...rest}>
      <List spacing='4' mt='4'>
        <ListItem title='React' body='asdasdasdasd' />
        <ListItem title='Redux' />
        <ListItem title='Redux Toolkit' />
        <ListItem title='Axios' />
        <ListItem title='next-routes' />
        <ListItem title='normalize.css' />
        <ListItem title='NextJS' />
        <ListItem title='Chakra UI' />
        <ListItem title='React Hook Form' />
        <ListItem title='Yup' />
        <ListItem title='React Query' />
        <ListItem title='AntDesign Icons' />
      </List>
    </Drawer>
  );
};

export function getStaticProps() {}
