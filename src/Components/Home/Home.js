
import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';
import { useHistory } from 'react-router-dom';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    const history = useHistory();
    const services = () => {

        history.push('/services')
    }
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <Services></Services>
            <p><Button variant="primary" className="fs-4" onClick={services}>View All Course</Button></p>

            <Teachers></Teachers>

        </div>
    );
};

export default Home;