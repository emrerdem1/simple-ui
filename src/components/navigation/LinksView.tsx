import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Breakpoints } from '../common/constants';
import { useTranslation } from 'react-i18next';

const LinksContainer = styled.div`
  display: flex;
  column-gap: 1em;

  a {
    position: relative;
    color: #ecf0f1;

    &.active::after {
      content: '';
      position: absolute;
      bottom: -0.6em;
      left: 0px;
      height: 1px;
      width: 100%;
      background-color: #ecf0f1;
    }
  }

  @media only screen and (max-width: ${Breakpoints.TABLET}px) {
    color: black;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1em;
    font-size: 1.2em;
    row-gap: 1.6em;
  }
`;

const LinksView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LinksContainer>
      <NavLink to="/" exact>
        {t('navigation.pages.home')}
      </NavLink>
      <NavLink to="/about">{t('navigation.pages.about')}</NavLink>
      <NavLink to="/contact">{t('navigation.pages.contact')}</NavLink>
    </LinksContainer>
  );
};

export default LinksView;
