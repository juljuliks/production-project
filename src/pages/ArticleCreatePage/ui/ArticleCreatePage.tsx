import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps{
  className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticleCreatePage, {}, [className])}>
      <div />
    </div>
  );
});

export default ArticleCreatePage;
