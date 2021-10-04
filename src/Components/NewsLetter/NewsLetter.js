import React from 'react';
import { Button } from 'react-bootstrap';

const NewsLetter = () => {
    return (

        <div className="row g-0 my-5 pb-4">
            <div className="col-md-12">
                <h1 className="text-center fs-3 pt-5 text-primary pb-0">Sign up for our Newsletters</h1>
                <p className="text-muted fs-5 pt-0">Enter your email address to register to our newsletter subscription
                    delivered on a regular basis!</p>
                <div className="d-flex justify-content-center">
                    <div className="input-group w-50">
                        <input type="text" className="form-control bg-white" placeholder="Enter your email adress"
                            aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <Button type="button"
                            className="btn rounded text-white px-5 custon-bg-color ms-3 w-xs-50 ">SUBSCRIBE</Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NewsLetter;