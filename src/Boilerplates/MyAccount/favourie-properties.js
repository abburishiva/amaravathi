import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class FavoriteProperties extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Favorite Properties</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Favorite Properties</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tab-view">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Link to="/home with userprofile" className="dropdown-item">User Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/home with socialprofile" className="dropdown-item">Social Profiles</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/home with myproperty" className="dropdown-item">My Properties</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/home with favouriteproperty" className="dropdown-item">Favourite Property</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/home with addproperty" className="dropdown-item">Add Property</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 mx-auto">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card card-list card-list-view">
                                            <div className="row no-gutters">
                                                <div className="col-lg-5 col-md-5">
                                                    <span className="badge badge-success">For Sale</span>
                                                    <img className="card-img-top" src={require('../img/list/1.png')} alt="" />
                                                </div>
                                                <div className="col-lg-7 col-md-7">
                                                    <div className="card-body">
                                                        <a className="float-right text-danger" href="index.html"><i className="mdi mdi-delete-forever"></i> Delete</a>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card card-list card-list-view">
                                            <div className="row no-gutters">
                                                <div className="col-lg-5 col-md-5">
                                                    <span className="badge badge-secondary">For Rent</span>
                                                    <img className="card-img-top" src={require('../img/list/2.png')} alt="" />
                                                </div>
                                                <div className="col-lg-7 col-md-7">
                                                    <div className="card-body">
                                                        <a className="float-right text-danger" href="index.html"><i className="mdi mdi-delete-forever"></i> Delete</a>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card card-list card-list-view">
                                            <div className="row no-gutters">
                                                <div className="col-lg-5 col-md-5">
                                                    <span className="badge badge-danger">For Sale</span>
                                                    <img className="card-img-top" src={require('../img/list/4.png')} alt="" />
                                                </div>
                                                <div className="col-lg-7 col-md-7">
                                                    <div className="card-body">
                                                        <a className="float-right text-danger" href="index.html"><i className="mdi mdi-delete-forever"></i> Delete</a>
                                                        <h5 className="card-title">Store Space Greenville</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 250-260 3rd St, Hoboken, NJ 07030, USA</h6>
                                                        <h2 className="text-success mb-0 mt-3">
                                                            $25,000 <small>/month</small>
                                                        </h2>
                                                    </div>
                                                    <div className="card-footer">
                                                        <span><i className="mdi mdi-sofa"></i> Beds : <strong>6</strong></span>
                                                        <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>4</strong></span>
                                                        <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>987 sq ft</strong></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card card-list card-list-view">
                                            <div className="row no-gutters">
                                                <div className="col-lg-5 col-md-5">
                                                    <span className="badge badge-success">For Sale</span>
                                                    <img className="card-img-top" src={require('../img/list/3.png')} alt="" />
                                                </div>
                                                <div className="col-lg-7 col-md-7">
                                                    <div className="card-body">
                                                        <a className="float-right text-danger" href="index.html"><i className="mdi mdi-delete-forever"></i> Delete</a>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="mt-5">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="index.html" tabIndex="-1"><i className="mdi mdi-chevron-left"></i></a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="index.html">1</a></li>
                                        <li className="page-item"><a className="page-link" href="index.html">2</a></li>
                                        <li className="page-item"><a className="page-link" href="index.html">3</a></li>
                                        <li className="page-item"><a className="page-link" href="index.html">...</a></li>
                                        <li className="page-item"><a className="page-link" href="index.html">10</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="index.html"><i className="mdi mdi-chevron-right"></i></a>
                                        </li>
                                    </ul>
                                </nav>
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