import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {

        const { name, img, ordered, comment, ratings } = data;

        const newReview = { name, img, ordered, comment, ratings };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Review added successfully!');
                    reset();
                }
            })
    }
    return (
        <div>
            <h1 className="display-1 my-5">Add a review</h1>
            <div className="w-75 mx-auto my-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" placeholder="User Name"  {...register("name", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Image URL"  {...register("img", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Ordered Car name "  {...register("ordered", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Ratings(0-5)"  {...register("ratings", { required: true })} />
                    <br />
                    <textarea className="form-control" placeholder="Comment"  {...register("comment", { required: true })} />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn-lg btn-danger p-2 w-25" value="Add Review" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewReview;