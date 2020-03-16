import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PExchange from './components/PExchange';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/" exact component={Home} />
				{/* <Route path="/products" component={PExchange} /> */}
				<Route path="/pExchange" component={PExchange} />
				<Route path="/wallet" component={SignIn} />
				<Route path="/aboutUs" component={AboutUs} />
				<Route path="/signIn" component={SignIn} />
				<Route path="/signUp" render={SignUp} />
			</React.Fragment>
		);
	}
}

export default App;
