import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';

import 'semantic-ui-css/semantic.min.css';
import './scss/index.scss';

// TODO: Fix HMR

// const render = (Component) => {
//   console.log('[index] render');
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('ConversationBoard'),
//   );
// };

// render(App);

// // Webpack Hot Module Replacement API
// if ((module as any).hot) {
//   (module as any).hot.accept('./App', () => {
//     console.log('[index] hot render');
//     render(App);
//   });
// }

ReactDOM.render(
  <App />,
  document.getElementById('ConversationBoard'),
);
