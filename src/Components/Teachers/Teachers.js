import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTittle from '../SectionTittle/SectionTittle';
import TeacherInfo from '../TeacherInfo/TeacherInfo';

const Teachers = () => {
    const sectionTitle = "Course inspectors"
    const sectionInfo = "Teacher  are too good"
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
            <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>
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