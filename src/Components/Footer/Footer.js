import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        //foter section
        <footer className="footer-section text-center">
            {/* footer brand logo */}
            <div>
                <span className="jg-bname">
                    <span style={{ color: '#FDBD4E' }}>Jayeen<span style={{ color: '#FFFFFF' }}>'</span>s</span> <span style={{ color: '#FFFFFF' }}>Garage</span>
                </span>
            </div>
            <div className="textCenter f-note">
                <p>This is an assignment project for Programming Hero</p>
            </div>
            {/* footer icons */}
            <div className="footer-icons">
                <a href="https://facebook.com/jayeenbinalam" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com/jayeen29" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/jay__een/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="mailto://jayeenb@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="f-note-2">
                All rights reserved by MD. Jayeen Bin Alam
            </div>
        </footer>
    );
};

export default Footer;