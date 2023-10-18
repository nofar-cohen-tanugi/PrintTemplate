import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useTranslation } from 'react-i18next';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useMemo } from 'react';

export const SaturdayStyle = () => {
  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });
  const { inputSettings } = useSaturdaySettings();

  const data = useMemo(() => {
    return JSON.parse(sessionStorage.getItem('saturdayStyle') ?? '');
  }, []);

  const settings = useMemo(() => {
    return inputSettings.filter((x) => x.name !== 'parasha');
  }, [inputSettings]);

  const parasha = useMemo(() => {
    return inputSettings.find((x) => x.name === 'parasha');
  }, [inputSettings]);

  console.log(settings);

  return (
    <>
      <div className='w-full h-screen flex flex-column justify-content-between align-items-start'>
        <h1 className='m-auto my-3'>
          {t(`${parasha?.name}`)} {data?.['parasha']}
        </h1>
        {settings?.map((item) => {
          return (
            <div className='flex'>
              <p className='text-xl font-bold mx-2'>{t(item.name)}</p>
              <p className='text-xl'>{data?.[item.name]}</p>
            </div>
          );
        })}
        <Button
          icon={PrimeIcons.SAVE}
          label={t('common:print')}
          className='w-full'
          onClick={() => window.print()}
        />
      </div>
    </>
  );
};
