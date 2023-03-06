import { FC } from 'react';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';

const AboutPage: FC = () => {
  const { t } = useNsTranslation('about');
  return (
    <div>
      {t('О сайте')}
    </div>
  );
};

export default AboutPage;
