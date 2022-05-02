import ReCAPTCHA from 'react-google-recaptcha';
import { constants } from '@utils/constants';
import { useColorMode } from '@chakra-ui/react';
import { RefObject } from 'react';

type GoogleRecaptchaProps = {
  siteKey: string;
  onChange?: (value?: string) => void;
  reference?: RefObject<null>;
};
export const GoogleRecaptcha = (props: GoogleRecaptchaProps) => {
  const { siteKey, onChange, reference } = props;
  const { colorMode } = useColorMode();

  if (!constants?.recaptcha?.siteKey) {
    return null;
  }

  return <ReCAPTCHA sitekey={siteKey} theme={colorMode} onChange={onChange} ref={reference} />;
};
