import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const authData = useSelector(getUserAuthData);
  const canRate = authData?.id !== id;

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        {id && canRate && <ProfileRating profileId={id} />}
      </VStack>
    </Page>
  );
};

export default ProfilePage;
