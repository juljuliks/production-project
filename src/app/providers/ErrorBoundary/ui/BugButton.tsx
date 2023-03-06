import React, { useEffect, useState } from 'react';
import { useNsTranslation } from 'shared/lib/hooks/useNsTranslation';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useNsTranslation('main');
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => setError(true);

  return (
    <Button onClick={onThrow}>
      {t('Выбросить ошибку')}
    </Button>
  );
};
