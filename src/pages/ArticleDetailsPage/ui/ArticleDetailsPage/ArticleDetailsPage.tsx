import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailCommentSlice';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import { Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  useDynamicModuleLoad({ reducers, removeAfterUnmount: true });
  const { className } = props;
  const { t } = useNsTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentsTitle} title={t('Комментарии')} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
