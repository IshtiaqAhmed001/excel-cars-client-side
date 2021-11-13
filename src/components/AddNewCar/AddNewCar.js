import React from 'react';
import { useForm } from "react-hook-form";
const AddNewCar = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {

        const { name, price, img, coverImg, madeIn, milage, fuel, mode, seats, released, color } = data;

        const newCar = { name, price, img, coverImg, madeIn, milage, fuel, mode, seats, released, color };

        fetch('https://floating-taiga-26098.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Car added successfully!');
                    reset();
                }
            })
    }

    return (
        <div>
            <h2 className="display-6 fw-bold mt-5">Add a New Car</h2>
            <div className="w-75 mx-auto my-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" placeholder="Car Name "  {...register("name", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Made-in "  {...register("madeIn", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Price "  {...register("price", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Image URL "  {...register("img", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Cover Img URL "  {...register("coverImg", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Released"  {...register("released", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Color"  {...register("color", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Driving Mode"  {...register("mode", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Fuel Type"  {...register("fuel", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Milage"  {...register("milage", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Seats"  {...register("seats", { required: true })} />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn-lg btn-danger p-2 w-25" value="Add Car" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewCar;