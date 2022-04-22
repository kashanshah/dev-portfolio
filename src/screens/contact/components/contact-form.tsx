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

export const ContactForm = () => {
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
        contact: Yup.string().email().required('Give me your contact for getting back to you'),
        message: Yup.string().required('Say me anything...'),
      })
    ),
  });

  const inputGroupProps: InputGroupProps = {
    bg: 'white',
  };

  const onSubmit = (data: any) => {
    console.log('data', data);
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
          <Button variant='solid' colorScheme='orange' aria-label='next' border={0} display='flex' type='submit'>
            Send
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};
