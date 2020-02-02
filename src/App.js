import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import manageBand from './reducers/manageBand';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(manageBand);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className='App'>
					<BandsContainer />
				</div>
			</Provider>
		);
	}
}

export default App;
