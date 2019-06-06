import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Social Profiles</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Social Profiles</span></p>
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
                                <form>
                                    <div className="card padding-card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-4">Social Profiles</h5>
                                            <div className="form-group">
                                                <label>Facebook</label>
                                                <input type="text" className="form-control" placeholder="Facebook URL" />
                                            </div>
                                            <div className="form-group">
                                                <label>Twitter</label>
                                                <input type="text" className="form-control" placeholder="@Username" />
                                            </div>
                                            <div className="form-group">
                                                <label>Google+</label>
                                                <input type="email" className="form-control" placeholder="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Linkedin <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" placeholder="Linkedin URL" />
                                            </div>
                                            <div className="form-group">
                                                <label>Instagram <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" placeholder="@Username" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success">SAVE EDITS</button>
                                </form>
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
