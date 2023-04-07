import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useNsTranslation('article=datails');
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      <Button
        className={cls.editBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Редактировать')}
      </Button>
    </div>
  );
});
