import React from 'react';
import fb from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter.png'
import wApps from '../../Images/whatsapp.png'
import google from '../../Images/google.png'
import apple from '../../Images/apple.png'


const Footer = () => {
    return (
        <footer style={{ background: "#191F23" }}>
            <section className=" pt-5  container text-white">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="row g-0">
                            <div className="col-md-7 text-start">

                                <h1>Contract info</h1>
                                <p>Adress: <br /> House:#105,Nolvog <br /> Uttara, Dhaka </p>
                                <p>Email: <br />  kamrulhasan.kh02@gmail.com</p>
                                <p>Phone: <br /> +88017123456789</p>
                                <h1>Stay Connected</h1>
                                <div className="row g-0">
                                    <img className=" rounded" style={{ width: "40px", height: "40px" }} src={fb} alt="" />
                                    <img className=" rounded ms-2" style={{ width: "40px", height: "40px" }} src={instagram} alt="" />
                                    <img className=" rounded ms-2" style={{ width: "40px", height: "40px" }} src={linkedin} alt="" />
                                    <img className=" rounded ms-2" style={{ width: "40px", height: "40px" }} src={twitter} alt="" />
                                    <img className=" rounded ms-2" style={{ width: "40px", height: "40px" }} src={wApps} alt="" />

                                </div>
                            </div>
                            <div className="col-md-5 ps-3 text-start">
                                <h1>Quick Links</h1>
                                <p>About us</p>
                                <p>Contract us</p>
                                <p>Privacy & policy</p>
                                <p>Terms & condition</p>
                                <p>Subscription</p>
                                <p>Acessories</p>
                                <p>FAQ</p>
                                <p>Blog</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ms-auto text-start">

                        <div className="my-1">
                            <h1 className="mb-3">Download App</h1>
                            <div className="row g-0">
                                <div className="col-md-6"><img className="img-fluid rounded" style={{ height: "80px" }}
                                    src={google} alt="" /></div>
                                <div className="col-md-6"><img className="img-fluid ms-md-5 rounded" style={{ height: "80px" }}
                                    src={apple} alt="" /></div>
                            </div>

                        </div>
                        <div className="my-5">
                            <h1 className="my-4">We Accept</h1>
                            <div className="row g-0">
                                <img className=" rounded" style={{ height: "40px", width: "40px" }} src="https://play-lh.googleusercontent.com/UWIyHqi_5u5oyiKB7NyuCL-YYDujSKWOkfFnziLm8cGSMWb094MRXMwXEm4Ew6iy6nA" alt="" />
                                <img className="ms-3 rounded" style={{ height: "40px", width: "40px" }} src="https://play-lh.googleusercontent.com/EQC9NtbtRvsNcU1r_5Dr8pWm3hPfN3OjGjzkOqzCEPDJvqBGKyfU9-a2ajNtcrIg1rs" alt="" />
                                <img className="ms-3 rounded" style={{ height: "40px", width: "40px" }} src="https://futurestartup.com/wp-content/uploads/2016/09/DBBL-Mobile-Banking-Becomes-Rocket.jpg" alt="" />
                                <img className="ms-3 rounded" style={{ height: "40px", width: "40px" }} src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/mastercard-logo2.png" alt="" />

                            </div>

                        </div>



                    </div>


                </div>
            </section>

            <section >
                <div className="row g-0 text-white py-4" style={{ background: "#191F23" }}>
                    <div className="col-md-6">
                        <div className="pt-2">
                            <p>2021 <i className="far fa-copyright"></i> All rights reserved. <span className="text-primary">
                                Developer  Center</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="pt-2">
                            <p> Developed by <span className="text-primary">
                                Kamrul Hasan</span></p>
                        </div>
                    </div>
                </div>




            </section>
        </footer >
    );
};

export default Footer;