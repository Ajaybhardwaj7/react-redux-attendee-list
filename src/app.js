import {Provider} from 'react-redux';
import  {AppContainer , store} from './components/AppContainer/appContainer';
import React from 'react';
import {render} from 'react-dom';

//Initialising the application.

render(
	<Provider store = {store}>
		<AppContainer />
	</Provider> , document.getElementById('main')
)