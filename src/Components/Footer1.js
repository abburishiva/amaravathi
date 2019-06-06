import React, { Component } from 'react';
export default class Footer1 extends Component {
    render() {
        return (
            <div>
                <section className="section-padding footer bg-white padding-align">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 text-center">
                                <div className="row">
                                    <div className="col-md-2"> </div>
                                    <div className="col-md-8">
                                        <h6 className="mb-4">NEWSLETTER</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Email Address..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary btn-sm" type="button"><i className="fa fa-paper-plane-o "></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-center">
                                <h6 className="mb-4 mt-0">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a href="home.html" className=" mx-1"><i className="fa fa-facebook"></i></a>
                                    <a href="home.html" className=" mx-1"><i className="fa fa-twitter"></i></a>
                                    <a href="home.html" className=" mx-1"><i className="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
