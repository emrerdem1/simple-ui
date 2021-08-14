import React from 'react';
import styled from '@emotion/styled';
import LanguageSelectionView from './LanguageSelectionView';
import LoginView from './LoginView';
import LinksView from './LinksView';
import { Divider } from 'antd';

const PreferencesContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5em;
  height: 100%;

  .ant-divider {
      height: 30%;
      background-color: #ecf0f1;
    }
  }
`;

const PreferencesView: React.FC = () => {
  return (
    <PreferencesContainer>
      <LinksView />
      <Divider type="vertical" />
      <LanguageSelectionView />
      <Divider type="vertical" />
      <LoginView />
    </PreferencesContainer>
  );
};

export default PreferencesView;
