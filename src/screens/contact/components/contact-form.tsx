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
import { useState } from 'react';
import { useToast } from '@hooks/use-toast';

export const ContactForm = () => {
  const { errorToast, successToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        name: Yup.string().required('What should I call you?'),
        contact: Yup.string()
          .required('Give me your contact for getting back to you')
          .min(5, 'Contact information seems incomplete'),
        message: Yup.string().required('Say me anything...'),
      })
    ),
  });

  const inputGroupProps: InputGroupProps = {
    bg: 'white',
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE}/v1/emails/submit-contact-form`, data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        console.log('here', response);
        successToast({
          title: 'Your message has been received',
          description: "I'll reach out to you soon.",
        });
      })
      .catch((e) => {
        errorToast();
      });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Stack w='100%' spacing='4'>
        <FormControl isInvalid={!!errors?.name}>
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
        <FormControl isInvalid={!!errors?.contact}>
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
        <FormControl isInvalid={!!errors?.message}>
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
            isLoading={isSubmitting}
          >
            Send
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};
