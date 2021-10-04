import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Gellary from '../Gellary/Gellary';
import NewsLetter from '../NewsLetter/NewsLetter';
import SectionTittle from '../SectionTittle/SectionTittle';
import Summary from '../Summary/Summary';


const About = () => {
    const sectionTitle = "Gallery of our Classes"
    const sectionInfo = "We provide three classes with nine to twenty person each aged twelve months to six years of age."

    const [imgURL, setImgURL] = useState([]);
    useEffect(() => {


        fetch('./img_db.json')
            .then(res => res.json())
            .then(data => {

                setImgURL(data);


            })

    }, [])
    return (
        <section className="container">
            <SectionTittle sectionTitle={sectionTitle} sectionInfo={sectionInfo}></SectionTittle>
            <div>
                <Row xs={1} md={3} className="g-0">
                    {
                        imgURL.map(img => <Gellary key={img.id} img={img.img}></Gellary>)
                    }
                </Row>
            </div>

            <Summary></Summary>
            <NewsLetter></NewsLetter>



        </section>
    );
};

export default About;