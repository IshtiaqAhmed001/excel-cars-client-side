import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useRegisteredUsers from '../../hooks/useRegisteredUsers';
import './Dashboard.css';


const Dashboard = () => {
    const { user, logOut } = useAuth();
    const { registeredUsers } = useRegisteredUsers();

    // filtering logged in user from all users 
    const registeredUser = registeredUsers.filter(regUser => regUser.email === user.email);
    const loggedInUser = registeredUser[0];

    return (
        <div className="d-flex">
            <div className="side-bar ms-0 w-25 ">
                {
                    loggedInUser?.role === 'admin' ? <ul className="my-5">
                        <li className="my-3"><NavLink className="sidebar-links" to="/manageallproducts">Manage All Products</NavLink>
                        </li>
                        <li className="my-4"> <NavLink className="sidebar-links" to="/addnewcar">Add a New Car</NavLink></li>
                        <li className="my-4"><NavLink className="sidebar-links" to="/manageallorders">Manage All Orders</NavLink>
                        </li>
                        <li className="my-4"><NavLink className="sidebar-links" to="/makeadmin">Make Admin</NavLink>
                        </li>
                        <li className="my-4"><button className="side-bar-logout-btn" onClick={logOut}>Log Out</button></li>
                    </ul> : <ul>
                        <li className="my-4"><NavLink className="sidebar-links" to="/myorders">My Orders</NavLink></li>
                        <li className="my-4"><NavLink className="sidebar-links" to="/addnewreview">Add Review</NavLink>
                        </li>
                        <li className="my-4"><NavLink className="sidebar-links" to="/makepayment">Make Payment</NavLink>
                        </li>
                        <li className="my-3"><button className="side-bar-logout-btn" onClick={logOut}>Log Out</button></li>
                    </ul>
                }

            </div>

            <div className="w-75">
                <img className="w-100" src="https://i.ibb.co/hmpFbcZ/dashboard-Bg.jpg" alt="" />
            </div>
        </div >
    );
};

export default Dashboard;