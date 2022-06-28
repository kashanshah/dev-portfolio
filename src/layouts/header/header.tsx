import React from 'react';
import NextHead from 'next/head';
import { constants } from '@utils/constants';
import { IKeyValuePair } from '@utils/types';
import { trans } from '@utils/trans';
import { useRouter } from 'next/router';

type HeaderProps = IKeyValuePair<string>;

export const Header = (props: HeaderProps) => {
  const { title, description, keywords, robots, language, author } = props;
  const { locale } = useRouter();

  return (
    <NextHead>
      <title>{title || trans(constants?.seo?.title)}</title>
      <meta name='title' content={title || trans(constants?.seo?.title)} />
      <meta name='description' content={description || trans(constants?.seo?.description)} />
      <meta name='keywords' content={keywords || trans(constants?.seo?.keywords)} />
      <meta name='robots' content={robots || trans(constants?.seo?.robots)} />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content={language || locale} />
      <meta name='author' content={author || trans(constants?.seo?.author)} />
      <meta name='google-site-verification' content='T2WUGCvAZzciF-akxZlekJq4gPvCWssMnUQM6sNhRzw' />
    </NextHead>
  );
};
