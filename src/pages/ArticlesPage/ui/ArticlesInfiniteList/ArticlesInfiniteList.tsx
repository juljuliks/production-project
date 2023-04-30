import { memo } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useSelector } from 'react-redux';
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
