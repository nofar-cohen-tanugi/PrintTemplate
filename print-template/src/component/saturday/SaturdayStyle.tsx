import { ISaturday } from '../../model/saturday/ISaturday.model';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useTranslation } from 'react-i18next';
import { useSaturdaySettings } from './useSaturdaySettings';

export const SaturdayStyle = (props: ISaturday) => {
  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });
  const { inputSettings } = useSaturdaySettings();

  return (
    <>
      <div className='flex flex-column'>
        {inputSettings.map((item) => {
          return (
            <div className='flex'>
              <p>{t(item.name)}</p>
              <p>{props[item.name]}</p>
            </div>
          );
        })}
      </div>
      <Button
        icon={PrimeIcons.SAVE}
        label={t('common:print')}
        onClick={() => window.print()}
      />
    </>
  );
};
