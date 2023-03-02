import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation('main');
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
