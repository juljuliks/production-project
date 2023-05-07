/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      {/* <BugButton /> */}
      {t('Главная страница')}
    </Page>
  );
};

export default MainPage;
