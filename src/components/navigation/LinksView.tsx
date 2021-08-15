import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const LinksContainer = styled.div`
  display: flex;
  column-gap: 1em;

  a {
    position: relative;
    color: #ecf0f1;

    &.active::after {
      content: '';
      position: absolute;
      bottom: -0.4em;
      left: 0px;
      height: 1px;
      width: 100%;
      background-color: #ecf0f1;
    }
  }

  @media only screen and (max-width: 768px) {
    color: black;
    flex-direction: column;
    row-gap: 1em;
    text-align: center;
    margin-bottom: 1em;
  }
`;

const LinksView: React.FC = () => {
  return (
    <LinksContainer>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </LinksContainer>
  );
};

export default LinksView;