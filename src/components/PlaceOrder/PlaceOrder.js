import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCars from '../../hooks/useCars';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { cars } = useCars();

    const singleCar = cars.filter(car => car._id === id);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { name, email, address, city, phone } = data;
        let newOrder = { name, email, address, city, phone };
        newOrder.itemDetails = singleCar[0];
        fetch('http://localhost:5000/placeorder', {
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
            <div className="my-5 ">
                {singleCar.map(car => <div key={car._id}><img className="rounded-3" src={car.img} alt="" />
                    <h3>{car.name}</h3>
                    <h4>{car.price}</h4>
                    <h6>{car.madeIn}</h6>
                    <button className="btn w-75 btn-danger">Buy Now</button></div>)}

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