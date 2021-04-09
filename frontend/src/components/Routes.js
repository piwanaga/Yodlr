/**Routes component */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import RegisterForm from './RegisterForm';
import Admin from './Admin';

const Routes = () => {
    return (
        <Switch>
            <Route path='/register'>
                <RegisterForm />
            </Route>
            <Route path='/admin'>
                <Admin />
            </Route>
            <Route path ='/'>
                <Home />
            </Route>
        </Switch>
    )
};

export default Routes