import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useNavigate } from 'react-router';
import { useCallback, useEffect, useState } from 'react';
import { getTimes } from '../../utils/api/timesApi';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { ICity } from '../../model/saturday/ICity.model';
import { cityOptions } from './cityOptions';
import moment from 'moment';

const emptySaturdayValues: ISaturday = {
  parasha: '',
  shirHaShirim: '',
  saturdayEntry: '',
  sunset: '',
  manchaFridayNight: '',
  shacharit: '',
  manchaSaturdayNight: '',
  arvitSaturdayNight: '',
  saturdayEnd: '',
};

export const Saturday = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ISaturday>({ defaultValues: emptySaturdayValues });

  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });
  const navigate = useNavigate();

  const [selectedCityCode, setSelectedCityCode] = useState<ICity>();
  const [saturdayTimes, setSaturdayTimes] = useState<{
    entry: string;
    end: string;
  }>();

  const { inputSettings } = useSaturdaySettings(saturdayTimes);

  const updateTimes = useCallback(async () => {
    if (!selectedCityCode?.code) return;

    const res = await getTimes(selectedCityCode.code);
    console.log(res?.items);

    setValue('parasha', res?.items?.[1]?.hebrew);
    const entry = moment(res?.items?.[0]?.date).format('HH:mm');
    const end = moment(res?.items?.[2]?.date).format('HH:mm');
    setSaturdayTimes({ entry, end });
  }, [selectedCityCode?.code, setValue]);

  useEffect(() => {
    if (selectedCityCode) {
      updateTimes();
    }
  }, [selectedCityCode, updateTimes]);

  const onSubmit: SubmitHandler<ISaturday> = (data) => {
    navigate('/saturday-style');
    sessionStorage.setItem('saturdayStyle', JSON.stringify(data));
  };

  const getFormErrorMessage = (name: keyof ISaturday) => {
    return errors[name] ? (
      <small className='p-error text-2xl'>{errors[name]?.message}</small>
    ) : (
      <small className='p-error text-2xl'>&nbsp;</small>
    );
  };

  return (
    <>
      <div className='w-full flex justify-content-center'>
        <h1>{t('saturdayTitle')}</h1>
      </div>
      <Dropdown
        value={selectedCityCode}
        onChange={(e: DropdownChangeEvent) => setSelectedCityCode(e.value)}
        options={cityOptions}
        optionLabel={'name'}
        itemTemplate={(op) => {
          return op ? (
            <p className='text-2xl m-0'>{t(`city.${op.name}`)}</p>
          ) : undefined;
        }}
        valueTemplate={(op, props) => {
          return op ? (
            <p className='text-2xl m-0'>{t(`city.${op.name}`)}</p>
          ) : (
            <p className='text-2xl m-0'>{props.placeholder}</p>
          );
        }}
        placeholder={`${t('ad.selectACity')}...`}
        filter
        className='w-full'
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-column justify-content-between p-4'
      >
        <div>
          {inputSettings.map((item, index) => (
            <div className='flex flex-column my-3' key={index}>
              <div className='flex justify-content-between align-items-center'>
                <label className='text-3xl mx-2'>{t(item.name)}</label>
                <Controller control={control} {...item} />
              </div>
              <div className='flex justify-content-end mx-2'>
                {getFormErrorMessage(item.name)}
              </div>
            </div>
          ))}
        </div>
        <Button
          icon={PrimeIcons.SAVE}
          label={t('common:save')}
          className='text-xl'
        />
      </form>
    </>
  );
};
