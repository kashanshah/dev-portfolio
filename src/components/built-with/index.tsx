import React, { useState } from 'react';
import { Trigger } from '@components/built-with/trigger';
import { Drawer } from '@components/drawer';
import { List } from '@chakra-ui/react';
import { ListItem } from '@components/built-with/list-item';
import { constants } from '@helpers/constants';

export const BuiltWith = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Trigger onClick={onTriggerClick} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement='right'>
        <List spacing='4' mt='4'>
          {constants?.builtWith?.items?.map((item) => {
            return <ListItem title={item.title} body={item.body} />;
          })}
        </List>
      </Drawer>
    </>
  );
};
