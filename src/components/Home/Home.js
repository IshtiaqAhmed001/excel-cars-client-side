import React from 'react';
import './Home.css';
import Car from '../Car/Car';
import useCars from '../../hooks/useCars';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Carousel } from 'react-bootstrap';
const Home = () => {
    const { cars } = useCars();
    const { reviews } = useReviews();
    return (
        <div>
            <div className="row g-0">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className="text-start w-75 mx-auto">
                        <h1 className="display-4 fw-bold">Find Your Next Car at Excel Cars</h1>
                        <p className="w-75 my-4 text-secondary">Allow us to guide you through the innovative stress
                            free approach in finding your dream car.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="w-100" src="https://i.ibb.co/37d8bN6/topbanner.png" alt="" />
                </div>
            </div>
            {/* featured cars  */}
            <div className="featured-cars">
                <h2 className="fw-bold mt-5">Discover Our Featured Models</h2>
                <hr className="w-25 mx-auto text-dark " />
                <p className="my-5 w-50 mx-auto text-secondary">A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.</p>
                <div className="row gx-0 gy-2">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}></Car>)
                    }
                </div>
                {/* reviews section */}
                <div className="reviews-section">
                    <h1 className="fw-bold mt-5">What our clients say about us</h1>
                    <p className="text-secondary mb-5">Satisfied customers on Excel Cars</p>
                    <div className="review-slider my-5">
                        <Carousel className="w-75 mx-auto" variant="dark">
                            {
                                reviews.map(review => <Carousel.Item className><Review review={review}> </Review> </Carousel.Item>)
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;