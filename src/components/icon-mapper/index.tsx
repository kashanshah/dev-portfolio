import React from 'react';
import {
  AndroidFilled,
  AppleFilled,
  DribbbleOutlined,
  DropboxCircleFilled,
  FacebookFilled,
  GithubFilled,
  GoogleOutlined,
  InstagramFilled,
  LinkedinFilled,
  PhoneFilled,
  PlusSquareOutlined,
  SkypeFilled,
  SlackSquareFilled,
  TwitterCircleFilled,
  WechatFilled,
  WhatsAppOutlined,
  WindowsFilled,
  YoutubeFilled,
} from '@ant-design/icons';
import { AttachmentIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';

type IconMapperProps = { icon: string };

export const IconMapper = ({ icon, ...rest }: IconMapperProps) => {
  switch (icon) {
    case 'facebook':
      return <FacebookFilled {...rest} />;
    case 'instagram':
      return <InstagramFilled {...rest} />;
    case 'linkedin':
      return <LinkedinFilled {...rest} />;
    case 'twitter':
      return <TwitterCircleFilled {...rest} />;
    case 'github':
      return <GithubFilled {...rest} />;
    case 'dribble':
      return <DribbbleOutlined {...rest} />;
    case 'whatsapp':
      return <WhatsAppOutlined {...rest} />;
    case 'youtube':
      return <YoutubeFilled {...rest} />;
    case 'wechat':
      return <WechatFilled {...rest} />;
    case 'email':
      return <EmailIcon {...rest} />;
    case 'attachment':
      return <AttachmentIcon {...rest} />;
    case 'phone':
      return <PhoneFilled {...rest} />;
    case 'android':
      return <AndroidFilled {...rest} />;
    case 'apple':
      return <AppleFilled {...rest} />;
    case 'windows':
      return <WindowsFilled {...rest} />;
    case 'skype':
      return <SkypeFilled {...rest} />;
    case 'google':
    case 'gmail':
      return <GoogleOutlined {...rest} />;
    case 'dropbox':
      return <DropboxCircleFilled {...rest} />;
    case 'slack':
      return <SlackSquareFilled {...rest} />;
    case 'info':
      return <InfoIcon {...rest} />;
    default:
      return <PlusSquareOutlined {...rest} />;
  }
};
