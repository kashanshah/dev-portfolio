import React, { useState } from 'react';
import { Trigger } from '@components/built-with/trigger';
import { BuiltWithDrawer } from '@components/built-with/built-with-drawer';

export const BuiltWith = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Trigger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <BuiltWithDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Empty
      </BuiltWithDrawer>
    </>
  );
};
