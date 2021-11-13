import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCars from '../../hooks/useCars';
import { faMapMarkerAlt, faDollarSign, faRoad } from '@fortawesome/free-solid-svg-icons';
const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { cars } = useCars();

    const singleCar = cars.filter(car => car._id === id);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { name, email, address, city, phone } = data;
        let newOrder = { status: 'processing', name, email, address, city, phone };
        newOrder.itemDetails = singleCar[0];
        fetch('https://floating-taiga-26098.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Placed Successfully!');
                    reset();
                }
            })

        console.log(data)
    };
    return (
        <div>
            <div className="mb-5">
                {singleCar.map(car => <div key={car._id}><div>
                    <h1 className="text-center display-1 bg-dark text-white fw-bold">{car.name}</h1>
                    <img className="w-100" src={car.coverImg} alt="" />
                    <div className="text-start mx-2 my-2">
                        <h3 className="text-start"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {car.madeIn}</small></h3>
                        <h3><FontAwesomeIcon icon={faDollarSign} /><span > {car.price}</span> </h3>
                        <h3 ><FontAwesomeIcon icon={faRoad} /> <span >{car.topSpeed}</span></h3>
                        <h5 className="text-start"><small>{car.released} • {car.mode} • {car.color} • {car.fuel} • {car.seats}</small></h5>
                    </div>
                </div></div>)}

            </div>
            <div className="my-1">
                <h1>Please proceed to confirm order</h1>

                <form className="my-5 w-75 mx-auto border border-1 p-5 border-danger" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" defaultValue={user.displayName} {...register("name")} />
                    <br />

                    <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className="form-control" placeholder="Address" defaultValue="" {...register("address")} />
                    <br />
                    <input className="form-control" placeholder="City" defaultValue="" {...register("city")} />
                    <br />
                    <input className="form-control" placeholder="Phone" defaultValue="" {...register("phone")} />
                    <br />
                    <input className="btn btn-lg btn-danger" value="Click to Order" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default PlaceOrder;