
// src/plugins/example.js
import {createPlugin, createToken} from 'fusion-core';
import {LoggerToken} from 'fusion-tokens';

export const ExampleToken = createToken('ExampleToken');

export default createPlugin({
  deps: {logger: LoggerToken},
  provides({logger}) {
    return {
      sayHello() {
        logger.log('hello world');
      },
    };
  },
});