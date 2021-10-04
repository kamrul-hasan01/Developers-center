import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'

const Course = (props) => {

    const { subject, rating, price, courseImg } = props.course;
    return (

        <Col className="p-4">
            <Card className="custom-shadow">
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
                    <div className="row g-0">
                        <div className="col-md-6"> <Button variant="primary" className="fs-5 px-4">Buy</Button></div>
                        <div className="col-md-6"><Button variant="outline-primary" className="fs-5 mx-auto">Details</Button></div>
                    </div>


                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;