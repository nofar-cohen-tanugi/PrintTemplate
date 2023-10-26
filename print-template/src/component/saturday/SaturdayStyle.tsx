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
    <div className='w-full flex flex-column align-items-center justify-content-around'>
      <div
        className='saturday-style w-full flex flex-column justify-content-between'
        style={{
          backgroundImage: 'url("../public/images/frame.png")',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
        ref={componentRef}
      >
        <div className='w-full flex flex-column align-items-center'>
          <p className='basad text-basic mt-3 mb-1'>{t('basad')}</p>
          <h1 className='synagogue-title text-xl px-2 my-1'>
            {t('temaniSynagogue')}
          </h1>
          <h1
            className='parasha-title text-5xl my-0'
            style={{
              color: titleColor,
              textShadow: `0px 2px 5px ${titleColor + '20%'}`,
            }}
          >
            {data?.['parasha']}
          </h1>
          <div className='parasha-color-select'>
            <HuePicker
              onChange={(e) => {
                setTitleColor(
                  `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb?.a})`
                );
                setGreetingColor(
                  `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, 90%)`
                );
              }}
              width='15rem'
            />
          </div>
        </div>
        <div className='px-4 times'>
          {settings?.map((item, index) => {
            return (
              <div className='flex my-4 time-wrap' key={index}>
                <p className={'font-bold mx-2 my-0 text-2xl'}>{t(item.name)}</p>
                <p className={'mx-2 my-0 text-2xl'}>{data?.[item.name]}</p>
              </div>
            );
          })}
        </div>
        <h1
          className='greeting mx-auto my-0 font-bold text-5xl pb-4'
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
        bodyClass='print-body'
        trigger={() => (
          <Button
            icon={PrimeIcons.SAVE}
            label={t('common:print')}
            className='text-xl w-full flex justify-self-center'
            onClick={updateContent}
          />
        )}
      />
    </div>
  );
};
