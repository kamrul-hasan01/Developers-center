import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NabManu = () => {
    const activeStyle = {


        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar expand="lg" style={{ background: "#EBECE4" }} className="mt-0 pt-0">
                <Container>
                    <Navbar.Brand to="./home">

                        <span className="ps-3">Developers Center</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link>   <NavLink activeStyle={activeStyle} to="/home">Home</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink activeStyle={activeStyle} to="/about">About</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink activeStyle={activeStyle} to="/services">Services</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink activeStyle={activeStyle} to="/chart">Chart</NavLink></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NabManu;