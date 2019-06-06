import React, { Component } from 'react'

export default class LatestProperties extends Component {
    render() {
        return (
            <div>
                <section className="section-padding">
                    <div className="section-title text-center mb-5">
                        <h2>Latest Sahayaks</h2>
                        <p>Recent topics.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">Contact</span>
                                        <div className="text-center card-body">
                                            <img width="100" height="80" src={require('../../../img/list/react.png')} alt="Card" />
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">React.js</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Vineeth</h6>
                                            <h2 className="text-success-custom mb-0 mt-3">
                                                $500 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <span> Completed Jobs : <strong>3</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">Contact</span>
                                        <div className="text-center card-body">
                                            <img width="100" height="80" src={require('../../../img/list/angular.png')} alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Angular.js</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Vikas</h6>
                                            <h2 className="text-success-custom mb-0 mt-3">
                                                $500 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <span> Completed Jobs : <strong>5</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">Contact</span>
                                        <div className="text-center card-body">
                                            <img width="100" height="80" src={require('../../../img/list/spring.png')} alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Spring</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i>Bhaskar</h6>
                                            <h2 className="text-success-custom mb-0 mt-3">
                                                $500 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <span>Completed Jobs : <strong>2</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">Contact</span>
                                        <div className="text-center card-body">
                                            <img width="100" height="80" src={require('../../../img/list/ASP.NET.png')} alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">ASP.NET</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Aryav</h6>
                                            <h2 className="text-success-custom mb-0 mt-3">
                                                $500<small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <span> Completed Jobs : <strong>6</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">Contact</span>
                                        <div className="text-center card-body">
                                            <img width="126" height="80" src={require('../../../img/list/MongoDB.png')} alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">MongoDB</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i>Lakshay</h6>
                                            <h2 className="text-success-custom mb-0 mt-3">
                                                $500 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <span>Completed Jobs : <strong>8</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">Contact</span>
                                        <div className="text-center card-body">
                                            <img width="105" height="80" src={require('../../../img/list/Selenium.png')} alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Selenium</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i>Chaitanya</h6>
                                            <h2 className="text-success-custom mb-0 mt-3">
                                                $500 <small>/month</small>
                                            </h2>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <span>Completed Jobs : <strong>1</strong></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
