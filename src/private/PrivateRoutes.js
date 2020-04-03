import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/auth.service';

const PrivateRoute = ({component: Component, ...rest}) => { 
    // console.log('is login', isLogin())
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />

    );
};
export default PrivateRoute