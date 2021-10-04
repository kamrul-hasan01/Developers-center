import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Gellary = (props) => {
    return (
        <Col className="p-4">
            <Card>
                <Card.Img src={props.img} style={{ height: "200px" }} />

            </Card>
        </Col>
    );
};

export default Gellary;