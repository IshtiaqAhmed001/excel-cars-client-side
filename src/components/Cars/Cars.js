import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useCars from '../../hooks/useCars';
import Car from '../Car/Car';

const Cars = () => {
    const { cars } = useCars();
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center">
            <Spinner className="my-5" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    return (
        <div className="my-5 container">
            <h2 className="fw-bold mt-5">Our current stocks</h2>
            <hr className="w-25 mb-5 mx-auto text-dark " />
            <div className="row g-4">
                {
                    cars.map(car => <Car
                        key={car._id}
                        car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default Cars;