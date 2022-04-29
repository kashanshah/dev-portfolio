import constantsJSON from './_constants.json';
import { Property } from 'csstype';
import ColorScheme = Property.ColorScheme;

export type ConstantsType = {
  fullName: string;
  email: string;
  apiBaseUrl: string;
  isReduxPersistEnabled: boolean;
  skills?: {
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
};

export const constants: ConstantsType = constantsJSON;
