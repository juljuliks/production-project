import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string,
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  useDynamicModuleLoad({ reducers, removeAfterUnmount: true });
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      {t('Страница профиля', { ns: 'profile' })}
    </div>
  );
};

export default ProfilePage;
