import React from 'react';
import SectionTittle from '../SectionTittle/SectionTittle';
import eventimg from '../../Images/todayEvents.png'

const TodaysEvent = () => {
    const sectionTitle = "Todays event"
    const sectionInfo = "Influential media, entertainment & technology show inspirational speakers including game-changing, not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made solutions or business."
    return (
        <div className="">
            <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={eventimg} className="img-fluid p-3 rounded" alt="" />
                    </div>
                    <div className="col-md-6 text-start text-muted ps-md-5">
                        <h4>Date: October 5, 2021</h4>
                        <h4>Time: 11:00 am - 12:00 pm</h4>
                        <h4>Reg. Deadline : December 4,2021</h4>
                        <h4>Vanue: IAC Building, Uttara,Dhaka</h4>
                        <h5 className="mt-5">Organizers</h5>
                        <h5>Marti Score</h5>
                        <h5>Email : <span className="text-primary">kh@gmail.com</span></h5>
                        <h5>Social : <span className="text-primary"><i class="fab fa-facebook-square p-2"></i><i class="fab fa-twitter-square"></i></span></h5>
                    </div>
                    <div className="row g-0 text-start ps-2">
                        <div className="col-md-12">
                            <h4>Description</h4><p>Influential media, entertainment & technology show inspirational speakers including game-changing, not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made solutions or business. Taking place over two days this year will be the 10th Conference Ideas with a theme of Dangerous Realities. It features sessions and performances that explore climate change, meritocracy, giving</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TodaysEvent;