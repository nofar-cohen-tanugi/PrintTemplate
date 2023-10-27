import { InputMask } from 'primereact/inputmask';
import { ControllerProps } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export const useSaturdaySettings = (
  props: { entry: string; end: string } | undefined
) => {
  const { t } = useTranslation(['common', 'saturday'], { lng: 'he' });

  const saturdayEntryRef = useRef<InputMask>(null);
  const saturdayEndRef = useRef<InputMask>(null);

  const saturdayEntryRefOnce = useRef<boolean>(false);
  const saturdayEndRefOnce = useRef<boolean>(false);

  useEffect(() => {
    if (
      props?.entry &&
      props?.end &&
      saturdayEntryRef?.current &&
      saturdayEndRef?.current
    ) {
      saturdayEntryRef.current.context = props.entry;
      saturdayEndRef.current.context = props.end;

      saturdayEntryRefOnce.current = false;
      saturdayEndRefOnce.current = false;
    }
  }, [props]);

  const inputSettings: ControllerProps<ISaturday, keyof ISaturday>[] = [
    {
      name: 'parasha',
      render: ({ field }) => (
        <InputText
          {...field}
          className='text-2xl w-12rem'
          placeholder={t('saturday:parasha')}
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'shirHaShirim',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='text-2xl w-6rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'sunset',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='text-2xl w-6rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'manchaFridayNight',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='text-2xl w-6rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'saturdayEntry',
      render: ({ field }) => {
        if (props?.entry && !saturdayEntryRefOnce.current) {
          field.onChange(props?.entry);
          saturdayEntryRefOnce.current = true;
        }
        return (
          <InputMask
            {...field}
            mask='99:99'
            className='text-2xl w-6rem'
            placeholder='00:00'
            id='saturdayEntryId'
            ref={saturdayEntryRef}
          />
        );
      },
      rules: { required: t('requiredField') },
    },
    {
      name: 'shacharit',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='text-2xl w-6rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'manchaSaturdayNight',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='text-2xl w-6rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'arvitSaturdayNight',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='text-2xl w-6rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'saturdayEnd',
      render: ({ field }) => {
        if (props?.end && !saturdayEndRefOnce.current) {
          field.onChange(props?.end);
          saturdayEndRefOnce.current = true;
        }
        return (
          <InputMask
            {...field}
            mask='99:99'
            className='text-2xl w-6rem'
            placeholder='00:00'
            id='saturdayEndId'
            ref={saturdayEndRef}
          />
        );
      },
      rules: { required: t('requiredField') },
    },
  ];

  return { inputSettings };
};
