import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light Navbar-bg">
            <div className="container">
                <NavLink to="/" className="nav-link text-white"
                >  <h1 className="text-white fs-2">Developers Center</h1></NavLink>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto text-light">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link active text-white">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link text-white"
                            >Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/events" className="nav-link text-white"
                            >Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link text-white"
                            >About</NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;