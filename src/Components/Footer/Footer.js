import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section text-center">
            <div>
                <span className="jg-bname">
                    <span style={{ color: '#FDBD4E' }}>Jayeen<span style={{ color: '#FFFFFF' }}>'</span>s</span> <span style={{ color: '#FFFFFF' }}>Garage</span>
                </span>
            </div>
            <div className="textCenter f-note">
                <p>This is an assignment project for Programming Hero</p>
            </div>
            <div className="footer-icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="f-note-2">
                All rights reserved by MD. Jayeen Bin Alam
            </div>
        </div>
    );
};

export default Footer;