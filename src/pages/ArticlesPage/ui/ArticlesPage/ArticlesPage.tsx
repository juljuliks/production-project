/* eslint-disable i18next/no-literal-string */
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/fetchNextArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticlesInfiniteList from '../ArticlesInfiniteList/ArticlesInfiniteList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  useDynamicModuleLoad({ reducers, removeAfterUnmount: false });
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page
      className={classNames(cls.ArticlesPage, {}, [className])}
      onScrollEnd={onLoadNextPart}
    >
      <VStack max gap="32">
        <ArticlesPageFilters />
        <ArticlesInfiniteList />
      </VStack>
    </Page>
  );
};

export default memo(ArticlesPage);
