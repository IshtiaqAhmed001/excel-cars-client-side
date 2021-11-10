import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div class="text-center">
            <Spinner className="my-5" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}></Redirect>}
        >

        </Route>
    );
};
export default PrivateRoute;