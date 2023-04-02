import { FC } from 'react';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import { Page } from 'shared/ui/Page/Page';

const AboutPage: FC = () => {
  const { t } = useNsTranslation('about');
  return (
    <Page>
      {t('О сайте')}
    </Page>
  );
};

export default AboutPage;
