import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import './scss/index.scss';

// TODO: Implement hot module replacement

const rootElement = document.querySelector('#ConversationBoard');

ReactDOM.render(
  <App />,
  rootElement,
);
