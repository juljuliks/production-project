import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetailsData,
  (user, article) => {
    if (!article || !user) {
      return false;
    }
    return article.user.id === user.id;
  },
);
