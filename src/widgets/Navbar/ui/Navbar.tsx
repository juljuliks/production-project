import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss'

interface NavBarProps {
  className?: string,
}

export const Navbar = ({className}: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};
