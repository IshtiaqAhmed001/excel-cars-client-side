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
                        <h1 className="text-start text-white">Excel Cars</h1>
                        <div className="text-start mt-3">
                            <NavLink className="link-styles" to="/">{fbIcon}</NavLink>
                            <NavLink className="link-styles" to="/">{linkedInIcon}</NavLink>
                            <NavLink className="link-styles" to="/">{twitterIcon}</NavLink>
                            <NavLink className="link-styles" to="/">{youtubeIcon}</NavLink>
                        </div>

                    </div>
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">

                        <ul>
                            <li><h2>Our Services</h2></li>
                            <li className="my-4" > <NavLink className="footerLink" to="/">Dealing New and Old Cars</NavLink></li>
                            <li className="my-4"> <NavLink className="footerLink" to="/">Vehicle Customization</NavLink></li>
                            <li className="my-4"> <NavLink className="footerLink" to="/">EMI Facility (With 0% interest)</NavLink></li>
                            <li className="my-4"> <NavLink className="footerLink" to="/">Lifetime Service Warranty</NavLink></li>
                        </ul>
                    </div>
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">
                        <ul>
                            <li> <h2>Contact</h2></li>
                            <li className="my-4"><NavLink className="footerLink" to="/">Address:</NavLink> </li>
                            <li className="my-4"><NavLink className="footerLink" to="/">Gulshan-11, Dhaka</NavLink> </li>
                            <li className="my-4"><NavLink className="footerLink" to="/">email: ishtiaq.wasi@gmail.com</NavLink> </li>
                            <li className="my-4"><NavLink className="footerLink" to="/">Phone: +880253652665</NavLink> </li>
                        </ul>
                    </div>
                </div>
                <p className="mt-5">© 2021 Excel Cars Ltd. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;