import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {

    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
    return (
        <div className="footer-container">
            <div className="mx-4">
                <div className="row g-4 mx-auto">
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">
                        <h1 className="text-start text-danger">Excel Cars</h1>

                        <div className="text-start my-5">
                            <NavLink className="link-styles" to="/blabla">{fbIcon}</NavLink>
                            <NavLink className="link-styles" to="/blabla">{linkedInIcon}</NavLink>
                            <NavLink className="link-styles" to="/blabla">{twitterIcon}</NavLink>
                            <NavLink className="link-styles" to="/blabla">{youtubeIcon}</NavLink>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">

                        <ul>
                            <li><h2>Our Services</h2></li>
                            <li >.....</li>
                            <li >.....</li>
                            <li >.....</li>
                            <li >.....</li>
                        </ul>
                    </div>
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">
                        <ul>
                            <li> <h2>Contact</h2></li>
                            <li >Address:</li>
                            <li >Gulshan-11, Dhaka</li>
                            <li>email: ishtiaq.wasi@gmail.com</li>
                            <li>Phone: +880253652665</li>
                        </ul>
                    </div>
                </div>
                <p>© 2021 Excel Cars Ltd. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;