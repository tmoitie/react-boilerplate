import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

if (process.env.NODE_ENV === 'development') {
  /* eslint "global-require": 0 */
  require('./devTools');
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
