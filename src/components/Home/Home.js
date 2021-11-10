import React from 'react';
import './Home.css';
import topBannerImg from '../../images/topbanner.png';

import { Carousel } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className="text-start">
                        <h1>Find Your Next Car at Excel Cars</h1>
                        <p>Allow us to guide you through the innovative stress
                            free approach in finding your dream car.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="w-75" src={topBannerImg}></img>
                </div>
            </div>
        </div>
    );
};

export default Home;