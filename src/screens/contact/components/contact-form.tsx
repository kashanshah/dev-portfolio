import React, { useRef } from 'react';
import { Button, ButtonGroup, FormControl, FormErrorMessage, Input, InputGroup, InputGroupProps, InputLeftAddon, Stack, Textarea } from '@chakra-ui/react';
import { RedEnvelopeOutlined, UserOutlined } from '@ant-design/icons';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { IContactApiRequestBody } from '@screens/contact/components/types';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useToast } from '@hooks/use-toast';
import { useMutation } from 'react-query';
import { GoogleRecaptcha } from '@components/google-recaptcha';
import { constants } from '@utils/constants';
import { trans } from '@utils/trans';

export const ContactForm = () => {
  const { errorToast, successToast } = useToast();
  const recaptchaRef = useRef(null);
  const translations = constants?.stringTranslations;

  const defaultValues: Omit<IContactApiRequestBody, 'recaptcha'> = {
    name: '',
    contact: '',
    message: ''
  };
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    trigger,
    formState: { errors }
  } = useForm<IContactApiRequestBody>({
    defaultValues,
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('What should I call you?').min(4, 'Is this your full name?'),
        contact: Yup.string()
          .required('Give me your contact for getting back to you')
          .min(5, 'Contact information seems incomplete'),
        message: Yup.string().required('Say me anything...').min(4, 'Say me anything...'),
        recaptcha: Yup.string().required('Are you a human?').nullable()
      })
    )
  });

  const inputGroupProps: InputGroupProps = {
    // bg: 'white',
  };

  const { mutateAsync, isLoading } = useMutation({
      mutationKey: 'contactFormSubmit',
      mutationFn: (data) => {
        console.log('finding', data);
        return axios.post('/api/contact', data);
      },
      onSuccess: () => {
        resetForm();
        successToast({
          title: 'Your message has been received',
          description: 'I\'ll reach out to you soon.'
        });
      },
      onError: (error) => {
        errorToast(error);
      }
    }
  );

  const onSubmit = async (data: any) => {
    mutateAsync(data);
  };

  const resetForm = () => {
    reset(defaultValues);
    recaptchaRef?.current?.reset();
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
                <InputLeftAddon pointerEvents='none' children={<UserOutlined />} />
                <Input placeholder={trans(translations['txt_your_name'])} {...field} />
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
                <InputLeftAddon pointerEvents='none' children={<RedEnvelopeOutlined />} />
                <Input placeholder={trans(translations['txt_your_email'])} {...field} />
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
                <Textarea placeholder={trans(translations['txt_your_message'])} {...field} />
              </InputGroup>
            )}
          />
          <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.recaptcha} isReadOnly={isLoading}>
          <GoogleRecaptcha
            reference={recaptchaRef}
            siteKey={constants?.recaptcha?.siteKey}
            onChange={(value) => {
              if (!value) {
                recaptchaRef?.current?.reset();
              }
              setValue('recaptcha', value);
              trigger('recaptcha');
            }}
          />
          <FormErrorMessage>{errors?.recaptcha?.message}</FormErrorMessage>
        </FormControl>
        <ButtonGroup justifyContent='flex-end'>
          <Button
            display='inline'
            variant='link'
            colorScheme='blue'
            _focus={{
              border: 0
            }}
            onClick={resetForm}
          >
            {trans(constants?.contactForm?.resetBtnText) || 'Reset Form'}
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
            {trans(constants?.contactForm?.submitBtnText) || 'Send'}
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};
