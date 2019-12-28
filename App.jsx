import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './app/reducers/index';
import { Navigation } from './app/index';

const store = createStore(mainReducer);

const App = () => (
	<Provider store={store}>
		<Navigation />
	</Provider>
);

export default App;
