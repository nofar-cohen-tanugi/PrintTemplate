import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';

export const Menu = () => {
  const items: MenuItem[] = [
    {
      label: 'Sabbath',
      url: '/sabbath',
    },
    {
      label: 'Holiday',
      url: '/holiday',
    },
    {
      label: 'Ad',
      url: '/ad',
    },
  ];

  return (
    <div className='card flex justify-content-center'>
      <PanelMenu model={items} className='w-full md:w-25rem' />
    </div>
  );
};
