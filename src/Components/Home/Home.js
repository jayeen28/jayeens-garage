import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css'
const Home = (props) => {
    const { services } = props;
    return (
        <main>
            <div className="banner-section">
                <div className="banner-bg-overlay">
                    <div className="banner-contents">
                        <div className="banner-title container">
                            <h1>Learn Car Modification <br /> with us</h1>
                        </div>
                        <div className="banner-buttons">
                            <NavLink to="/services"><Button className="banner-button">Our recent courses</Button></NavLink>
                            <NavLink to="/contact" className="banner-button">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-4-services-section">
                <div className="container">
                    <div className="top-service-head">
                        <h2>Our top services</h2>
                    </div>
                    <div className="top-4-service-boxes">
                        {
                            services.map(service => <Service key={service.id} img={service.img} title={service.title} description={service.description.substring(0, 90) + ' ...'} price={service.price}></Service>)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;