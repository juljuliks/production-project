import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string,
}

export const Navbar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
