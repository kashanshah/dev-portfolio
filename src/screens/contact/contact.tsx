import { Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateHelloCss } from '@redux/common-slice';
import { PageWrapper } from '@layouts/two-columns';
import { useGoToUrl } from '@utils/url';
import { ContactForm } from '@screens/contact/components/contact-form';
import { Tooltip } from '@components/tooltip';
import constants from '@helpers/constants.json';

export const ContactScreen = () => {
  const dispatch = useDispatch();
  const goToUrl = useGoToUrl();

  return (
    <PageWrapper>
      <PageWrapper.ContentWall
        onMouseEnter={() => dispatch(updateHelloCss('rotate(45deg) scale(2)'))}
        onMouseLeave={() => dispatch(updateHelloCss('rotate(0deg) scale(1)'))}
      >
        <Stack spacing='4' w={['90vw', '25vw']}>
          <Flex justifyContent='flex-start' alignItems='center'>
            <Text as='span' fontSize='4xl'>
              👋
            </Text>
            <Heading size='lg' ms='3'>
              Say hi to me
            </Heading>
          </Flex>
          <ContactForm />
          <Stack justifyContent='flex-end' align='flex-end'>
            <Button
              variant='link'
              colorScheme='orange'
              onClick={() => {
                goToUrl('/');
              }}
            >
              Go back to home page
            </Button>
            <Link _hover={{ textDecoration: 'none' }} isExternal href={`mailto:${constants.email}`}>
              <Tooltip label={constants.email}>
                <Button variant='link' colorScheme='blue'>
                  or you can email me as well
                </Button>
              </Tooltip>
            </Link>
          </Stack>
        </Stack>
      </PageWrapper.ContentWall>
      <PageWrapper.ImageWall />
    </PageWrapper>
  );
};
