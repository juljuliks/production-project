import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCreatePageProps{
  className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const { className } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <div />
    </div>
  );
});

export default ArticleCreatePage;
