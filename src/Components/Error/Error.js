import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1 style={{ color: 'white' }}>404</h1>
                </div>
                <h2>Oops! This Page Could Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <Link to="/home">Go To Homepage</Link>
            </div>
        </div>
    );
};

export default Error;