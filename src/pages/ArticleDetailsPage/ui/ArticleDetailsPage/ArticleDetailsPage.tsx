import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from '@/shared/lib/hooks/useDynamicModuleLoad';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { useNsTranslation } from '@/shared/lib/hooks/useNsTranslation';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  useDynamicModuleLoad({ reducers });
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useNsTranslation('article-details');

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ToggleFeatures
          feature="isArticleRatingEnabled"
          on={<ArticleRating articleId={id} />}
          off={<Card>{t('Оценка статей скоро появится!')}</Card>}
        />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
