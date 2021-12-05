import React from 'react';
import styled from '@emotion/styled';
import LanguageSelectionView from './LanguageSelectionView';
import LoginView from './LoginView';
import LinksView from './LinksView';
import { Divider } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Breakpoints } from 'src/components/common/constants';
import { css, Global } from '@emotion/react';

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
    background-color: rgb(236 236 236 / 76%);
  }

  @media only screen and (max-width: ${Breakpoints.TABLET}px) {
    display: ${(props) => (!props.isVisibleOnMobile ? 'none' : 'flex')};
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    background: #59799a;

    .ant-divider-horizontal {
      height: unset;
      width: 50%;
      min-width: auto;
      margin: 1em 0;
    }
  }
`;

const MobileCollapseItem = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.8em;
  padding: 0.2em 0.4em;
  margin-right: 0.5em;
  cursor: pointer;

  @media only screen and (min-width: ${Breakpoints.TABLET}px) {
    display: none;
  }
`;

const PreferencesView: React.FC = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] =
    React.useState<boolean>(false);

  /*
   * Side menu could be left open while changing the orientation
   * or while testing the responsive look in development stage.
   * Close it if it is left open to avoid styling conflict of dividers.
   * Not the cleanest way, you might think to re-arrange it if it causes further problem.
   */
  React.useEffect(() => {
    const updateCollapseByResize = () => {
      if (window.innerWidth <= Breakpoints.TABLET || !isMobileMenuShown) {
        return;
      }
      setIsMobileMenuShown(false);
    };

    window.addEventListener('resize', updateCollapseByResize);
    updateCollapseByResize();
    return () => window.removeEventListener('resize', updateCollapseByResize);
  }, [isMobileMenuShown]);

  const toggleMobileMenu = () => {
    // I did not set a fixed position for collapse icon element,
    // so I need to force the scroll to the top in order to show sidebar at full height.
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMobileMenuShown(!isMobileMenuShown);
  };

  const dividerItem = (
    <Divider type={isMobileMenuShown ? 'horizontal' : 'vertical'} />
  );

  return (
    <>
      {isMobileMenuShown && (
        // Prevent scrolling when the side menu is opened.
        <Global
          styles={css`
            body {
              overflow: hidden;
              max-height: 100vh;
            }
          `}
        />
      )}
      <Container>
        <MobileCollapseItem onClick={toggleMobileMenu}>
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
    </>
  );
};

export default PreferencesView;
