import React from 'react';

const Car = ({ car }) => {
    const { img, name, price, madeIn } = car;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <img className="rounded-3" src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <h6>{madeIn}</h6>
        </div>
    );
};

export default Car;