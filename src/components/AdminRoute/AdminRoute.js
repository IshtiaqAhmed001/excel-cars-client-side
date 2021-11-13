import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useRegisteredUsers from '../../hooks/useRegisteredUsers';

const AdminRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    const { registeredUsers, isLoading } = useRegisteredUsers();
    // filtering logged in user from all users 
    const registeredUser = registeredUsers.filter(regUser => regUser.email === user.email);
    const loggedInUser = registeredUser[0];

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
                ({ location }) => loggedInUser?.email && loggedInUser.role === 'admin' ? children : <Redirect
                    to={{
                        pathname: "/dashboard",
                        state: { from: location }
                    }}></Redirect>}
        >

        </Route>
    );
};
export default AdminRoute;