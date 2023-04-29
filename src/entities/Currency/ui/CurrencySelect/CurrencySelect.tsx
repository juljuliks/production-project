import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const currencyOptions = useMemo(() => Object.entries(Currency)
    .map((val) => ({ value: val[0], content: val[1] })), []);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      defaultValue={t('Укажите валюту')}
      items={currencyOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Укажите валюту')}
      direction="top"
    />
  );
});
