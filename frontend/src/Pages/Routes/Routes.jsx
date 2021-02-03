import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from '../Home/Home';
import { Login } from '../Login/Login';

function Routes(props) {
    return (
        <Switch>
            <Route path="/login" exact render={()=><Login/>} />
            <Route path="/browse" exact render={()=><Home/>} />
        </Switch>
    );
}

export default Routes;