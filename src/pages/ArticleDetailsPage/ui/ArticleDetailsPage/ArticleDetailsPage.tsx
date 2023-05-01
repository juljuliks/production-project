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

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
