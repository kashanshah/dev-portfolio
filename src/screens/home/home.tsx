import { Box, Button, Flex, Heading, IconButton, Image, Link, Stack, Text, Tooltip } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import {
  FacebookFilled,
  FileFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  LoadingOutlined,
} from '@ant-design/icons';
import { randomNumberBetween } from '../../utils/helpers';
import { useState } from 'react';

export const HomeScreen = () => {
  const [bgImage, setBgImage] = useState(randomNumberBetween(1, 12));
  const [transitionCSS, setTransitionCSS] = useState('rotate(0) scale(1)');
  const updateBg = () => setBgImage(randomNumberBetween(1, 12));
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      height={['auto', '100vh']}
      flexDirection={['column-reverse', 'row']}
    >
      <Flex w={['100%', '50%']} alignItems='center' justifyContent='center'>
        <Image
          onClick={() => updateBg()}
          src={`/images/${bgImage}.jpeg`}
          alt='Syed Kashan Ali Shah'
          height={['auto', '100vh']}
          w='100%'
          objectFit='cover'
          fallback={<LoadingOutlined spin style={{ fontSize: 'xxx-large' }} />}
        />
      </Flex>
      <Flex
        w={['100%', '50%']}
        alignItems='center'
        justifyContent='center'
        h='100%'
        flexDirection='column'
        onMouseEnter={() => setTransitionCSS('rotate(45deg) scale(2)')}
        onMouseLeave={() => setTransitionCSS('rotate(0deg) scale(1)')}
        onClick={() => updateBg()}
        my={['32px', null]}
      >
        <Box as='span' transition='1s all cubic-bezier(0, 0.59, 1, 1.33)' transform={transitionCSS} mb='.25rem'>
          👋
        </Box>
        <Heading size='md'>Hi, I am</Heading>
        <Heading mb='1rem' color='blue.500'>
          Syed Kashan Ali Shah!
        </Heading>
        <Stack isInline mb='3rem'>
          <Link _hover={{ textDecoration: 'none' }} target='_blank' href='mailto:kashanshah@hotmail.com'>
            <Tooltip hasArrow label='kashanshah@hotmail.com'>
              <Button leftIcon={<EmailIcon />} variant='solid' colorScheme='blue'>
                Email Me
              </Button>
            </Tooltip>
          </Link>
          <Link _hover={{ textDecoration: 'none' }} target='_blank' href={'/docs/resume-syed-kashan-ali-shah.pdf'}>
            <Button leftIcon={<FileFilled />} variant='solid' colorScheme='blue'>
              View My Resume
            </Button>
          </Link>
        </Stack>
        <Text mb='.25rem'>Connect me on</Text>
        <Flex>
          <Link isExternal href='https://fb.me/crickashan'>
            <IconButton variant='link' colorScheme='facebook' fontSize='2xl' aria-label='facebook'>
              <FacebookFilled />
            </IconButton>
          </Link>
          <Link isExternal href='https://github.com/kashanshah'>
            <IconButton variant='link' colorScheme='github' fontSize='2xl' aria-label='github'>
              <GithubFilled />
            </IconButton>
          </Link>
          <Link isExternal href='https://ae.linkedin.com/kashanshah'>
            <IconButton variant='link' colorScheme='linkedin' fontSize='2xl' aria-label='linkedin'>
              <LinkedinFilled />
            </IconButton>
          </Link>
          <Link isExternal href='https://www.instagram.com/crickashan'>
            <IconButton variant='link' colorScheme='orange' fontSize='2xl' aria-label='instagram'>
              <InstagramFilled />
            </IconButton>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
