import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import Footer from '../commons/Footer';

const Routes = () => {
	return (
		<Router>
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Footer />
		</Router>
	);
};

export default Routes;
