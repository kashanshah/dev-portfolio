// todo common package
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //
export const isBrowser: boolean = typeof window !== 'undefined' && typeof window.document !== 'undefined';

/**
 * Locks scroll of body element
 * This is needed to fix issue with scroll of overlay content
 */
export const lockBodyScroll = (props?: { isLocked?: boolean; shouldScrollToTop?: boolean }) => {
  const { isLocked = true, shouldScrollToTop = false } = props;
  if (!isBrowser) {
    return;
  }

  if (isLocked) {
    if (shouldScrollToTop) {
      document.body.scrollTo(0, 0);
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
    document.body.style.overflowY = 'hidden';

    return;
  }
  document.body.style.position = null;
  document.body.style.width = null;
  document.body.style.overflowY = null;
};
