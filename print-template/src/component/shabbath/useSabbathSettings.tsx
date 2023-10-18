import { InputMask } from 'primereact/inputmask';
import { ISabbath } from '../../model/sabbath/sabbath.model';
import { ControllerProps } from 'react-hook-form';

export const useSabbathSettings = () => {
  const inputSettings: ControllerProps<ISabbath, keyof ISabbath>[] = [
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
      name: 'arvitaFridayNight',
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
