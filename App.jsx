import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './app/reducers/index';
import Application from './app/index';


const store = createStore(mainReducer);

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

export default App;
