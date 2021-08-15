import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('pagesContent.about.mainTitle')}</h2>
      <p>{t('pagesContent.about.mainDescription')}</p>
      <h2>{t('pagesContent.about.subtitle')}</h2>
      <p>{t('pagesContent.about.description')}</p>
    </div>
  );
};

export default AboutView;
