import React from 'react';
import { render } from 'react-dom';
import{ createStore }from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import rootReducer from './reducer'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker()