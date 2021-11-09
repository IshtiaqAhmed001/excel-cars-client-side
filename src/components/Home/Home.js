import React from 'react';
import './Home.css';
import img1 from '../../images/New folder/1.jpg';
import img2 from '../../images/New folder/2.jpg';
import img3 from '../../images/New folder/3.jpg';
import img4 from '../../images/New folder/4.jpg';
import img5 from '../../images/New folder/5.jpg';
import img6 from '../../images/New folder/6.jpg';
import { Carousel } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <div className="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="slider-title title1 display-1" >Find the right car for you</h1>
                            <p className="text-dark fs-5">We have more than a thousand cars for you to choose</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="slider-title title1 display-1" >Find the right car for you</h1>
                            <p className="text-dark fs-5">We have more than a thousand cars for you to choose</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="slider-title title1 display-1" >Find the right car for you</h1>
                            <p className="text-dark fs-5">We have more than a thousand cars for you to choose</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="slider-title title1 display-1" >Find the right car for you</h1>
                            <p className="text-dark fs-5">We have more than a thousand cars for you to choose</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;