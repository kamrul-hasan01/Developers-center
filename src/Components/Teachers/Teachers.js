import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeacherInfo from '../TeacherInfo/TeacherInfo';

const Teachers = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {


        fetch('./fake_data.json')
            .then(res => res.json())
            .then(data => {

                setLanguages(data);


            })

    }, [])
    return (
        <div>
            <div className="row g-0">
                <div className="col-md-12">
                    <h1 className="text-center fs-3 pt-5 text-primary pb-0">Course inspectors</h1>
                    <p className="text-muted fs-5 pt-0">Course start from 4000 tk to 9000 tk</p>
                </div>
            </div>
            <Container>
                <Row xs={1} md={4} className="g-0">

                    {
                        languages.map(teacher => <TeacherInfo key={teacher.id} teacher={teacher}></TeacherInfo>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Teachers;