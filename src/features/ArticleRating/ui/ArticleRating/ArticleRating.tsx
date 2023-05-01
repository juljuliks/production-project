import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useSetArticleRating } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
  const [rateArticleMutation] = useSetArticleRating();
  const rating = data?.[0];

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      console.error(e);
    }
  }, [articleId, userData?.id, rateArticleMutation]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height="120px" />;
  }

  return (
    <RatingCard
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте отзыв')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

export default ArticleRating;
