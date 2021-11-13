import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://floating-taiga-26098.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure you want to cancel ?');
        if (proceed) {
            const url = `https://floating-taiga-26098.herokuapp.com/myorders/${id}`;
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

    const handleUpdateOrderStatus = id => {
        const updatedOrders = orders.filter(order => order._id === id);
        updatedOrders[0].status = "Shipped";
        const updatedOrder = updatedOrders[0];

        const url = `https://floating-taiga-26098.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Order status updated to shipped!');
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            <h1 className="display-5 mt-5">Total Bookings on website: {orders.length}</h1>
            <hr className="w-50 mx-auto mb-5" />

            <div className="my-5 container">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th className="fs-5">Car Name</th>
                            <th className="fs-5">Price</th>
                            <th className="fs-5">Ordered By</th>
                            <th className="fs-5">Order Status</th>
                            <th className="fs-5">Update Order Status</th>
                            <th className="fs-5">Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => < tr >
                                <td>{order.itemDetails.name}</td>
                                <td>{order.itemDetails.price}</td>
                                <td>{order.email}</td>
                                <td><strong>{order.status}</strong></td>
                                <td><button onClick={() => handleUpdateOrderStatus(order._id)} className="btn btn-success">Update</button></td>
                                <td><button onClick={() => handleCancelOrder(order._id)} className="btn btn-danger text-dark  fw-bold ">Cancel</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;