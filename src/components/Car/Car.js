import React from 'react';
import { useHistory } from 'react-router';

const Car = ({ car }) => {
    const { _id, img, name, price, madeIn } = car;

    const history = useHistory();

    const handleBuyNow = id => {
        const url = `/cars/placeorder/${id}`;
        history.push(url);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <img className="rounded-3" src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <h6>{madeIn}</h6>
            <button onClick={() => handleBuyNow(_id)} className="btn w-75 btn-danger">Buy Now</button>

        </div>
    );
};

export default Car;