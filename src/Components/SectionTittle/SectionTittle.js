import React from 'react';

const SectionTittle = (props) => {
    return (
        <div className="row g-0 mt-5 pt-5">
            <div className="col-md-12">
                <h1 className="text-center fs-3 pt-5 text-primary pb-0">{props.sectionTitle}</h1>
                <p className="text-muted fs-5 pt-0">{props.sectionInfo}</p>
            </div>
        </div>
    );
};

export default SectionTittle;