import { Box, Button, Flex, Heading, IconButton, Stack, Text, Tooltip, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FacebookFilled, FileFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateHelloCss } from '@redux/common-slice';
import { RootState } from '@redux/store';
import { PageWrapper } from '@layouts/two-columns';
import { useGoToUrl } from '@utils/url';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const goToUrl = useGoToUrl();
  const { helloCSS } = useSelector((state: RootState) => state.common);
  return (
    <PageWrapper>
      <PageWrapper.ImageWall />
      <PageWrapper.ContentWall
        onMouseEnter={() => dispatch(updateHelloCss('rotate(45deg) scale(2)'))}
        onMouseLeave={() => dispatch(updateHelloCss('rotate(0deg) scale(1)'))}
      >
        <Box as='span' transition='1s all cubic-bezier(0, 0.59, 1, 1.33)' transform={helloCSS} mb='.25rem'>
          👋
        </Box>
        <Heading size='md'>Hi, I am</Heading>
        <Heading mb='1rem' color='blue.500'>
          Syed Kashan Ali Shah!
        </Heading>
        <Stack isInline mb='3rem'>
          <Link _hover={{ textDecoration: 'none' }} isExternal href='mailto:kashanshah@hotmail.com'>
            <Tooltip hasArrow label='kashanshah@hotmail.com'>
              <Button leftIcon={<EmailIcon />} variant='solid' colorScheme='orange'>
                Email Me
              </Button>
            </Tooltip>
          </Link>
          <Link _hover={{ textDecoration: 'none' }} isExternal href='/docs/resume-syed-kashan-ali-shah.pdf'>
            <Button leftIcon={<FileFilled />} variant='outline' colorScheme='orange'>
              View My Resume
            </Button>
          </Link>
        </Stack>
        <Stack spacing='2' align='center'>
          <Text>Connect me on</Text>
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
            <Link isExternal href='https://ae.linkedin.com/in/kashanshah'>
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
          <Text blur='md'>Or</Text>
          <Button
            variant='outline'
            colorScheme='orange'
            onClick={(e) => {
              e.preventDefault();
              goToUrl('/contact');
            }}
          >
            Say me Hi
          </Button>
        </Stack>
      </PageWrapper.ContentWall>
    </PageWrapper>
  );
};
