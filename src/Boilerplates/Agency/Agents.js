import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class Agents extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Agents</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Agents</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="section-title text-center mb-5">
                        <h2>Trusted Agents</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="card padding-card">
                                    <div className="card-body agents-card text-center">
                                        <img className="img-fluid mb-4" src={require('../img/user/1.jpg')} alt="" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Stave Martin</h6>
                                        <small>Buying Agent</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card padding-card">
                                    <div className="card-body agents-card text-center">
                                        <img className="img-fluid mb-4" src={require('../img/user/2.jpg')} alt="" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Mark Smith</h6>
                                        <small>Selling Agent</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card padding-card">
                                    <div className="card-body agents-card text-center">
                                        <img className="img-fluid mb-4" src={require('../img/user/3.jpg')} alt="" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Ryan Printz</h6>
                                        <small>Real Estate Broker</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="card padding-card">
                                    <div className="card-body agents-card text-center">
                                        <img className="img-fluid mb-4" src={require('../img/user/4.jpg')} alt="" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Stave Martin</h6>
                                        <small>Buying Agent</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card padding-card">
                                    <div className="card-body agents-card text-center">
                                        <img className="img-fluid mb-4" src={require('../img/user/5.jpg')} alt="" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Ryan Printz</h6>
                                        <small>Selling Agent</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card padding-card">
                                    <div className="card-body agents-card text-center">
                                        <img className="img-fluid mb-4" src={require('../img/user/2.jpg')} alt="" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Mark Smith</h6>
                                        <small>Real Estate Broker</small>
                                    </div>
                                </div>
                            </div>
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
