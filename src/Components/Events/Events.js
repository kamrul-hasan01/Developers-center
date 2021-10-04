import React from 'react';
import { Row } from 'react-bootstrap';
import useEvent from '../../useHooks/useEvent';
import SectionTittle from '../SectionTittle/SectionTittle';
import SingleEvent from '../SingleEvent/SingleEvent';

const Events = () => {
    const sectionTitle = "Events"
    const sectionInfo = "Event list given bellow"
    const events = useEvent()

    return (
        <div >
            <div className="container" >
                <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>

                <div>
                    <Row xs={1} md={3} className="g-0">

                        {
                            events[0].map(event => <SingleEvent key={event.id} event={event}></SingleEvent>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Events;