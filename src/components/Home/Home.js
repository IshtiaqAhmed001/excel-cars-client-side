import React from 'react';
import './Home.css';
import Car from '../Car/Car';
import useCars from '../../hooks/useCars';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWaveAlt, faMoneyCheckAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const { cars } = useCars();
    const featuredCars = cars.slice(0, 6);
    const { reviews } = useReviews();
    return (
        <div>
            <div className="row g-0">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className="text-start w-75 mx-auto">
                        <h1 className="display-4 fw-bold">Find Your Next Car at Excel Cars</h1>
                        <p className="w-75 my-4 text-secondary">Allow us to guide you through the innovative stress
                            free approach in finding your dream car.</p>
                        <button className="btn btn-danger"><Link className="navLink" to="/cars">Explore</Link></button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="w-100" src="https://i.ibb.co/37d8bN6/topbanner.png" alt="" />
                </div>
            </div>
            {/* featured cars  */}
            <div className="featured-cars container">
                <h1 className="featured-title text-danger fw-bold mt-5">Discover Our Featured Models</h1>
                <hr className="w-25 mx-auto text-dark " />
                <p className="mb-5 w-50 mx-auto text-secondary">A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.</p>
                <div className="row g-4">
                    {
                        featuredCars.map(car => <Car
                            key={car._id}
                            car={car}></Car>)
                    }
                </div>
            </div>

            {/* services seciton  */}
            <div className="row services-section my-5 gx-0">
                <div className="col-lg-6 col-md-12">
                    <img className="w-100" src="https://i.ibb.co/Px9JXM1/service-Banner.jpg" alt="" />
                </div>
                <div className="col-lg-6 col-md-12 bg-dark px-5 py-2">
                    <div className="my-3">
                        <h1>Our Services</h1>

                    </div>
                    <div className="my-2 text-start">
                        <h3><FontAwesomeIcon icon={faHandshake} /> Trusted Car Dealings</h3>
                        <p className="w-75">With more than 15 years on the market we know how to care about our customers.</p>
                    </div>
                    <div className="my-2 text-start">
                        <h3><FontAwesomeIcon icon={faMoneyBillWaveAlt} /> In House Car Financing</h3>
                        <p className="w-75">We are open to offer you in house financing to save you money!</p>
                    </div>
                    <div className="my-2 text-start">
                        <h3><FontAwesomeIcon icon={faMoneyCheckAlt} /> EMI Services</h3>
                        <p className="w-75">Buy Cars from us with EMI services upto 4 years!</p>
                    </div>
                    <div className="my-2 text-start"><h3><FontAwesomeIcon icon={faWrench} />  Vehicle Service and Maintenance</h3>
                        <p className="w-75">Our service department maintain your car to stay safe on the road and off the road.</p></div>
                </div>
            </div>

            {/* reviews section */}
            <div className="reviews-section">
                <h1 className="fw-bold mt-5 text-danger">What our clients say about us</h1>
                <p className="text-secondary mb-5">Satisfied customers on Excel Cars</p>
                <div className="review-slider my-5">
                    <Carousel className="w-75 mx-auto" variant="dark">
                        {
                            reviews.map(review => <Carousel.Item><Review review={review}> </Review> </Carousel.Item>)
                        }
                    </Carousel>
                </div>
            </div>


        </div>
    );
};

export default Home;