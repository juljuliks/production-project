import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import {
  useArticleRecommendationsList,
} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text title={t('Рекомендации')} />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
};
