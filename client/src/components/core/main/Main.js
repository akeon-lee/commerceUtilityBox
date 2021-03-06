/**
 * @overview: This componenet is the main component that houses all components that belong in the <main/> element.
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import Home from '../../public/home/Home';
import Toolbox from '../../toolbox/Toolbox';
import LoginForm from '../../auth/user/login/LoginForm';
import RegisterForm from '../../auth/user/register/RegisterForm';
import MyAccount from '../../auth/user/MyAccount';
import ProtectedRoute from '../../auth/ProtectedRoute';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <ProtectedRoute path='/toolbox' component={Toolbox} />
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                    <ProtectedRoute path='/myaccount' component={MyAccount} />
                </Switch>
            </main>
        )
    }
}
