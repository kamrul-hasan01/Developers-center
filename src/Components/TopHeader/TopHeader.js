import React from 'react';


const TopHeader = () => {

    return (
        <section className="">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-6 pt-4 fs-6">
                        <div className="row g-0 fs-5 text-muted">
                            <div className=" col-md-6">
                                <p> <i style={{ color: "#3d4d5cbe" }} className="fas fa-envelope me-2 "></i>kamrulhsasan@gmail.com</p>
                            </div>
                            <div className="col-md-6">
                                <p> <i style={{ color: "#3d4d5cbe" }} className="fas fa-phone me-2 "></i>019123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0">
                            <div className="col-lg-7 col-md-6">
                                <div className=" ms-md-auto pe-3 input-group mt-md-3 w-75">
                                    <input type="text" className="form-control " placeholder="What you are looking for"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>

                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 mt-md-1 mt-lg-0 " style={{ color: "#3d4d5cbe" }}>
                                <p className="fs-1"> <i className="fab fa-facebook-square pe-2"></i>
                                    <i className="fab fa-twitter-square pe-2"></i>
                                    <i className="fab fa-linkedin  pe-2"></i>
                                    <i className="fab fa-instagram-square"></i>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



        </section>
    );
};

export default TopHeader;