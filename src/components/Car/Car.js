import React from 'react';
import { useHistory } from 'react-router';
import { faMapMarkerAlt, faDollarSign, faRoad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Car = ({ car }) => {
    const { _id, img, name, price, madeIn, milage, fuel, mode, seats, released, color } = car;

    const history = useHistory();

    const handleBuyNow = id => {
        const url = `/cars/placeorder/${id}`;
        history.push(url);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 border border-2 border-danger  ">
            <img className="rounded-3 w-100" src={img} alt="" />
            <div className="my-2">
                <h4 className="text-start">{name}</h4>
                <div className="d-flex justify-content-between">
                    <h6><FontAwesomeIcon icon={faDollarSign} /> <span className="text-primary">{price}</span> </h6>
                    <h6 ><FontAwesomeIcon icon={faRoad} /> <span className="text-primary">{milage}</span></h6>
                </div>
                <h6 className="text-start"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {madeIn}</small></h6>
                <p className="text-start"><small>{released} • {mode} • {color} • {fuel} • {seats}</small></p>
                <button onClick={() => handleBuyNow(_id)} className="btn w-75 btn-danger">Buy Now</button>
            </div>

        </div>
    );
};

export default Car;