// src/plugins/foo.js
import {createPlugin, createToken} from 'fusion-core';
import {ExampleToken} from './example.js';

export default createPlugin({
  deps: {example: ExampleToken},
  provides({example}) {
    example.sayHello();
  },
});