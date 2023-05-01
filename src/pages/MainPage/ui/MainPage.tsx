/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {/* <BugButton /> */}
      {t('Главная страница')}
      <RatingCard
        title="Как вас статья"
        feedbackTitle="оставьбте отзыф"
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
