import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Pages } from './common/constants';
import AboutView from './main-content/AboutView';
import ContactView from './main-content/ContactView';
import HomeView from './main-content/HomeView';

const PageRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={Pages.ABOUT} component={AboutView} />
      <Route path={Pages.CONTACT} component={ContactView} />
      <Route exact path={Pages.HOME} component={HomeView} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default PageRoutes;
