import React from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = (props) => {
    const { services } = props;
    return (
        // services section
        <div className="services-section">
            <div className="container">
                <div className="services-head">
                    <h1>Our Services</h1>
                </div>
                <div className="services-boxes">
                    {
                        services.map(service => <Service key={service.id} img={service.img} title={service.title} price={service.price} description={service.description}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;