
import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import { useHistory } from 'react-router-dom';
import Teachers from '../Teachers/Teachers';
import Courses from '../Courses/Courses';


const Home = () => {
    const history = useHistory();
    const services = () => {

        history.push('/services')
    }
    return (
        <main style={{ background: "#FCFCFC" }}>
            <Banner></Banner>


            <section  >
                <Courses></Courses>
            </section>



            <p><Button variant="primary" className="fs-4" onClick={services}>View All Course</Button></p>

            <section><Teachers></Teachers></section>
            <section  >
                <Facilities></Facilities>
            </section>

        </main>
    );
};

export default Home;