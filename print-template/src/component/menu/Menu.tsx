import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';
import { useTranslation } from 'react-i18next';

export const Menu = () => {
  const { t } = useTranslation('menu');

  const items: MenuItem[] = [
    {
      label: t('saturday'),
      url: '/saturday',
      className: 'flex justify-content-center text-2xl my-2',
    },
    {
      label: t('holiday'),
      url: '/holiday',
      className: 'flex justify-content-center text-2xl my-2',
    },
    {
      label: t('ad'),
      url: '/ad',
      className: 'flex justify-content-center text-2xl my-2',
    },
  ];

  return (
    <div className='card h-screen flex justify-content-center align-items-center'>
      <PanelMenu model={items} className='w-20rem' />
    </div>
  );
};
