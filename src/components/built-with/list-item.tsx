import React, { useRef, ReactElement, useState } from 'react';
import { Box, Flex, ListItem as ChakraListItem, ListItemProps as ChakraListItemProps, Text } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

type ListItemProps = ChakraListItemProps & {
  title: string;
  body?: string | ReactElement;
};
export const ListItem = (props: ListItemProps) => {
  const { title, body, ...rest } = props;
  const [showBody, setShowBody] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const toggleBody = () => {
    if (!body) {
      return;
    }
    setShowBody(!showBody);
  };

  return (
    <ChakraListItem {...rest}>
      <Flex alignItems='center' justifyContent='space-between' onClick={toggleBody} cursor={body && 'pointer'}>
        <Flex alignItems='center' justifyContent='flex-start'>
          {showBody ? <ChevronDownIcon /> : <ChevronRightIcon />}
          <Text fontWeight={700}>{title}</Text>
        </Flex>
        {body && (showBody ? <MinusOutlined /> : <PlusOutlined />)}
      </Flex>
      {body && (
        <Box
          position='relative'
          height={`${showBody ? bodyRef.current.clientHeight + 'px' : '0px'}`}
          width='100%'
          transition='.25s all ease'
          overflow='hidden'
          ms='4'
        >
          <Box ref={bodyRef}>{body}</Box>
        </Box>
      )}
    </ChakraListItem>
  );
};
