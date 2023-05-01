import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string,
  src?: string
  size?: number
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,

  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    height: size,
    width: size,
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
      alt={alt}
    />
  );
};
