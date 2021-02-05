import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
    const token = localStorage.getItem('token')
    const {isAuth} = useSelector(state=>state.login)
    console.log(isAuth)
    return (
                    
            token ? <Route {...rest} render={()=><Component/>} />  : <Redirect to = "/login" />
    
    );
}

export default PrivateRoute;