import React from 'react';
import useCars from '../../hooks/useCars';
import Car from '../Car/Car';

const Cars = () => {
    const { cars } = useCars();
    return (
        <div className="featured-cars">
            <h2 className="fw-bold mt-5">Our current stocks</h2>
            <hr className="w-25 mb-5 mx-auto text-dark " />
            <div className="row gx-0 gy-2">
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