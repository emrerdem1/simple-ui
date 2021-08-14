import React from 'react';
import styled from '@emotion/styled';
import TitleView from './TitleView';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #2c3e50;
  padding: 0 1.4em;
`;

const NavigationView: React.FC = () => {
  return (
    <NavContainer>
      <TitleView />
    </NavContainer>
  );
};

export default NavigationView;
