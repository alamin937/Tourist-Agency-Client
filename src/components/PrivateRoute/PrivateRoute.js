import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../UseHooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {loading,user} = UseAuth();
    if(loading) return ('Loading..')
    return (
        <Route
        {...rest}
            render ={({location}) => user.email ? children : <Redirect
            
            to={{
                pathname: "/login",
                state: { from: location }
              }}
            
            
            
            ></Redirect>
        
        
        
        }
        >

        </Route>
    );
};

export default PrivateRoute;