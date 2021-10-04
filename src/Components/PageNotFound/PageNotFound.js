import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../Images/page not found.jpg'


const PageNotFound = () => {
    return (
        <section>

            <Row className="g-0 ">
                <Col xm={12}>
                    <img src={img} style={{ height: "600px", width: "100%" }} alt="" />
                </Col>
            </Row>
        </section>
    );
};

export default PageNotFound;