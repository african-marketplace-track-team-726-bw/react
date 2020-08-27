import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ItemEntry from './components/ItemEntry';
import SignIn from './components/SignIn';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import DisplayAllItems from './components/DisplayAllItems';
import UserItems from './components/UserItems';
import TempNavBar from './components/TempNavBar';

function App() {
	return (
		<div className='App'>
			<TempNavBar />
			{/* <h1 style={{ margin: '0 auto' }}>African Marketplace</h1> */}
			<Switch>
				<Route exact path='/' component={SignIn} />
				<Route path='/registration' component={Registration} />
				<PrivateRoute path='/home' component={DisplayAllItems} />
				<PrivateRoute path='/user' component={UserItems} />
				<PrivateRoute path='/sell' component={ItemEntry} />
			</Switch>
		</div>
	);
}

export default App;
