import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { UserOutlined } from '@ant-design/icons';
import { EmailIcon } from '@chakra-ui/icons';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { IContactApiRequestBody } from '@screens/contact/components/types';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useToast } from '@hooks/use-toast';
import { pushGAEvent } from '@utils/ga';
import { useMutation } from 'react-query';

export const ContactForm = () => {
  const { errorToast, successToast } = useToast();
  const defaultValues: IContactApiRequestBody = {
    name: '',
    contact: '',
    message: '',
  };
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IContactApiRequestBody>({
    defaultValues,
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('What should I call you?').min(4, 'Is this your full name?'),
        contact: Yup.string()
          .required('Give me your contact for getting back to you')
          .min(5, 'Contact information seems incomplete'),
        message: Yup.string().required('Say me anything...').min(4, 'Say me anything...'),
      })
    ),
  });

  const inputGroupProps: InputGroupProps = {
    // bg: 'white',
  };

  const { mutate, isLoading } = useMutation(
    'contactFormSubmit',
    (data: IContactApiRequestBody) => {
      pushGAEvent('contact form submit', JSON.stringify(data), 'Form submission', 1);
      return axios.post(
        `/`,
        { 'form-name': 'contact', ...data },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    },
    {
      onSuccess: () => {
        reset(defaultValues);
        successToast({
          title: 'Your message has been received',
          description: "I'll reach out to you soon.",
        });
      },
      onError: (error) => {
        errorToast(error);
      },
    }
  );

  const onSubmit = async (data: any) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Stack w='100%' spacing='4'>
        <FormControl isInvalid={!!errors?.name} isReadOnly={isLoading}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <InputGroup {...inputGroupProps}>
                <InputLeftElement pointerEvents='none' color='gray.300' children={<UserOutlined />} />
                <Input placeholder='Your name' {...field} />
              </InputGroup>
            )}
          />
          <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.contact} isReadOnly={isLoading}>
          <Controller
            name='contact'
            control={control}
            render={({ field }) => (
              <InputGroup {...inputGroupProps}>
                <InputLeftElement pointerEvents='none' color='gray.300' children={<EmailIcon />} />
                <Input placeholder='Your email or phone number' {...field} />
              </InputGroup>
            )}
          />
          <FormErrorMessage>{errors?.contact?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.message} isReadOnly={isLoading}>
          <Controller
            name='message'
            control={control}
            render={({ field }) => (
              <InputGroup {...inputGroupProps}>
                <Textarea placeholder='Your message' {...field} />
              </InputGroup>
            )}
          />
          <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
        </FormControl>
        <ButtonGroup justifyContent='flex-end'>
          <Button
            display='inline'
            textAlign='right'
            variant='link'
            colorScheme='blue'
            _focus={{
              border: 0,
            }}
            onClick={() => reset(defaultValues)}
          >
            Reset Form
          </Button>
          <Button
            variant='solid'
            colorScheme='orange'
            aria-label='next'
            border={0}
            display='flex'
            type='submit'
            isLoading={isLoading}
          >
            Send
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};
