import './SimpleUI.scss';
import ContentView from './components/ContentView';
import FooterView from './components/FooterView';
import NavigationView from './components/NavigationView';

const SimpleUI: React.FC = () => {
  return (
    <>
      <NavigationView />
      <ContentView />
      <FooterView />
    </>
  );
};

export default SimpleUI;
