import constantsJSON from './_constants.json';
import { Property } from 'csstype';
import { IKeyValuePair } from '@utils/types';
import { ConfigColorMode } from '@chakra-ui/color-mode/src/color-mode-provider';
import ColorScheme = Property.ColorScheme;

export type ConstantsType = {
  title: string;
  email: string;
  seo?: IKeyValuePair<string> & {
    title?: string;
    description?: string;
    keywords?: string;
    robots?: string;
    language?: string;
    author?: string;
  };
  resume?: { linkText?: string; link: string };
  apiBaseUrl: string;
  isReduxPersistEnabled: boolean;
  skills?: {
    buttonText?: string;
    linkedInUrl: string;
    data: {
      name: string;
      rating?: number;
    }[];
  };
  socialLinks?: {
    [T in string]: {
      link: string;
      colorScheme?: ColorScheme;
      icon?: string;
    };
  };
  isContactPageDisabled?: boolean;
  homePage: {
    [T: string]: string;
    preHeading?: string;
    heading?: string;
    postHeading?: string;
    emailMeText?: string;
    contactPageLinkText?: string;
  };
  builtWith?: {
    triggerTooltip?: string;
    items: {
      title: string;
      body?: string;
    }[];
  };
  theme?: {
    defaultTheme?: string;
    useSystemColorMode?: boolean;
  };
  gtm?: {
    id: string;
    trackPageViews?: boolean;
  };
};

export const constants: ConstantsType = constantsJSON;
