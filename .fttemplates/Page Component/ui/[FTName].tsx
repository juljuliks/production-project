import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import cls from './[FTName].module.scss';

interface [FTName]Props{
  className?: string;
}

const [FTName] = memo((props: [FTName]Props) => {
  const { className } = props;
  const { t } = useTranslation()

  return (
    <Page className={classNames(cls.[FTName], {}, [className])}>
      <div />
    </Page>
  );
})

export default [FTName]