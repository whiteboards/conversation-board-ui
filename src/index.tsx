import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import './scss/index.scss';

// TODO: Implement hot module replacement

const rootEl = document.getElementById('ConversationBoard');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
);

// Hot Module Replacement API
if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      rootEl,
    );
  });
}
