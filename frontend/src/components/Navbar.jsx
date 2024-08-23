import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-item'>
                <Link to="/" className='navbar-link'>Map</Link>
            </div>
        </div>
    );
};
