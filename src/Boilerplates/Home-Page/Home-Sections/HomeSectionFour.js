import React, { Component } from 'react'

export default class HomeSectionFour extends Component {
    render() {
        return (
            <div>
                <section className="section-padding">
                    <div className="section-title text-center mb-5">
                        <h2>Trusted Agents</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="agents-card text-center">
                                    <img className="img-fluid mb-4" src={require('../../../img/user/1.jpg')} alt="" />
                                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    <h6 className="mb-0 text-success-custom">- Stave Martin</h6>
                                    <small>Buying Agent</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="agents-card text-center">
                                    <img className="img-fluid mb-4" src={require('../../../img/user/2.jpg')} alt="" />
                                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    <h6 className="mb-0 text-success-custom">- Mark Smith</h6>
                                    <small>Selling Agent</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="agents-card text-center">
                                    <img className="img-fluid mb-4" src={require('../../../img/user/3.jpg')} alt="" />
                                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    <h6 className="mb-0 text-success-custom">- Ryan Printz</h6>
                                    <small>Real Estate Broker</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
