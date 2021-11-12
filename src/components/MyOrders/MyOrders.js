import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure you want to cancel ?');
        if (proceed) {
            const url = `http://localhost:5000/myorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order canceled!');
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <div className="my-5">
            <h1 className="display-5 mt-5">Number of Orders: {orders.length}</h1>
            <hr className="w-50 mx-auto mb-5" />

            <div>
                <Table responsive="sm w-75 mx-auto">
                    <thead>
                        <tr>
                            <th className="fs-4">Car Name</th>
                            <th className="fs-4">Price</th>
                            <th className="fs-4">Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => < tr >
                                <td className="fw-bold d-flex align-items-center">
                                    <div className="mx-2">
                                        <img className="border border-2 border-dark" width="100px" src={order.itemDetails.img} alt="" />
                                    </div>
                                    <div>
                                        {order.itemDetails.name}
                                    </div>
                                </td>
                                <td className="fw-bold fs-5">{order.itemDetails.price}</td>
                                <td><button onClick={() => handleCancelOrder(order._id)} className="btn btn-lg btn-danger text-dark  fw-bold ">Cancel</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;