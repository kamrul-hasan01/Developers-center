
import React from 'react';
import { Button, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import { useHistory } from 'react-router-dom';
import Teachers from '../Teachers/Teachers';

import useCourses from '../../useHooks/useCourses';
import SectionTittle from '../SectionTittle/SectionTittle';
import Course from '../Course/Course';


const Home = () => {
    const sectionTitle = "Our Course Products"
    const sectionInfo = "Course start from 4000 tk to 9000 tk"
    const courses = useCourses()

    const history = useHistory();
    const services = () => {

        history.push('/courses')
    }

    return (
        <main >
            <Banner></Banner>


            <section  >
                <div >
                    <div className="container" >
                        <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>

                        <div>
                            <Row xs={1} md={4} className="g-0">

                                {
                                    courses[0].slice(0, 4).map(course => <Course key={course.id} course={course}>Buy</Course>)
                                }
                            </Row>
                        </div>
                    </div>
                </div>
            </section>



            <p ><Button variant="primary" className="fs-4" onClick={services}>View All Course</Button></p>

            <section><Teachers></Teachers></section>
            <section className="mb-5 pb-3" >
                <Facilities></Facilities>
            </section>

        </main>
    );
};

export default Home;