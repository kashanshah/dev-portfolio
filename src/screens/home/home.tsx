import { Box, Button, Flex, Heading, IconButton, Stack, Text, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FacebookFilled, FileFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateHelloCss } from '@redux/common-slice';
import { RootState } from '@redux/store';
import { PageWrapper } from '@layouts/two-columns';
import { useGoToUrl } from '@utils/url';
import { Tooltip } from '@components/tooltip';
import constants from '@helpers/constants.json';
import { SocialLinks } from '@screens/home/components/social-links';

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
          <Link _hover={{ textDecoration: 'none' }} isExternal href={`mailto:${constants.email}`}>
            <Tooltip label={constants.email}>
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
        <SocialLinks />
      </PageWrapper.ContentWall>
    </PageWrapper>
  );
};
