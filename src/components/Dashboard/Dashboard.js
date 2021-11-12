import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="d-flex ">
            <div className="side-bar ms-0 ">
                {
                    user.displayName && <ul className="my-5">
                        <li className="my-3"> <NavLink className="navLink" to="/addnewcar">Add a New Car</NavLink></li>
                        <li className="my-3"><NavLink className="navLink" to="/myorders">My Orders</NavLink></li>
                        <li className="my-3"><NavLink className="navLink" to="/manageallorders">Manage All Orders</NavLink>
                        </li>
                        <li className="my-3"><NavLink className="navLink" to="/manageallproducts">Manage All Products</NavLink>
                        </li>
                        <li className="my-3"><NavLink className="navLink" to="/addReview">Review</NavLink>
                        </li>
                        <li className="my-3"><NavLink className="navLink" to="/makepayment">Make Payment</NavLink>
                        </li>
                        <li className="my-3"><button className="side-bar-logout-btn" onClick={logOut}>Log Out</button></li>
                    </ul>
                }
            </div>

            <div>
                <h1>This is dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;