import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Breakpoints } from '../common/constants';

export const BasicContainer = styled.div`
  width: 80%;
  margin: 5em auto;
`;

export const MainHeader = styled.h2`
  font-size: 1.8em;
  margin-bottom: 1em;
  line-height: 1.6em;

  @media only screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 1.5em;
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: 1.1em;
  line-height: 1.8em;
  margin-bottom: 1.2em;

  @media only screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 1em;
  }
`;

const SubHeader = styled.h4`
  margin: 1.5em 0;
  font-size: 1.4em;
  line-height: 1.6em;

  @media only screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 1.2em;
  }
`;

const HomeView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <BasicContainer>
      <MainHeader>{t('pagesContent.homepage.mainTitle')}</MainHeader>
      <DescriptionParagraph>
        {t('pagesContent.homepage.mainDescription')}
      </DescriptionParagraph>
      <SubHeader>{t('pagesContent.homepage.subtitle')}</SubHeader>
      <DescriptionParagraph>
        {t('pagesContent.homepage.description')}
      </DescriptionParagraph>
    </BasicContainer>
  );
};

export default HomeView;
