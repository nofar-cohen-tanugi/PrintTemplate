import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';
import { useSaturdaySettings } from './useSaturdaySettings';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useNavigate } from 'react-router';
import { useCallback, useEffect, useState } from 'react';
import { City } from '../../model/saturday/City.model';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useCityOptions } from './hook/useCityOptions';
import { getCoordinatesByCity } from '../../utils/api/timesApi';
import { ICoordinatesResponse } from '../../model/saturday/ICoordinatesResponse.model';

export const Saturday = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISaturday>();
  const { t } = useTranslation(['saturday', 'common'], { lng: 'he' });
  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [coordinatesResult, setCoordinatesResult] =
    useState<ICoordinatesResponse>();
  // const [timesResult, setTimesResult] = useState<ITimesResponse>();

  const { cityOptions } = useCityOptions();

  const updateTimes = useCallback(async () => {
    if (selectedCity) {
      const res = await getCoordinatesByCity(selectedCity);
      setCoordinatesResult(res);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (!selectedCity) {
      return;
    } else updateTimes();
  }, [selectedCity, updateTimes]);

  useEffect(() => {
    if (!coordinatesResult) {
      return;
    } else updateTimes();
  }, [coordinatesResult]);

  const onSubmit: SubmitHandler<ISaturday> = (data) => {
    navigate('/saturday-style');
    sessionStorage.setItem('saturdayStyle', JSON.stringify(data));
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
      <Dropdown
        value={selectedCity}
        onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
        options={cityOptions}
        optionLabel='name'
        placeholder={t('ad.selectACity')}
        emptyMessage={t('ad.noResults')}
        emptyFilterMessage={t('ad.noResults')}
        filter
        className='w-full md:w-14rem'
      />
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
