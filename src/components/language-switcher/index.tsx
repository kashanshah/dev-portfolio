import { constants } from '@utils/constants';
import { GlobalOutlined } from '@ant-design/icons';
import { Box, BoxProps, Flex, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { trans } from '@utils/trans';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Tooltip } from '@components/tooltip/tooltip';

export const LanguageSwitcher = (props: BoxProps) => {
  const languages = Object.entries(constants?.languages);
  const router = useRouter();
  const { pathname, locale } = router;

  if (!languages.length) {
    return null;
  }

  return (
    <>
      <Menu>
        <Box fontSize='1.9em' {...props}>
          <Tooltip label={trans(constants?.languageSwitcher?.title)}>
            <Flex
              cursor='pointer'
              width='1.5em'
              height='1.5em'
              border='1px solid'
              bg='gray.200'
              justifyContent='center'
              alignItems='center'
            >
              <MenuButton>
                <Text color='yellow.500'>
                  <GlobalOutlined />
                </Text>
              </MenuButton>
            </Flex>
          </Tooltip>
        </Box>
        <MenuList aria-haspopup={'true'} minWidth='150px' p={0}>
          {languages.map(([key, value], index) => {
            return (
              <MenuItem
                key={`${value}-${index}`}
                onClick={() => {
                  window.location.href = `/${key + pathname}`;
                }}
                justifyContent='space-between'
                bg={locale === key && useColorModeValue('gray.300', 'gray.800')}
              >
                {trans(value)}
                {locale === key && <CheckCircleIcon />}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};
