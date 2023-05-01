import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/EditableProfileCard/model/selectors/getProfileData/getProfileData';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canRate = authData?.id !== profileData?.id;

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        {canRate && <ProfileRating profileId={id} />}
      </VStack>
    </Page>
  );
};

export default ProfilePage;
