import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, NavLink } from 'react-router-dom';

const PreferencesContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  height: 100%;
`;

const PreferencesView: React.FC = () => {
  return (
    <PreferencesContainer>
      <BrowserRouter>
        <NavLink to="/" className="nav-inactive nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-inactive nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-inactive nav-link">
          Contact
        </NavLink>
      </BrowserRouter>
    </PreferencesContainer>
  );
};

export default PreferencesView;
