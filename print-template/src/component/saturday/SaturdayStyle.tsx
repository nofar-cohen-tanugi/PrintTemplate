import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useTranslation } from 'react-i18next';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useMemo, useRef, useState } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { HuePicker } from 'react-color';

export const SaturdayStyle = () => {
  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });
  const { inputSettings } = useSaturdaySettings(undefined);

  const [titleColor, setTitleColor] = useState<string>();
  const [greetingColor, setGreetingColor] = useState<string>();

  const componentRef = useRef(null);

  const data = useMemo(() => {
    return JSON.parse(sessionStorage.getItem('saturdayStyle') ?? '');
  }, []);

  const settings = useMemo(() => {
    return inputSettings.filter((x) => x.name !== 'parasha');
  }, [inputSettings]);

  const updateContent = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        className='w-full h-full flex flex-column align-items-start p-2 saturday-style selector'
        style={{
          backgroundImage: 'url("../public/images/frame.png")',
          backgroundSize: '100% 98%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        ref={componentRef}
      >
        <div className='w-full flex flex-column align-items-center mb-4'>
          <p
            className='absolute text-xl'
            style={{ top: '1rem', right: '9rem' }}
          >
            {t('basad')}
          </p>
          <h1 className='text-3xl mt-6 mb-2 px-2'>{t('temaniSynagogue')}</h1>
          <h1
            className='text-5xl my-0'
            style={{
              color: titleColor,
              textShadow: `0px 2px 5px ${titleColor + '20%'}`,
            }}
          >
            {data?.['parasha']}
          </h1>
        </div>
        <div className='px-4'>
          {settings?.map((item) => {
            return (
              <div className='flex'>
                <p className={'font-bold mx-2 my-4 text-4xl'}>{t(item.name)}</p>
                <p className={'mx-2 my-4 text-3xl'}>{data?.[item.name]}</p>
              </div>
            );
          })}
        </div>
        <h1
          className='greeting mx-auto font-bold text-7xl'
          style={{
            color: greetingColor,
            textShadow: `5px 7px 12px ${greetingColor}`,
          }}
        >
          {t('greeting')}
        </h1>
      </div>
      <ReactToPrint
        content={() => componentRef.current}
        bodyClass='text-6xl'
        trigger={() => (
          <Button
            icon={PrimeIcons.SAVE}
            label={t('common:print')}
            className='text-xl p-3 w-full flex justify-self-center'
            onClick={updateContent}
          />
        )}
      />
      <div
        style={{
          position: 'absolute',
          top: '10rem',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <HuePicker
          onChange={(e) => {
            setTitleColor(
              `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb?.a})`
            );
            setGreetingColor(`rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, 90%)`);
          }}
          width='15rem'
        />
      </div>
    </>
  );
};
