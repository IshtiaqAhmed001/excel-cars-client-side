import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/myorders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);

    return (
        <div className="my-5">
            <h1>My orders: {orders.length}</h1>
        </div>
    );
};

export default MyOrders;