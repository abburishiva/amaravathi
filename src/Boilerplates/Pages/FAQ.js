import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">FAQ</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">FAQ</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 mx-auto">
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <div id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="faq-card mb-3">
                                                <div className="faq-card-header mb-2" role="tab" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <i className="mdi mdi-arrow-right-bold-box"></i>   Where can I get access to Capital IQ?
                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 </p>
                                                </div>
                                            </div>
                                            <div className="faq-card mb-3">
                                                <div className="faq-card-header mb-2" role="tab" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <i className="mdi mdi-arrow-right-bold-box"></i> Where can I find market research reports?
                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 </p>
                                                </div>
                                            </div>
                                            <div className="faq-card mb-3">
                                                <div className="faq-card-header mb-2" role="tab" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <i className="mdi mdi-arrow-right-bold-box"></i> How do I get access to case studies?
                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 </p>
                                                </div>
                                            </div>
                                            <div className="faq-card">
                                                <div className="faq-card-header mb-2" role="tab" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <i className="mdi mdi-arrow-right-bold-box"></i>  How much should I capitalize?
                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 </p>
                                                </div>
                                            </div>
                                        </div>
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
