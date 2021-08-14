import './SimpleUI.scss';
import styled from '@emotion/styled';
import ContentView from './components/main-content';
import FooterView from './components/FooterView';
import NavigationView from './components/navigation/NavigationView';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  > div {
    width: 100%;
  }
`;

const SimpleUI: React.FC = () => {
  return (
    <LayoutContainer>
      <NavigationView />
      <ContentView />
      <FooterView />
    </LayoutContainer>
  );
};

export default SimpleUI;
