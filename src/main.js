// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import {LoggerToken} from 'fusion-tokens';
import Example, {ExampleToken} from './plugins/example.js';
import Foo from './plugins/foo.js';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(LoggerToken, console); // register a logger
  app.register(ExampleToken, Example);
  app.register(Foo);
  app.register(Styletron);
  app.register(Router);

  return app;
};
