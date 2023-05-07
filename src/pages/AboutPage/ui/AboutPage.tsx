import { FC } from 'react';
import { useNsTranslation } from '@/shared/lib/hooks/useNsTranslation';
import { Page } from '@/widgets/Page';

const AboutPage: FC = () => {
  const { t } = useNsTranslation('about');
  return (
    <Page data-testid="AboutPage">
      {t('О сайте')}
    </Page>
  );
};

export default AboutPage;
