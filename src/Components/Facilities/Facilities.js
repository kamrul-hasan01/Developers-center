import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/info.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const Facilities = () => {
    const handPoint = <FontAwesomeIcon icon={faHandPointRight} />
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 className="text-center text-muted fs-1 pt-5">Class Facilities</h1>
                    <p className="text-muted fs-4">Ask the question, learn with perfection , lead with Conviction</p></Col>
            </Row>
            <Row>
                <Col md={6}>
                    <img src={img} className="img-fluid" alt="" />
                </Col>
                <Col md={6} className="text-start">
                    <h1 className="  fs-1 pt-3 text-primary">Ask whatever you want</h1>
                    <p className="text-muted fs-4">Get your exam realatd doubs and questions answered by experienced and qualified faculty </p>
                    <h4><span>{handPoint}</span> Stuck with subject related queries?</h4>
                    <h4><span>{handPoint}</span> Confused among lots of career choices?</h4>
                    <h4><span>{handPoint}</span> Looking for expert guidance in studies ?</h4></Col>

            </Row>

        </Container>
    );
};

export default Facilities;