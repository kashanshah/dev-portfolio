import React from 'react';
import { Box, Flex, Link, Stack, StackProps, Text } from '@chakra-ui/react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { CheckIcon } from '@chakra-ui/icons';

type StickyNoteProps = StackProps & {
  text: string;
  rating?: number;
  color?: 'yellow' | 'blue' | 'pink' | 'green';
};

const getColor = (rating: number) => {
  if (rating === 3) {
    return 'pink';
  }
  if (rating === 2) {
    return 'yellow';
  }
  if (rating === 1) {
    return 'green';
  }
  return 'blue';
};

export const StickyNote = (props: StickyNoteProps) => {
  const { text, color, rating } = props;
  return (
    <>
      <style jsx global>{`
        .note-yellow {
          background: #f7e999;
          -webkit-transform: rotate(2deg);
          -moz-transform: rotate(2deg);
          -o-transform: rotate(2deg);
          -ms-transform: rotate(2deg);
          transform: rotate(2deg);
        }
        .note-blue {
          background: #b9dcf4;
          -webkit-transform: rotate(-2deg);
          -moz-transform: rotate(-2deg);
          -o-transform: rotate(-2deg);
          -ms-transform: rotate(-2deg);
          transform: rotate(-2deg);
        }
        .note-pink {
          background: #ffbda3;
          -webkit-transform: rotate(1deg);
          -moz-transform: rotate(1deg);
          -o-transform: rotate(1deg);
          -ms-transform: rotate(1deg);
          transform: rotate(1deg);
        }
        .note-green {
          background: #caf4b9;
          -webkit-transform: rotate(-1deg);
          -moz-transform: rotate(-1deg);
          -o-transform: rotate(-1deg);
          -ms-transform: rotate(-1deg);
          transform: rotate(-1deg);
        }
      `}</style>
      <Stack
        alignItems='center'
        justifyContent='center'
        className={`note-wrap note-${getColor(rating)}`}
        minWidth='150px'
        minHeight={['100px', '150px']}
        padding='10px'
        position='relative'
        fontSize='24px'
        color='grey.500'
        boxShadow='0 4px 5px rgba(0, 0, 0, 0.2)'
        transition='.25s all'
        _hover={{
          transform: 'scale(1.1)',
        }}
        _before={{
          display: 'block',
          content: '""',
          background: 'rgba(227, 200, 114, 0.4)',
          width: '50%',
          height: '28px',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          borderRadius: '6px/18px 0',
          position: 'absolute',
          top: '-13px',
          left: '0',
          right: '0',
          margin: '0 auto',
          transform: 'rotate(-2deg)',
        }}
        {...props}
      >
        <Text fontFamily='"Gloria Hallelujah", cursive'>{text}</Text>
        <Stack isInline fontSize='md'>
          {Array.from(new Array(5), () => {}).map((e, index) => {
            if (index < rating) {
              return <CheckIcon />;
            }
            return <></>;
          })}
        </Stack>
      </Stack>
    </>
  );
};
