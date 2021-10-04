import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../Images/info.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import SectionTittle from '../SectionTittle/SectionTittle';

const Facilities = () => {

    const handPoint = <FontAwesomeIcon icon={faHandPointRight} />
    const sectionTitle = "Class Facilities"
    const sectionInfo = "Ask the question, learn with perfection , lead with Conviction"
    return (
        <div className="container">
            <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>
            <Row className="my-3">
                <Col md={6}>
                    <img src={img} className="img-fluid" alt="" />
                </Col>
                <Col md={6} className="text-start">
                    <h1 className="  fs-1 pt-3 text-primary">Ask whatever you want</h1>
                    <p className="text-muted fs-4">Get your exam realatd doubs and questions answered by experienced and qualified faculty </p>
                    <h4 className="fs-5"><span className="text-warning pe-3">{handPoint}</span> Stuck with subject related queries?</h4>
                    <h4 className="fs-5"><span className="text-warning pe-3">{handPoint}</span> Confused among lots of career choices?</h4>
                    <h4 className="fs-5"><span className="text-warning pe-3">{handPoint}</span> Looking for expert guidance in studies ?</h4></Col>

            </Row>

        </div>
    );
};

export default Facilities;