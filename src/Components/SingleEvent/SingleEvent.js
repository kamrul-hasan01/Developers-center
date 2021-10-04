import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleEvent.css'

const SingleEvent = (props) => {
    const { img, event, date, details } = props.event

    return (
        <Col className="p-4">
            <Card className="custom-shadow">
                <div className="px-auto pt-3">
                    <Card.Img src={img} fluid className="  px-4" />

                </div>
                <Card.Body>


                    <Card.Title> <span className="text-primary fs-3">{event}</span> <br /> <span className="fs-5"> Date:  {date} Dec, 2021</span> </Card.Title>
                    <Card.Text>{details.slice(0, 105)}.



                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleEvent;