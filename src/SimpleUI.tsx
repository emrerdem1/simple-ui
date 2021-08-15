import './SimpleUI.scss';
import styled from '@emotion/styled';
import FooterView from './components/FooterView';
import NavigationView from './components/navigation/NavigationView';
import PageRoutes from './components/PageRoutes';

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
      <PageRoutes />
      <FooterView />
    </LayoutContainer>
  );
};

export default SimpleUI;
