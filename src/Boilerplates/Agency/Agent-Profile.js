import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class AgentProfile extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Agents Profile</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Agents Profile</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <img className="rounded img-fluid" src={require('../img/agent.jpg')} alt="" />
                            </div>
                            <div className="col-lg-7 col-md-7 pl-5 pr-5">
                                <h1 className="mb-0 mt-4">Steve Martin</h1>
                                <h5 className="text-success mb-3">Buying Agent</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum.lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. </p>
                                <div className="row mt-3">
                                    <div className="col-lg-6 col-md-6">
                                        <p><strong className="text-dark">Phone :</strong> +91 12345-67890</p>
                                        <p><strong className="text-dark">Address :</strong> 1200 Petersham Town</p>
                                        <p><strong className="text-dark">State :</strong> Newcastle</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p><strong className="text-dark">Website :</strong> www.askbootstrap.com</p>
                                        <p><strong className="text-dark">City :</strong> Sydney</p>
                                        <p><strong className="text-dark">Zip/Postal Code  :</strong> 54330</p>
                                    </div>
                                </div>
                                <div className="footer-social"><span>Follow : </span>
                                    <a href="index.html"><i className="mdi mdi-facebook"></i></a>
                                    <a href="index.html"><i className="mdi mdi-twitter"></i></a>
                                    <a href="index.html"><i className="mdi mdi-instagram"></i></a>
                                    <a href="index.html"><i className="mdi mdi-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding  border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 section-title text-left mb-4">
                                <h2>My Properties</h2>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">For Sale</span>
                                        <img className="card-img-top" src={require('../img/list/1.png')} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">House in Kent Street</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                                            <h2 className="text-success mb-0 mt-3">
                                                $130,000 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer">
                                            <span><i className="mdi mdi-sofa"></i> Beds : <strong>3</strong></span>
                                            <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>2</strong></span>
                                            <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>587 sq ft</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-secondary">For Rent</span>
                                        <img className="card-img-top" src={require('../img/list/2.png')} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Family House in Hudson</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hoboken, NJ, USA</h6>
                                            <h2 className="text-success mb-0 mt-3">
                                                $127,000 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer">
                                            <span><i className="mdi mdi-sofa"></i> Beds : <strong>5</strong></span>
                                            <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>3</strong></span>
                                            <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>300 sq ft</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">For Sale</span>
                                        <img className="card-img-top" src={require('../img/list/3.png')} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Loft Above The City</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hope Street (Stop P), London SW11, UK</h6>
                                            <h2 className="text-success mb-0 mt-3">
                                                $55,000 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer">
                                            <span><i className="mdi mdi-sofa"></i> Beds : <strong>2</strong></span>
                                            <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>1</strong></span>
                                            <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>100 sq ft</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding  bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 section-title text-left mb-4">
                                <h2>Contact Me</h2>
                            </div>
                            <form className="col-lg-12 col-md-12" name="sentMessage">
                                <div className="row">
                                    <div className="control-group form-group col-lg-4 col-md-4">
                                        <div className="controls">
                                            <label>Your Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="control-group form-group col-lg-4 col-md-4">
                                        <div className="controls">
                                            <label>Email Address <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="control-group form-group col-lg-4 col-md-4">
                                        <div className="controls">
                                            <label>Phone Number <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Message <span className="text-danger">*</span></label>
                                        <textarea rows="10" cols="100" className="form-control"></textarea>
                                    </div>
                                </div>
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