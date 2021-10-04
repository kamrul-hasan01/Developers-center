import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TeacherInfo = (props) => {
    const { userName, subject, userImage } = props.teacher
    return (

        <Col className="p-4">
            <Card>
                <div className="px-auto pt-3">
                    <Card.Img src={userImage} style={{ height: "200px", width: "200px", borderRadius: "50%" }} />
                </div>
                <Card.Body>

                    <Card.Title>{userName}</Card.Title>
                    <Card.Text>
                        Specialist in <span className="text-primary"> {subject}</span>
                        <p className="text-center fs-3">
                            <i class="fab fa-facebook-square me-3"></i>
                            <i class="fab fa-linkedin me-3"></i>
                            <i class="fab fa-instagram-square me-3"></i>
                            <i class="fab fa-twitter-square"></i>
                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default TeacherInfo;