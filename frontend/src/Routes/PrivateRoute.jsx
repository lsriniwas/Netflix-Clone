import React from 'react';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
    const token = localStorage.getItem('token')
    return (
                    
            token ? <Route {...rest} render={()=><Component/>} />  : <Redirect to = "/login" />
    
    );
}

export default PrivateRoute;