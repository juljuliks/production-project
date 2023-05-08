import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
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

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])} data-testid="ArticleRecommendationsList">
      <Text title={t('Рекомендации')} />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
};
