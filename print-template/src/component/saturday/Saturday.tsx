import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useTranslation } from 'react-i18next';

export const Saturday = () => {
  const { handleSubmit, control } = useForm<ISaturday>();
  const { t } = useTranslation(['saturday']);

  const onSubmit: SubmitHandler<ISaturday> = (data) => console.log(data);

  const { inputSettings } = useSaturdaySettings();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-column p-7'>
        {inputSettings.map((item) => (
          <div className='flex align-items-center my-2'>
            <label className='mx-2'>{t(item.name)}</label>
            <Controller control={control} {...item} />
          </div>
        ))}
      </form>
    </>
  );
};
