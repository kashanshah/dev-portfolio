// todo common package
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { isBrowser } from './browser';
import Router from 'next/router';
import { IKeyValuePairAny } from '@utils/types';
import { constants } from '@helpers/constants';

export type DataLayerEventType = {
  eventName: string;
  data?: Record<string, string | number | boolean | null | string[] | Record<string, any> | Record<string, any>[]>;
};

export async function dataLayerEvent(props: DataLayerEventType): Promise<void> {
  // only fire on client side
  if (!isBrowser || !constants?.gtm?.id) {
    return;
  }

  const { eventName, data } = props;
  dataLayerPush({
    ...data,
    event: eventName,
  });
}

type DataLayerPushType = IKeyValuePairAny;

export async function dataLayerPush(data: DataLayerPushType): Promise<void> {
  // only fire on client side
  if (!isBrowser || !constants?.gtm?.id) {
    return;
  }
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    ...data,
  });
}
