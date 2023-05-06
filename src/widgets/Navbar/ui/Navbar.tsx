/* eslint-disable i18next/no-literal-string */
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
} from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavBarProps {
  className?: string,
}

export const Navbar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          title="Ulbi tv app"
          theme={TextTheme.INVERTED}
          className={cls.appName}
        />
        <AppLink
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создание статьи')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classNames(cls.links)}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />}
    </div>
  );
});
