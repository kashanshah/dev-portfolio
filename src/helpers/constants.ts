import constantsJSON from './_constants.json';

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
    [T in string]: string;
  };
};

export const constants: ConstantsType = constantsJSON;
