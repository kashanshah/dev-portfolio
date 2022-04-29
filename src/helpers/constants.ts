import constantsJSON from './_constants.json';
import { Property } from 'csstype';
import ColorScheme = Property.ColorScheme;

export type ConstantsType = {
  fullName: string;
  email: string;
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
  };
  builtWith?: {
    triggerTooltip?: string;
    triggerIcon?: string;
    items: {
      title: string;
      body?: string;
    }[];
  };
};

export const constants: ConstantsType = constantsJSON;
