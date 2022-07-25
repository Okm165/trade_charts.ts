import { isRunningOnClientSide } from "./is-running-on-client-side";

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
