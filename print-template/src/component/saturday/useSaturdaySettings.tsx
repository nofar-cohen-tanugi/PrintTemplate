import { InputMask } from 'primereact/inputmask';
import { ControllerProps } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';

export const useSaturdaySettings = () => {
  const { t } = useTranslation('common', { lng: 'he' });

  const inputSettings: ControllerProps<ISaturday, keyof ISaturday>[] = [
    {
      name: 'parasha',
      render: ({ field }) => <InputText {...field} className='w-12rem' />,
      rules: { required: t('requiredField') },
    },
    {
      name: 'manchaFridayNight',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='w-5rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'saturdayEntry',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='w-5rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'shacharit',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='w-5rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
    {
      name: 'musaf',
      render: ({ field }) => (
        <InputMask
          {...field}
          mask='99:99'
          className='w-5rem'
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
          className='w-5rem'
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
          className='w-5rem'
          placeholder='00:00'
        />
      ),
      rules: { required: t('requiredField') },
    },
  ];

  return { inputSettings };
};
