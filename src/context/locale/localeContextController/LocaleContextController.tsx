import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Cookie from 'js-cookie';

import { LocaleContext } from '../localeContext/LocaleContext';
import { LocaleContextValue } from '../localeContext/LocaleContext.types';

import { LocaleContextControllerProps } from './LocaleContextController.types';

import { AppLocale } from '@/i18n/i18n.types';
import { localeCookie } from '@/i18n/i18n.constans';

export const LocaleContextController = ({ children }: LocaleContextControllerProps) => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  const changeLocale = (locale: AppLocale) => {
    changeLanguage(locale, () => {
      Cookie.set(localeCookie.name, locale);
    });
  };

  const value = useMemo<LocaleContextValue>(
    () => ({
      t,
      locale: language as AppLocale,
      changeLocale,
    }),
    [language, t],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
