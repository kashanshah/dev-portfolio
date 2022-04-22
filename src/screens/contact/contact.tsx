import {
  Box,
  Button,
  theme,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useTheme,
  InputGroupProps,
} from '@chakra-ui/react';
import { CheckIcon, ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import {
  CommentOutlined,
  FacebookFilled,
  FileFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  LoadingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateBG, updateHelloCss } from '@redux/common-slice';
import { RootState } from '@redux/store';
import Link from 'next/link';
import { PageWrapper } from '../../layouts/two-columns';
import { useGoToUrl } from '../../utils/url';
import { useState } from 'react';
import LoadingIcon from 'antd/es/button/LoadingIcon';

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
  const [formStep, setFormStep] = useState(0);

  const inputGroupProps: InputGroupProps = {
    bg: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    transition: '0.5s all ease',
    zIndex: 1,
  };

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
          <Flex
            overflow='hidden'
            w='100%'
            border='1px solid'
            borderColor='gray.300'
            justifyContent='space-between'
            alignItems='center'
            position='relative'
            _after={{
              content: "''",
              position: 'absolute',
              bottom: 0,
              height: '2px',
              bg: 'green.700',
              width: `${formStep > 0 ? formStep / 0.03 : 1}%`,
              zIndex: 5,
            }}
          >
            <Box width='95%' height={theme.sizes['10']} position='relative' transition='.5s all ease'>
              <InputGroup {...inputGroupProps} zIndex={4} transform={`translateY(${formStep > 0 ? -100 : 0}%)`}>
                <InputLeftElement pointerEvents='none' color='gray.300' children={<UserOutlined />} />
                <Input _focus={{ border: 0 }} border={0} placeholder='Your name' onFocus={() => setFormStep(0)} />
              </InputGroup>
              <InputGroup {...inputGroupProps} zIndex={3} transform={`translateY(${formStep > 1 ? -100 : 0}%)`}>
                <InputLeftElement pointerEvents='none' color='gray.300' children={<EmailIcon />} />
                <Input
                  _focus={{ border: 0 }}
                  border={0}
                  placeholder='Your email or phone number'
                  onFocus={() => setFormStep(1)}
                />
              </InputGroup>
              <InputGroup {...inputGroupProps} zIndex={2} transform={`translateY(${formStep > 2 ? -100 : 0}%)`}>
                <InputLeftElement pointerEvents='none' color='gray.300' children={<CommentOutlined />} />
                <Input _focus={{ border: 0 }} border={0} placeholder='Your message' onFocus={() => setFormStep(2)} />
              </InputGroup>
              <InputGroup {...inputGroupProps} zIndex={1}>
                <Input
                  _focus={{ border: 0 }}
                  border={0}
                  color='gray.900'
                  isReadOnly
                  cursor='not-allowed'
                  placeholder='Submitting...'
                />
              </InputGroup>
            </Box>
            <IconButton
              variant='unstyled'
              colorScheme='orange'
              aria-label='next'
              border={0}
              _focus={{
                border: 0,
              }}
              icon={<ChevronRightIcon fontSize='2xl' />}
              onClick={() => {
                setFormStep(formStep + 1);
              }}
              display='flex'
              isLoading={formStep > 2}
            />
          </Flex>
          <Stack justifyContent='flex-end'>
            <Button
              display='inline'
              textAlign='right'
              variant='link'
              colorScheme='blue'
              onClick={() => {
                setFormStep(0);
              }}
              _focus={{
                border: 0,
              }}
            >
              Reset Form
            </Button>
            <Button
              variant='link'
              colorScheme='orange'
              onClick={() => {
                goToUrl({ path: '/' });
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
