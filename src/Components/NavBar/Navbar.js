import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light Navbar-bg">
            <div class="container">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto text-light">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link active text-white">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link text-white"
                            >Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link text-white"
                            >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/team" className="nav-link text-white"
                            >Team</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;