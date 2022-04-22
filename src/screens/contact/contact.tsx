import { Button, Heading, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateHelloCss, updateIsPageLoading } from '@redux/common-slice';
import { PageWrapper } from '../../layouts/two-columns';
import { useGoToUrl } from '../../utils/url';
import { ContactForm } from '@screens/contact/components/contact-form';
import { useRouter } from 'next/router';

const getTransformPercent = (step: number) => {
  if (step === 0) {
    return 0;
  }
  if (step === 1) {
    return -100;
  }
  return -200;
};

export const ContactScreen = () => {
  const dispatch = useDispatch();
  const goToUrl = useGoToUrl();

  return (
    <PageWrapper>
      <PageWrapper.ContentWall
        onMouseEnter={() => dispatch(updateHelloCss('rotate(45deg) scale(2)'))}
        onMouseLeave={() => dispatch(updateHelloCss('rotate(0deg) scale(1)'))}
      >
        <Stack spacing='4' align='flex-end' w={['90vw', '25vw']}>
          <Heading size='sm' alignSelf='flex-start'>
            Say hi to me
          </Heading>
          <ContactForm />
          <Stack justifyContent='flex-end'>
            <Button
              variant='link'
              colorScheme='orange'
              onClick={() => {
                goToUrl('/');
              }}
            >
              Go back to home page
            </Button>
          </Stack>
        </Stack>
      </PageWrapper.ContentWall>
      <PageWrapper.ImageWall />
    </PageWrapper>
  );
};
