import { Row } from 'react-bootstrap';
import useCourses from '../../useHooks/useCourses';


import Course from '../Course/Course';
import SectionTittle from '../SectionTittle/SectionTittle';


const Courses = () => {
    const sectionTitle = "Our Course Products"
    const sectionInfo = "Course start from 4000 tk to 9000 tk"
    const courses = useCourses()
    return (
        <div >
            <div className="container" >
                <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>

                <div>
                    <Row xs={1} md={3} className="g-0">

                        {
                            courses[0].map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Courses;