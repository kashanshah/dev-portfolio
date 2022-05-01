import { Box, Button, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { FileFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateHelloCss } from '@redux/common-slice';
import { RootState } from '@redux/store';
import { PageWrapper } from '@layouts/two-columns';
import { SocialLinks } from '@screens/home/components/social-links';
import { SkillsDrawer } from '@screens/home/components/skills-drawer';
import { useState } from 'react';
import { constants } from '@helpers/constants';
import { pushGAEvent } from '@utils/ga';

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
        <Stack alignItems='center' mb='1rem'>
          {constants?.homePage?.preHeading && (
            <Heading size='md' colorScheme='blue'>
              {constants?.homePage.preHeading}
            </Heading>
          )}
          {constants?.homePage?.heading && <Heading color='blue.500'>{constants?.homePage?.heading}</Heading>}
          {constants?.homePage?.postHeading && <Heading size='md'>{constants?.homePage.postHeading}</Heading>}
          {constants?.homePage?.introText && (
            <Text align='center' whiteSpace='pre-wrap'>
              {constants?.homePage.introText}
            </Text>
          )}
        </Stack>
        <Stack isInline mb='3rem'>
          {constants.skills?.data?.length > 0 && (
            <Button
              leftIcon={<InfoOutlineIcon />}
              variant='solid'
              colorScheme='orange'
              onClick={() => setShowSkills(true)}
            >
              {constants?.skills?.buttonText || 'View My Skills'}
              <SkillsDrawer isOpen={showSkills} onClose={() => setShowSkills(false)} />
            </Button>
          )}
          {constants?.resume?.link && (
            <Link
              _hover={{ textDecoration: 'none' }}
              isExternal
              href={constants?.resume?.link}
              onClick={() => {
                pushGAEvent('View My Resume button click', '', 'Resume Downloads', 1);
              }}
            >
              <Button leftIcon={<FileFilled />} variant='outline' colorScheme='orange'>
                {constants?.resume?.linkText || 'View My Resume'}
              </Button>
            </Link>
          )}
        </Stack>
        <SocialLinks />
      </PageWrapper.ContentWall>
    </PageWrapper>
  );
};
