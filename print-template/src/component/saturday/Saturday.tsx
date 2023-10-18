import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

export const Saturday = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISaturday>();
  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });

  const onSubmit: SubmitHandler<ISaturday> = (data) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  };

  const { inputSettings } = useSaturdaySettings();

  const getFormErrorMessage = (name: keyof ISaturday) => {
    return errors[name] ? (
      <small className='p-error'>{errors[name]?.message}</small>
    ) : (
      <small className='p-error'>&nbsp;</small>
    );
  };

  return (
    <>
      <div className='w-full flex justify-content-center'>
        <h2>{t('saturdayTitle')}</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-column justify-content-between p-4 h-screen'
      >
        <div>
          {inputSettings.map((item, index) => (
            <div className='flex flex-column my-3' key={index}>
              <div className='flex justify-content-between align-items-center'>
                <label className='mx-2'>{t(item.name)}</label>
                <Controller control={control} {...item} />
              </div>
              <div className='flex justify-content-end mx-2'>
                {getFormErrorMessage(item.name)}
              </div>
            </div>
          ))}
        </div>
        <Button icon={PrimeIcons.SAVE} label={t('common:save')} />
      </form>
    </>
  );
};
