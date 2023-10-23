import { useTranslation } from 'react-i18next';

export const useCityOptions = () => {
  const { t } = useTranslation('saturday');
  const cities = [
    { name: 'kokav yair', nameTrans: t('cities.kokav yair'), code: '4486200' },
  ];

  return { cityOptions: cities };
};
