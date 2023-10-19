import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useTranslation } from 'react-i18next';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useMemo, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from '../print/ComponentToPrint';

export const SaturdayStyle = () => {
  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });
  const { inputSettings } = useSaturdaySettings();

  const componentRef = useRef(null);

  const data = useMemo(() => {
    return JSON.parse(sessionStorage.getItem('saturdayStyle') ?? '');
  }, []);

  const settings = useMemo(() => {
    return inputSettings.filter((x) => x.name !== 'parasha');
  }, [inputSettings]);

  const parasha = useMemo(() => {
    return inputSettings.find((x) => x.name === 'parasha');
  }, [inputSettings]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        className='w-full h-screen flex flex-column justify-content-between align-items-start p-6'
        style={{
          backgroundImage: 'url("../public/images/frame.png")',
          backgroundSize: '100% 95%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        ref={componentRef}
      >
        <div className='w-full flex justify-content-center'>
          <h1>
            {t(`${parasha?.name}`)} {data?.['parasha']}
          </h1>
        </div>
        {settings?.map((item) => {
          return (
            <div className='flex'>
              <p className='text-2xl font-bold mx-2'>{t(item.name)}</p>
              <p className='text-2xl'>{data?.[item.name]}</p>
            </div>
          );
        })}

        <Button
          icon={PrimeIcons.SAVE}
          label={t('common:print')}
          className='w-10rem align-self-center'
          onClick={handlePrint}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    </>
  );
};
