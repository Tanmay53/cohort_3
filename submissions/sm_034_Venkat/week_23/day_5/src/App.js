import React from 'react';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
	return (
		<React.Fragment>
			<Route path="/" exact component={Login} />
			<Route path="/login" component={Login} />
			<Route path="/home" component={Home} />
			<Route path="/register" render={Register} />
			{/* <Home /> */}
		</React.Fragment>
	)
}

export default App;
