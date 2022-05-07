import { ConstantsType } from '@utils/types';

export const constants: ConstantsType = {
  title: { en: 'Syed Kashan Ali Shah' },
  email: 'kashanshah@hotmail.com',
  seo: {
    title: {
      en: 'Syed Kashan Ali Shah | Frontend Engineer',
      ar: 'سيد كاشان علي شاه',
      ur: 'سيد كاشان علي شاه',
    },
    description: {
      en: "I'm a frontend engineer, from Pakistan living in Dubai, with 6+ years experience working with React, NextJS, HTML, CSS, Javascript and also WordPress.",
    },
    keywords: {
      en: 'Web Developer, frontend engineer, software engineer, React JS, Next JS, Gatsby, HTL, CSS, Javascript, UI Developer, WordPress',
    },
    robots: 'index, nofollow',
    language: {
      en: { en: 'English', ur: 'انگریزی' },
      ur: { en: 'Urdu', ur: 'اردو' },
    },
    author: 'Kashan Shah',
  },
  resume: {
    linkText: {
      en: 'View My Resume',
      ur: 'میرا ریزیومے دیکھیں',
    },
    link: { en: '/docs/resume-syed-kashan-ali-shah.pdf' },
  },
  apiBaseUrl: { en: 'https://msenterprises.pk/apis' },
  isReduxPersistEnabled: false,
  skills: {
    buttonText: {
      en: 'View My Skills',
      ur: 'میری مہارتیں دیکھیں',
    },
    linkedInUrl: { en: 'https://www.linkedin.com/in/kashanshah/details/skills/' },
    data: [
      {
        name: 'React',
        rating: 3,
      },
      {
        name: 'NextJS',
        rating: 2,
      },
      {
        name: 'JavaScript',
        rating: 3,
      },
      {
        name: 'TypeScript',
        rating: 2,
      },
      {
        name: 'HTML',
        rating: 3,
      },
      {
        name: 'CSS',
        rating: 3,
      },
      {
        name: 'NodeJS',
        rating: 1,
      },
      {
        name: 'MongoDB',
        rating: 1,
      },
      {
        name: 'SCSS',
        rating: 2,
      },
      {
        name: 'LESS',
        rating: 2,
      },
      {
        name: 'WordPress',
        rating: 3,
      },
      {
        name: 'BootstrapCSS',
        rating: 3,
      },
      {
        name: 'jQuery',
        rating: 3,
      },
      {
        name: 'Ajax',
        rating: 2,
      },
      {
        name: 'PHP',
        rating: 1,
      },
      {
        name: 'MySQL',
        rating: 2,
      },
      {
        name: 'Git',
        rating: 2,
      },
      {
        name: 'SVN',
        rating: 1,
      },
    ],
  },
  socialLinks: {
    label: {
      en: 'Connect me on',
      ur: 'مجھ سے جڑیں۔',
    },
    links: {
      facebook: {
        link: 'https://fb.me/crickashan',
        colorScheme: 'facebook',
        icon: 'facebook',
      },
      github: {
        link: 'https://github.com/kashanshah',
        colorScheme: 'github',
        icon: 'github',
      },
      linkedin: {
        link: 'https://www.linkedin.com/in/kashanshah',
        colorScheme: 'linkedin',
        icon: 'linkedin',
      },
      instagram: {
        link: 'https://www.instagram.com/crickashan',
        colorScheme: 'orange',
        icon: 'instagram',
      },
      whatsapp: {
        link: 'https://wa.me/971567200094',
        colorScheme: 'whatsapp',
        icon: 'whatsapp',
      },
    },
  },
  isContactPageDisabled: false,
  homePage: {
    preHeading: {
      en: 'Hi, I am',
      ar: 'مرحباً، أنا',
      ur: 'میرا نام ہے',
    },
    heading: {
      en: 'Syed Kashan Ali Shah!',
      ar: 'سيد كاشان علي شاه',
      ur: 'سيد كاشان علي شاه',
    },
    introText: {
      en: 'Frontend Engineer\uD83E\uDDD1\u200D\uD83D\uDCBB \n from Pakistan \uD83C\uDDF5\uD83C\uDDF0 \n coding in Dubai \uD83C\uDDE6\uD83C\uDDEA',
      ur: 'میں ایک فرنٹ اینڈ ڈویلپر ہوں۔\uD83E\uDDD1\u200D\uD83D\uDCBB \n میرا تعلق پاکستان سے ہے۔\uD83C\uDDF5\uD83C\uDDF0 \n میں دبئی میں مقیم ہوں۔\uD83C\uDDE6\uD83C\uDDEA',
    },
    emailMeText: {
      en: 'you can email me as well',
      ur: 'آپ مجھے ای میل بھی کر سکتے ہیں۔',
    },
    contactPageLinkText: {
      en: 'Say me hi',
      ur: 'مجھ سے رابطہ کریں۔',
    },
  },
  builtWith: {
    triggerTooltip: {
      en: 'See what is used to build this...',
      ur: 'یہ ویب سائٹ ان چیزوں کے ساتھ بنائی گئی ہے۔',
    },
    items: [
      {
        title: 'React',
        body: {
          en: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
          ur: 'ReactJS ایک اوپن سورس جاوا اسکرپٹ لائبریری ہے جو خاص طور پر سنگل پیج ایپلی کیشنز کے لیے یوزر انٹرفیس بنانے کے لیے استعمال ہوتی ہے۔ یہ ویب اور موبائل ایپس کے لیے ویو لیئر کو سنبھالنے کے لیے استعمال ہوتا ہے۔ React ہمیں دوبارہ قابل استعمال UI اجزاء بنانے کی بھی اجازت دیتا ہے۔',
        },
      },
      {
        title: 'Redux',
        body: {
          en: 'React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple.',
        },
      },
      {
        title: 'Redux Toolkit',
        body: {
          en: 'The Redux Toolkit package is intended to have a standard way to write Redux logic. It was originally created to help address three common concerns about Redux: 1) Configuring a Redux store is too complicated, 2) I have to add a lot of packages to get Redux to do anything useful, 3) Redux requires too much boilerplate code"\n',
        },
      },
      {
        title: 'Axios',
        body: {
          en: 'Axios is a promise based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.\nhttps://axios-http.com',
        },
      },
      {
        title: 'NextJS',
        body: {
          en: "Next. js is a JavaScript framework created by Zeit. It lets you build server-side rendering and static web applications using React. It's a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.\nhttps://nextjs.org/",
        },
      },
      {
        title: 'Chakra UI',
        body: {
          en: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.\nhttps://chakra-ui.com/',
        },
      },
      {
        title: 'Netlify',
        body: {
          en: 'Netlify is a web developer platform that multiplies productivity. By unifying the elements of the modern decoupled web, from local development to advanced edge logic, Netlify enables a 10x faster path to much more performant, secure, and scalable websites and apps.\nhttps://www.netlify.com/',
        },
      },
      {
        title: 'Google Analytics',
        body: {
          en: 'Google Analytics is a web analytics service that provides statistics and basic analytical tools for search engine optimization (SEO) and marketing purposes. The service is part of the Google Marketing Platform and is available for free to anyone with a Google account.',
        },
      },
      {
        title: 'next-routes',
      },
      {
        title: 'React Hook Form',
      },
      {
        title: 'Yup',
      },
      {
        title: 'React Query',
        body: {
          en: 'React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze. \nIn this project, it is used in contact form submissions.\nhttps://react-query.tanstack.com/',
        },
      },
      {
        title: 'AntDesign Icons',
      },
    ],
  },
  copyright: {
    title: { en: 'no © copyrights' },
    body: {
      en: '# This is an open-sourced project. Feel free to clone it from my [github](https://github.com/kashanshah/dev-portfolio) and use for your own. If you need any help, ping me :)',
    },
  },
  theme: {
    defaultTheme: 'dark',
    useSystemColorMode: true,
  },
  ga: {
    id: 'UA-117582605-4',
    trackHistory: true,
  },
  recaptcha: {
    siteKey: '6Lc5y6UUAAAAACUR5d2VH1AmN-hSXKxcO7Iemq9h',
  },
  contactForm: {
    heading: {
      en: 'Say hi to me',
      ur: 'مجھ سے رابطہ کریں',
    },
    homePageLinkText: {
      en: 'Go back to home page',
      ur: 'ہوم پیج پر جائیں۔',
    },
    emailLinkText: {
      en: 'or you can email me as well',
      ur: 'آپ مجھے بھی ای میل کر سکتے ہیں۔',
    },
    submitBtnText: {
      en: 'Send',
      ur: 'بھیجیں',
    },
    resetBtnText: {
      en: 'Reset Form',
      ur: 'ری سیٹ',
    },
  },
  languageSwitcher: {
    title: {
      en: 'Change language',
      ur: 'زبان تبدیل کریں',
    },
  },
  stringTranslations: {
    txt_your_name: {
      en: 'Your name',
      ur: 'آپ کا نام',
    },
    txt_your_email: {
      en: 'Your email',
      ur: 'آپ کا ای میل',
    },
    txt_your_message: {
      en: 'Your message',
      ur: 'آپ کا پیغام',
    },
    txt_or: {
      en: 'Or',
      ur: 'یا',
    },
    txt_loading: {
      en: 'Loading',
      ur: 'لوڈ ہو رہا ہے',
    },
  },
};
