import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const TopHeader = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div className="row g-0 mt-2 pt-3 " style={{ background: "#EBECE4" }}>

            <div className="row g-0">
                <div className="col-lg-4 col-md-6">
                    <p><span>{envelopeIcon}</span> kamrulhasa.kh02@gmail.com</p>
                </div>
                <div className=" ms-auto col-lg-4 col-md-6">
                    <p> <span>{phoneIcon}</span> 019123456789</p>
                </div>
            </div>


        </div>
    );
};

export default TopHeader;