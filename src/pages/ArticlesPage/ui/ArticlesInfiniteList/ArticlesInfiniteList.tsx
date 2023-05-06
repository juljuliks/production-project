import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticlesInfiniteListProps{
  className?: string;
}

const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
});

export default ArticlesInfiniteList;
