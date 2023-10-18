import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';

export const Menu = () => {
  const items: MenuItem[] = [
    {
      label: 'Saturday',
      url: '/saturday',
      className: 'flex justify-content-center text-2xl my-2',
    },
    {
      label: 'Holiday',
      url: '/holiday',
      className: 'flex justify-content-center text-2xl my-2',
    },
    {
      label: 'Ad',
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
