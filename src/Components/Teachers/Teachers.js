
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../useHooks/useCourses';
import SectionTittle from '../SectionTittle/SectionTittle';
import TeacherInfo from '../TeacherInfo/TeacherInfo';

const Teachers = () => {
    const sectionTitle = "Course inspectors"
    const sectionInfo = "We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs"
    const teachers = useCourses()

    return (
        <div>
            <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>
            <Container>
                <Row xs={1} md={3} className="g-0">

                    {
                        teachers[0].map(teacher => <TeacherInfo key={teacher.id} teacher={teacher}></TeacherInfo>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Teachers;