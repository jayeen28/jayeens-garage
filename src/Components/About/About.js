import React from 'react';
import { Card } from 'react-bootstrap';
import abtBanner from '../../images/abt-banner.png';
import jayeenImg from '../../images/jayeen-768x768.jpg';
import brianna from '../../images/Brianna_Grant.jpg';
import mark from '../../images/Mark_Grant.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="abt-head">
                    <div className="abt-head-content">
                        <h1>About Us</h1>
                        <p>We are a car modification company also we teach how to do car modification. Basically we provide 9 services. You can choose your desired one from services page.</p>
                    </div>
                    <div className="abt-head-img">
                        <img src={abtBanner} alt="carimage" />
                    </div>
                </div>
                <div className="team-section">
                    <div className="tm-head">
                        <h2>Meet Our Team</h2>
                    </div>
                    <div className="team-boxes">
                        <Card style={{ width: '100%' }} className="team-box">
                            <Card.Img variant="top" src={mark} />
                            <Card.Body>
                                <Card.Title>Mark Grant</Card.Title>
                                <Card.Text>Founder and Co-owner</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%' }} className="team-box">
                            <Card.Img variant="top" src={jayeenImg} />
                            <Card.Body>
                                <Card.Title>MD. Jayeen Bin Alam</Card.Title>
                                <Card.Text>CEO</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%' }} className="team-box">
                            <Card.Img variant="top" src={brianna} />
                            <Card.Body>
                                <Card.Title>Brianna Grant</Card.Title>
                                <Card.Text>Founder and Co-owner</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;