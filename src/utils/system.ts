/**
 * When you're trying to use the library in server-side context (for instance in SSR)
 * you don't have some browser-specific variables like navigator or window
 * and if the library will use them on the top level of the library
 * the import will fail due ReferenceError
 * thus, this allows use the navigator on the top level and being imported in server-side context as well
 * See issue #446
 */
export const isRunningOnClientSide = typeof window !== "undefined";

export enum SystemType {
  isAndroid,
  isEdge,
  isFirefox,
  isChrome,
  isChromeIOS,
  isIE,
  isIOS,
  isOpera,
  isSafari,
}

const systemTest = {
  isAndroid: () => /Android/.test(navigator.userAgent),
  isEdge: () => /Edge/.test(navigator.userAgent),
  isFirefox: () => /Firefox/.test(navigator.userAgent),
  isChrome: () => /Google Inc/.test(navigator.vendor),
  isChromeIOS: () => /CriOS/.test(navigator.userAgent),
  isIE: () => /Trident/.test(navigator.userAgent),
  isIOS: () => /(iPhone|iPad|iPod)/.test(navigator.userAgent),
  isOpera: () => /OPR/.test(navigator.userAgent),
  isSafari: () => {
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
  },
};

export function isSystem(system: SystemType): boolean {
  if (!isRunningOnClientSide) {
    return false;
  }
  return systemTest[SystemType[system] as keyof typeof systemTest]();
}
