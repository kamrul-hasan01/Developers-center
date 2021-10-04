import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {


        fetch('./fake_data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLanguages(data);
                console.log(languages)

            })

    }, [])

    return (
        <div >
            <div className="row g-0">
                <div className="col-md-12">
                    <h1 className="text-center fs-3 pt-5 text-primary pb-0">Our Course Products</h1>
                    <p className="text-muted fs-5 pt-0">You can learn anything language from us</p>
                </div>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-0">

                    {
                        languages.map(language => <SingleService key={language.id} language={language}></SingleService>)
                    }
                </Row>
            </Container>



        </div>
    );
};

export default Services;