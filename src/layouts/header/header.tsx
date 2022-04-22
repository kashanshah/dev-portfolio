import React from 'react';
import NextHead from 'next/head';

type HeaderProps = {
  title?: string;
};
export const Header = (props: HeaderProps) => {
  return (
    <NextHead>
      <title>{props.title}</title>
    </NextHead>
  );
};
