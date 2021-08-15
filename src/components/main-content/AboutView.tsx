import React from 'react';
import { useTranslation } from 'react-i18next';
import { BasicContainer } from './HomeView';
import styled from '@emotion/styled';

const SIMPLICITIY_IMAGE =
  'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80';

const AboutContainer = styled(BasicContainer)`
  img {
    width: 100%;
    max-width: 900px;
  }
`;

const AboutView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <h2>{t('pagesContent.about.mainTitle')}</h2>
      <p>{t('pagesContent.about.mainDescription')}</p>
      <img src={SIMPLICITIY_IMAGE} alt="simplicity image" />
    </AboutContainer>
  );
};

export default AboutView;
