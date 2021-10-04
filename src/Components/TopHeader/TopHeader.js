import React from 'react';


const TopHeader = () => {

    return (
        <section className="">
            <div className="container">
                <div className="row g-0">
                    <div class="col-md-6 pt-4 fs-6">
                        <div class="row g-0 fs-5 text-muted">
                            <div class=" col-md-6">
                                <p> <i style={{ color: "#3d4d5cbe" }} class="fas fa-envelope me-2 "></i>info@nasircars.com</p>
                            </div>
                            <div class="col-md-6">
                                <p> <i style={{ color: "#3d4d5cbe" }} class="fas fa-phone me-2 "></i>019123456789</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0">
                            <div class="col-lg-7 col-md-6">
                                <div class=" ms-md-auto pe-3 input-group mt-md-3 w-75">
                                    <input type="text" class="form-control " placeholder="What you are looking for"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2"><i class="fas fa-search"></i></span>

                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6 mt-md-1 mt-lg-0 " style={{ color: "#3d4d5cbe" }}>
                                <p class="fs-1"> <i class="fab fa-facebook-square pe-2"></i>
                                    <i class="fab fa-twitter-square pe-2"></i>
                                    <i class="fab fa-linkedin  pe-2"></i>
                                    <i class="fab fa-instagram-square"></i>
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