import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('pagesContent.homepage.mainTitle')}</h2>
      <p>{t('pagesContent.homepage.mainDescription')}</p>
      <h2>{t('pagesContent.homepage.subtitle')}</h2>
      <p>{t('pagesContent.homepage.description')}</p>
    </div>
  );
};

export default HomeView;
