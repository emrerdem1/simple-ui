import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  height: 80px;
  background-color: #2c3e50;
`;

const FooterView: React.FC = () => {
  return <FooterContainer></FooterContainer>;
};

export default FooterView;
