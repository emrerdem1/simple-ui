import React from 'react';
import styled from '@emotion/styled';
import LanguageSelectionView from './LanguageSelectionView';
import LoginView from './LoginView';
import LinksView from './LinksView';
import { Divider } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

interface MobileCollapseProps {
  isVisibleOnMobile: boolean;
}

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  padding-right: 1.4em;
`;

const PreferencesContainer = styled.div<MobileCollapseProps>`
  display: flex;
  align-items: center;
  column-gap: 1.5em;

  .ant-divider {
    height: 30%;
    background-color: #ecf0f1;
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => (!props.isVisibleOnMobile ? 'none' : 'flex')};
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    background: #59799a;

    .ant-divider {
      height: unset;
      width: 50%;
      min-width: auto;
    }
  }
`;

const MobileCollapseItem = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.8em;
  padding: 0.2em 0.4em;
  margin-right: 0.5em;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const PreferencesView: React.FC = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const dividerItem = (
    <Divider type={isMobileMenuShown ? 'horizontal' : 'vertical'} />
  );

  return (
    <Container>
      <MobileCollapseItem
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        {isMobileMenuShown ? <CloseOutlined /> : <MenuOutlined />}
      </MobileCollapseItem>
      <PreferencesContainer isVisibleOnMobile={isMobileMenuShown}>
        <LinksView />
        {dividerItem}
        <LanguageSelectionView />
        {dividerItem}
        <LoginView />
      </PreferencesContainer>
    </Container>
  );
};

export default PreferencesView;
