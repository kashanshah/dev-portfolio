import React from 'react';
import { Trigger } from '@components/built-with/trigger';
import { Drawer } from '@components/drawer';
import { List, useDisclosure } from '@chakra-ui/react';
import { ListItem } from '@components/built-with/list-item';
import { constants } from '@helpers/constants';

export const BuiltWith = () => {
  const { onToggle, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Trigger onClick={onToggle} />
      <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
        <List spacing='4' mt='4'>
          {constants?.builtWith?.items?.map((item, index) => {
            return <ListItem title={item.title} body={item.body} key={item.title + index} />;
          })}
        </List>
      </Drawer>
    </>
  );
};
