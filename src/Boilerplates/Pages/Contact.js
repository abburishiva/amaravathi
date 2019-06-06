import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Contact Us</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Contact Us</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <h3 className="mt-1 mb-5">Get In Touch</h3>
                                <h6 className="text-dark"><i className="mdi mdi-home-map-marker"></i> Address :</h6>
                                <p>86 Petersham town, New South wales Waedll Steet, Australia PA 6550</p>
                                <h6 className="text-dark"><i className="mdi mdi-phone"></i> Phone :</h6>
                                <p>+91 12345-67890, (+91) 123 456 7890</p>
                                <h6 className="text-dark"><i className="mdi mdi-deskphone"></i> Mobile :</h6>
                                <p>(+20) 220 145 6589, +91 12345-67890</p>
                                <h6 className="text-dark"><i className="mdi mdi-email"></i> Email :</h6>
                                <p>iamosahan@gmail.com, info@gmail.com</p>
                                <h6 className="text-dark"><i className="mdi mdi-link"></i> Website :</h6>
                                <p>www.askbootstrap.com</p>
                                <div className="footer-social"><span>Follow : </span>
                                    <a href="index.html"><i className="fa fa-facebook"></i></a>
                                    <a href="index.html"><i className="fa fa-twitter"></i></a>
                                    <a href="index.html"><i className="fa fa-instagram"></i></a>
                                    <a href="index.html"><i className="fa fa-google"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="map"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding  bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 section-title text-left mb-4">
                                <h2>Contact Us</h2>
                            </div>
                            <form className="col-lg-12 col-md-12" name="sentMessage" id="contactForm" noValidate>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Full Name <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Full Name" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                                        <p className="help-block"></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="control-group form-group col-md-6">
                                        <label>Phone Number <span className="text-danger">*</span></label>
                                        <div className="controls">
                                            <input type="tel" placeholder="Phone Number" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                                        </div>
                                    </div>
                                    <div className="control-group form-group col-md-6">
                                        <div className="controls">
                                            <label>Email Address <span className="text-danger">*</span></label>
                                            <input type="email" placeholder="Email Address" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Message <span className="text-danger">*</span></label>
                                        <textarea rows="4" cols="100" placeholder="Message" className="form-control style" id="message" required data-validation-required-message="Please enter your message"></textarea>
                                    </div>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-success">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
                <JointTeam />
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
