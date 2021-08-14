import './SimpleUI.scss';
import ContentView from './components/ContentView';
import FooterView from './components/FooterView';
import NavigationView from './components/NavigationView';

const SimpleUI = () => {
  return (
    <>
      <NavigationView />
      <ContentView />
      <FooterView />
    </>
  );
};

export default SimpleUI;
