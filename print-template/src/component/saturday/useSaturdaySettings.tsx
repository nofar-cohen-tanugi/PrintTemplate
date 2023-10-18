import { InputMask } from 'primereact/inputmask';
import { ControllerProps } from 'react-hook-form';
import { ISaturday } from '../../model/saturday/ISaturday.model';

export const useSaturdaySettings = () => {
  const inputSettings: ControllerProps<ISaturday, keyof ISaturday>[] = [
    {
      name: 'manchaFridayNight',
      render: (field) => (
        <InputMask {...field} mask='00:00' className='w-5rem' />
      ),
    },
    {
      name: 'saturdayEntry',
      render: (field) => (
        <InputMask {...field} mask='00:00' className='w-5rem' />
      ),
    },
    {
      name: 'shacharit',
      render: (field) => (
        <InputMask {...field} mask='00:00' className='w-5rem' />
      ),
    },
    {
      name: 'musaf',
      render: (field) => (
        <InputMask {...field} mask='00:00' className='w-5rem' />
      ),
    },
    {
      name: 'manchaSaturdayNight',
      render: (field) => (
        <InputMask {...field} mask='00:00' className='w-5rem' />
      ),
    },
    {
      name: 'arvitSaturdayNight',
      render: (field) => (
        <InputMask {...field} mask='00:00' className='w-5rem' />
      ),
    },
  ];

  return { inputSettings };
};
