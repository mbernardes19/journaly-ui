import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/"> <h1 className="nav-header">Journaly</h1></Link>
                </li>
                <li>
                    <div className="nav-links">
                        <Link to="/sign-in"> <h2 className="nav-item">Sign in</h2></Link>
                        <Link to="/sign-up"> <h2 className="nav-item">Sign up</h2></Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;