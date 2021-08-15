import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageRoutes } from './common/constants';
import AboutView from './main-content/AboutView';
import ContactView from './main-content/ContactView';
import HomeView from './main-content/HomeView';

const Pages: React.FC = () => {
  return (
    <Switch>
      <Route path={PageRoutes.ABOUT} component={AboutView} />
      <Route path={PageRoutes.CONTACT} component={ContactView} />
      <Route exact path={PageRoutes.HOME} component={HomeView} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Pages;
