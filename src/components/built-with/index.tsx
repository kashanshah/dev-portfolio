import React from 'react';
import { Trigger } from '@components/built-with/trigger';
import { Drawer } from '@components/drawer';
import { Box, List, useDisclosure } from '@chakra-ui/react';
import { ListItem } from '@components/built-with/list-item';
import { constants } from '@utils/constants';
import { trans } from '@utils/trans';

export const BuiltWith = () => {
  const { onToggle, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Trigger onClick={onToggle} />
      <Drawer isOpen={isOpen} onClose={onClose} placement='right' header={<Box></Box>}>
        <List spacing='4' mt='4'>
          {constants?.builtWith?.items?.map(({ title, body }, index) => {
            return <ListItem title={trans(title)} body={trans(body)} key={index} />;
          })}
        </List>
      </Drawer>
    </>
  );
};
