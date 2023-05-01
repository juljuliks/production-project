import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetProfileRating, useSetProfileRating } from '../../api/profileRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = (props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetProfileRating({ profileId, userId: userData?.id ?? '' });
  const [rateProfileMutation] = useSetProfileRating();
  const rating = data?.[0];

  const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        userId: userData?.id ?? '',
        profileId,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      console.error(e);
    }
  }, [profileId, userData?.id, rateProfileMutation]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateProfile(starsCount);
  }, [handleRateProfile]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateProfile(starsCount, feedback);
  }, [handleRateProfile]);

  if (isLoading) {
    return <Skeleton width="100%" height="120px" />;
  }

  return (
    <RatingCard
      className={className}
      title={t('Оцените профиль')}
      feedbackTitle={t('Оставьте отзыв')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

export default ProfileRating;
