import React, { useEffect, useState } from 'react';
import './Home.css';
import topBannerImg from '../../images/topbanner.png';

import { Carousel } from 'react-bootstrap';
import Car from '../Car/Car';
const Home = () => {


    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


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
                    <img className="w-100" src={topBannerImg}></img>
                </div>
            </div>
            {/* featured cars  */}
            <div>
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
            </div>
        </div>
    );
};

export default Home;