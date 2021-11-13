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
        <div>
            <div >
                <img className="w-100" src="https://i.ibb.co/HKHWgss/car-Banner.jpg" alt="" />
            </div>
            <div className="my-5 container">
                <h1 className="text-start text-primary fs-5 mt-5 fw-bold">Our current stocks</h1>
                <hr className="w-25 mb-5 text-primary" />
                <div className="row g-4">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}></Car>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cars;