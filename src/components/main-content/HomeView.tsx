import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

export const BasicContainer = styled.div`
  width: 80%;
  margin: 5em auto;

  h2 {
    font-size: 1.8em;
  }

  p {
    font-size: 1.1em;
    line-height: 1.8em;
  }
`;

const HomeContainer = styled(BasicContainer)`
  h4 {
    margin-top: 2em;
    font-size: 1.4em;
  }
`;

const HomeView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <h2>{t('pagesContent.homepage.mainTitle')}</h2>
      <p>{t('pagesContent.homepage.mainDescription')}</p>
      <h4>{t('pagesContent.homepage.subtitle')}</h4>
      <p>{t('pagesContent.homepage.description')}</p>
    </HomeContainer>
  );
};

export default HomeView;
