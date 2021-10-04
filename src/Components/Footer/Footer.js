import React from 'react';
import { Button } from 'react-bootstrap';
import fb from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter.png'
import wApps from '../../Images/whatsapp.png'
import google from '../../Images/google.png'
import apple from '../../Images/apple.png'
import bkash from '../../Images/bkash.png'

const Footer = () => {
    return (
        <footer style={{ background: "#EBECE4" }}>
            <section className=" pt-5  container">
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
                        <div className="mb-3">
                            <h1 className="mb-4">Subscribe Newsletter</h1>
                            <div className="input-group ">
                                <input type="text" className="form-control bg-white" placeholder="Enter your email adress"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <Button type="button"
                                    className="btn rounded text-white px-5 custon-bg-color ms-3 w-xs-50">SUBSCRIBE</Button>
                            </div>
                        </div>
                        <div className="my-4">
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
                                <img className=" rounded" style={{ height: "40px", width: "40px" }} src={bkash} alt="" />
                                <img className="ms-3 rounded" style={{ height: "40px", width: "40px" }} src={bkash} alt="" />
                                <img className="ms-3 rounded" style={{ height: "40px", width: "40px" }} src={bkash} alt="" />
                                <img className="ms-3 rounded" style={{ height: "40px", width: "40px" }} src={bkash} alt="" />

                            </div>

                        </div>



                    </div>


                </div>
            </section>

            <section >
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="pt-2">
                            <p>2021 <i className="far fa-copyright"></i> All rights reserved. <span className="text-primary">
                                kamrulhasa.kh02@gmail.com</span></p>
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