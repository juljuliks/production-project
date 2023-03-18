import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-page-icon.svg';
import AboutIcon from 'shared/assets/icons/about-page-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-page-icon.svg';
import ArticlesIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
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
];
