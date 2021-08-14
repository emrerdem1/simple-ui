import React from 'react';
import styled from '@emotion/styled';
import { HomeOutlined } from '@ant-design/icons';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  color: #ecf0f1;

  .anticon {
    font-size: 1.6em;
  }
`;

const NavTitle = styled.span`
  font-size: 1.1em;
`;

const TitleView: React.FC = () => {
  return (
    <TitleContainer>
      <HomeOutlined />
      <NavTitle>The Simple UI</NavTitle>
    </TitleContainer>
  );
};

export default TitleView;
