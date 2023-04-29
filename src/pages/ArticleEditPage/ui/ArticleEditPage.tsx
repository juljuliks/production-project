import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps{
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? t('Редактирование статьи') : t('Создание статьи')}
    </Page>
  );
});

export default ArticleEditPage;
