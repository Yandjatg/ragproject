import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { store } from './store/index';
import RagApp from './routes/index';
//import configureStore from './store';
import SentryBoundary from './utils/SentryBoundary';

//const store = configureStore({});
const App = () => (
  <SentryBoundary>
    <Provider store={store}>
      <RagApp />
    </Provider>
  </SentryBoundary>
);

export default hot(App);
