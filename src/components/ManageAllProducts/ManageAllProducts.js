import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageAllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-taiga-26098.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to cancel ?');
        if (proceed) {
            const url = `https://floating-taiga-26098.herokuapp.com/cars/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted!');
                        window.location.reload();
                    }
                })
        }
    }


    return (
        <div>
            <h1 className="display-5 mt-5 text-primary fw-bold">Cars available: {products.length}</h1>
            <hr className="w-50 mx-auto mb-5" />

            <div className="my-5 container">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th className="fs-5">Car Name</th>
                            <th className="fs-5">Made In</th>
                            <th className="fs-5">Released</th>
                            <th className="fs-5">Price</th>
                            <th className="fs-5">Delete Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => < tr >
                                <td className="fw-bold d-flex align-items-center">
                                    <div className="mx-2">
                                        <img className="border border-2 border-dark" width="100px" src={product.img} alt="" />
                                    </div>
                                    <div>
                                        {product.name}
                                    </div>
                                </td>
                                <td>{product.madeIn}</td>
                                <td>{product.released}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger text-dark  fw-bold ">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllProducts;