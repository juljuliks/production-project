/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string,
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classNames(cls.links)}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Labore sapiente impedit tenetur quo illum veritatis debitis,
          harum ex quis error officiis hic dolor inventore, sunt porro iste corrupti,
          vitae tempore!
        </div>
      </Modal>
    </div>
  );
};
