import React from 'react';
import { useHistory } from 'react-router';
import { faMapMarkerAlt, faDollarSign, faRoad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Car = ({ car }) => {
    const { _id, img, name, price, madeIn, topSpeed, fuel, mode, seats, released, color } = car;

    const history = useHistory();

    const handleBuyNow = id => {
        const url = `/cars/placeorder/${id}`;
        history.push(url);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12  ">
            <div className="border p-1 ">
                <img className=" w-100" src={img} alt="" />
                <div className="my-2">
                    <h4 className="text-start">{name}</h4>
                    <hr className="w-75" />
                    <div className="d-flex justify-content-between">
                        <h6><FontAwesomeIcon icon={faDollarSign} /> <span className="text-primary">{price}</span> </h6>
                        <h6 ><FontAwesomeIcon icon={faRoad} /> <span className="text-primary">{topSpeed}</span></h6>
                    </div>
                    <h6 className="text-start"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {madeIn}</small></h6>

                    <p className="text-start"><small>{released} • {mode} • {color} • {fuel} • {seats}</small></p>

                    <button onClick={() => handleBuyNow(_id)} className="btn w-100 btn-primary btn-block">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Car;