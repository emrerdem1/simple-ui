import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, NavLink } from 'react-router-dom';

const PreferencesContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  height: 100%;

  a {
    position: relative;
    color: #ecf0f1;

    &.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0px;
      height: 1px;
      width: 100%;
      background-color: #ecf0f1;
    }
  }
`;

const PreferencesView: React.FC = () => {
  return (
    <PreferencesContainer>
      <BrowserRouter>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </BrowserRouter>
    </PreferencesContainer>
  );
};

export default PreferencesView;
