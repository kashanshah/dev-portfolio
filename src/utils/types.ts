import { ConfigColorMode } from '@chakra-ui/color-mode/src/color-mode-provider';
import { Property } from 'csstype';
import ColorScheme = Property.ColorScheme;

export type IKeyValuePair<T> = {
  [K: string]: T;
};

export type IKeyValuePairAny = {
  [K: string]: any;
};

export type MultiLingualString = string | IKeyValuePair<string>;

export type ConstantsType = {
  title: MultiLingualString;
  email: string;
  seo?: IKeyValuePair<MultiLingualString> & {
    title?: MultiLingualString;
    description?: MultiLingualString;
    keywords?: MultiLingualString;
    robots?: string;
    author?: MultiLingualString;
  };
  languages?: IKeyValuePair<MultiLingualString>;
  resume?: { linkText?: MultiLingualString; link: MultiLingualString };
  apiBaseUrl: MultiLingualString;
  isReduxPersistEnabled: boolean;
  skills?: {
    buttonText?: MultiLingualString;
    linkedInUrl: MultiLingualString;
    data: {
      name: MultiLingualString;
      rating?: number;
    }[];
  };
  socialLinks?: {
    label: MultiLingualString;
    links: {
      [T in string]: {
        link: string;
        colorScheme?: ColorScheme;
        icon?: string;
      };
    };
  };
  isContactPageDisabled?: boolean;
  homePage: {
    preHeading?: MultiLingualString;
    heading?: MultiLingualString;
    postHeading?: MultiLingualString;
    introText?: MultiLingualString;
    emailMeText?: MultiLingualString;
    contactPageLinkText?: MultiLingualString;
  };
  builtWith?: {
    triggerTooltip?: MultiLingualString;
    items: {
      title: MultiLingualString;
      body?: MultiLingualString;
    }[];
  };
  copyright?: {
    title?: MultiLingualString;
    body?: MultiLingualString;
  };
  theme?: {
    defaultTheme?: ConfigColorMode;
    useSystemColorMode?: boolean;
  };
  ga?: {
    id: string;
    trackHistory?: boolean;
  };
  recaptcha?: {
    siteKey?: string;
  };
  contactForm?: {
    heading?: MultiLingualString;
    homePageLinkText?: MultiLingualString;
    emailLinkText?: MultiLingualString;
    submitBtnText?: MultiLingualString;
    resetBtnText?: MultiLingualString;
  };
  languageSwitcher: {
    title: MultiLingualString;
  };
  stringTranslations: IKeyValuePair<MultiLingualString>;
};
