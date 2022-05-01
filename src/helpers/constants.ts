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
    preHeading?: string;
    heading?: string;
    postHeading?: string;
    introText?: string;
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
    defaultTheme?: ConfigColorMode;
    useSystemColorMode?: boolean;
  };
  ga?: {
    id: string;
    trackHistory?: boolean;
  };
};

export const constants: ConstantsType = constantsJSON as ConstantsType;
