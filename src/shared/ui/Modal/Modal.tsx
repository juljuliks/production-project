import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string,
  children: ReactNode,
  isOpen?: boolean,
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    // todo return in else
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const onContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div data-testid="modal" className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
