import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const { subject, rating, price, courseImg } = props.course;
    return (

        <Col className="p-4">
            <Card>
                <Card.Img src={courseImg} style={{ height: "200px" }} />
                <Card.Body>

                    <Card.Title>{subject}</Card.Title>
                    <Card.Text>
                        Price :  {price} TK<Rating className="ps-4 text-warning"
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color "
                            fullSymbol="fas fa-star icon-color "

                            readonly></Rating>
                    </Card.Text>
                    <Button variant="primary" className="fs-5 me-3">Book Now</Button>
                    <Button variant="outline-primary" className="fs-5 ms-3">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;