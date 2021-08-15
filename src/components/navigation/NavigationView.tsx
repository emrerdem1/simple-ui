import React from 'react';
import styled from '@emotion/styled';
import TitleView from './TitleView';
import PreferencesView from './PreferencesView';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #2c3e50;
`;

const NavigationView: React.FC = () => {
  return (
    <NavContainer>
      <TitleView />
      <PreferencesView />
    </NavContainer>
  );
};

export default NavigationView;
