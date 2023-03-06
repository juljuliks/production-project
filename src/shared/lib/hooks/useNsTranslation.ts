import { useTranslation } from 'react-i18next';

export const useNsTranslation = (ns: string) => {
  const { t } = useTranslation(ns);

  const translation = (text: string) => t(text, { ns });

  return { t: translation };
};
