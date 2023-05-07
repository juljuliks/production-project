import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

interface AvatarProps {
  className?: string,
  src?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean;

}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,
    fallbackInverted,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    height: size,
    width: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
      alt={alt}
    />
  );
};
