import React from 'react';

const Summary = () => {
    return (
        <div className="rounded" style={{ background: "#F5F7FA" }}>
            <div className="row g-0 pb-5">
                <div className="col-md-3 ">
                    <h1 className="text-center fs-3 pt-5 text-warning pb-0">1.926</h1>
                    <p className="text-muted fs-5 pt-0">FINISHED SESSIONS</p>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center fs-3 pt-5 text-warning pb-0">3.093+</h1>
                    <p className="text-muted fs-5 pt-0">ONLINE ENROLLMENT</p>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center fs-3 pt-5 text-warning pb-0">200</h1>
                    <p className="text-muted fs-5 pt-0">SUBJECTS TOUGHT</p>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center fs-3 pt-5 text-warning pb-0">100%</h1>
                    <p className="text-muted fs-5 pt-0">SATISTACTION RATE</p>
                </div>

            </div>
        </div>


    );
};

export default Summary;