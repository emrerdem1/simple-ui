import React from 'react';
import styled from '@emotion/styled';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #2c3e50;
  padding: 0 12px;
`;

const NavigationView: React.FC = () => {
  return <NavContainer></NavContainer>;
};

export default NavigationView;
