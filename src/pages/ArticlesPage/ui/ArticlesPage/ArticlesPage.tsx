/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useNsTranslation('article-details');

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      Articles page
    </div>
  );
};

export default memo(ArticlesPage);
