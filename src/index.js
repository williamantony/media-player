import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const ReduxStore = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
