import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TeacherInfo = (props) => {
    const { userName, subject, userImage } = props.teacher
    return (

        <Col className="p-4">
            <Card className="custom-shadow">
                <div className="px-auto pt-3">
                    <Card.Img src={userImage} style={{ height: "200px", width: "200px", borderRadius: "50%" }} />
                </div>
                <Card.Body>

                    <Card.Title>{userName}</Card.Title>
                    <Card.Text>
                        Specialist in <span className="text-primary"> {subject}</span>
                        <p className="text-center fs-3">
                            <i className="fab fa-facebook-square me-3"></i>
                            <i className="fab fa-linkedin me-3"></i>
                            <i className="fab fa-instagram-square me-3"></i>
                            <i className="fab fa-twitter-square"></i>
                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default TeacherInfo;