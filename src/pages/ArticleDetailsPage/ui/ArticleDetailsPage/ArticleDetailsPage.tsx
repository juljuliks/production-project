import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailCommentSlice';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import { Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  useDynamicModuleLoad({ reducers });
  const { className } = props;
  const { t } = useNsTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      <ArticleDetails id={id} />
      <Text className={cls.commentsTitle} title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
