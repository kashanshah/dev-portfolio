import React from 'react';
import NextHead from 'next/head';
import { constants, ConstantsType } from '@helpers/constants';

type HeaderProps = ConstantsType['seo'];

export const Header = (props: HeaderProps) => {
  const { title, description, keywords, robots, language, author } = props;

  return (
    <NextHead>
      <title>{title || constants?.seo?.title}</title>
      <meta name='title' content={title || constants?.seo?.title} />
      <meta name='description' content={description || constants?.seo?.description} />
      <meta name='keywords' content={keywords || constants?.seo?.keywords} />
      <meta name='robots' content={robots || constants?.seo?.robots} />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content={language || constants?.seo?.language} />
      <meta name='author' content={author || constants?.seo?.author} />
    </NextHead>
  );
};
