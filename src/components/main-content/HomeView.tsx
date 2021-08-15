import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeView: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('homepage.title')}</div>;
};

export default HomeView;
