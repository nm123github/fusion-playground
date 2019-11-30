// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import App from './components/App.js';
import PageNotFound from './components/pageNotFound.js';

const root = (
  <Switch>
    <Route exact path="/" component={App} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
