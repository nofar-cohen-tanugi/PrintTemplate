import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ISabbath } from '../../model/sabbath/sabbath.model';
import { useSabbathSettings } from './useSabbathSettings';

export const Sabbath = () => {
  const { handleSubmit, control } = useForm<ISabbath>();
  const onSubmit: SubmitHandler<ISabbath> = (data) => console.log(data);

  const { inputSettings } = useSabbathSettings();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-column p-7'>
        {inputSettings.map((item) => (
          <div className='flex align-items-center my-2'>
            <label className='mx-2'>{item.name}</label>
            <Controller control={control} {...item} />
          </div>
        ))}
      </form>
    </>
  );
};
