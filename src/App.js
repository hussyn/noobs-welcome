import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Home';
import { LoginPage } from './components/Login/LoginPage';
import LogoutPage from './components/Login/LogoutPage';
import { RegisterPage } from './components/Register/RegisterPage';
import { Nav } from './components/Nav';

import {
    withAuthentication,
    withAuthorization,
    conditions
} from './components/Auth';

function App() {
    return (
        <Router>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route
                path="/logout"
                component={withAuthorization(conditions.userLoggedIn)(
                    LogoutPage
                )}
            />
        </Router>
    );
}

export default App;
