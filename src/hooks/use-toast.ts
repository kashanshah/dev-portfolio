import { ToastId, useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react';

type ToastOptions = { (options?: UseToastOptions): ToastId };

const successToast = (toast: ToastOptions) => (options: UseToastOptions) => {
  toast({
    title: 'Success',
    status: 'success',
    isClosable: true,
    position: 'bottom-start',
    ...options,
  });
};

const errorToast = (toast: ToastOptions) => (options: UseToastOptions) => {
  toast({
    title: 'An error occurred',
    status: 'error',
    isClosable: true,
    position: 'bottom-start',
    ...options,
  });
};

export type UseToastProps = {
  successToast: (options?: UseToastOptions) => void;
  errorToast: (options?: UseToastOptions) => void;
};
export const useToast = (): UseToastProps => {
  const toast = useChakraToast({});
  return {
    successToast: successToast(toast),
    errorToast: errorToast(toast),
  };
};
