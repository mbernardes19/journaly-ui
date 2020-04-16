import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/"> <h1 className="nav-header">Journaly</h1> </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;