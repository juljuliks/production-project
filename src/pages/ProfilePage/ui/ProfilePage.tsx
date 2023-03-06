import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string,
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useNsTranslation('profile');
  useDynamicModuleLoad({ reducers, removeAfterUnmount: true });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      {t('Страница профиля')}
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
