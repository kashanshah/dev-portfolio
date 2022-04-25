import { Box, Button, Heading, Link, Stack } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { FileFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateHelloCss } from '@redux/common-slice';
import { RootState } from '@redux/store';
import { PageWrapper } from '@layouts/two-columns';
import { SocialLinks } from '@screens/home/components/social-links';
import { Index } from '@screens/home/components/skills-drawer';
import { useState } from 'react';
import { constants } from '@helpers/constants';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const [showSkills, setShowSkills] = useState(false);
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
          {constants.skills?.data?.length > 0 && (
            <Button
              leftIcon={<InfoOutlineIcon />}
              variant='solid'
              colorScheme='orange'
              onClick={() => setShowSkills(true)}
            >
              View My Skills
              <Index isOpen={showSkills} onClose={() => setShowSkills(false)} />
            </Button>
          )}
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
