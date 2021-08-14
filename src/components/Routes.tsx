import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutView from './main-content/AboutView';
import ContactView from './main-content/ContactView';
import HomeView from './main-content/HomeView';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutView} />
      <Route path="/contact" component={ContactView} />
      <Route exact path="/" component={HomeView} />
    </Switch>
  );
};

export default Routes;
