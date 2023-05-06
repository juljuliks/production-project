import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-page-icon.svg';
import AboutIcon from '@/shared/assets/icons/about-page-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-page-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.profile}/${userData?.id}`,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
