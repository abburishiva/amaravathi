import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';
export default class AddProperty extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Add Property</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Add property</span></p>
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
                                            <h5 className="card-title mb-4">Property Description</h5>
                                            <div className="form-group">
                                                <label>Property Title <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" placeholder="Enter Full Name" />
                                            </div>
                                            <div className="form-group">
                                                <label>Property Description <span className="text-danger">*</span></label>
                                                <textarea className="form-control" rows="4"></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label>Type <span className="text-danger">*</span></label>
                                                    <select className="form-control custom-select">
                                                        <option>Select Type</option>
                                                        <option>Type 1</option>
                                                        <option>Type 2</option>
                                                        <option>Type 3</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Status <span className="text-danger">*</span></label>
                                                    <select className="form-control custom-select">
                                                        <option>Select Status</option>
                                                        <option>Type 1</option>
                                                        <option>Type 2</option>
                                                        <option>Type 3</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Location <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Location" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label>Bedrooms <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Bedrooms" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Bathrooms <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Bathrooms" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Floors <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Floors" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label>Garages <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Garages" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Area <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="sq ft" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Size <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="sq ft" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label>Sale of Rent Price <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Rent Price" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Before Price Label<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Price Label" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>After Price Label <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Price Label" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label>Property ID <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Property ID" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Video URL</label>
                                                    <input type="text" className="form-control" placeholder="Youtube, Vimeo, Dailymotion, etc..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card property-features-add padding-card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-4">Property Features</h5>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox">Center Cooling</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox1" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox1">Fire Alarm</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox2" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox2">Heating</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox3" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox3">Gym</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox4" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox4">Balcony</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox5" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox5">Modern Kitchen</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox6" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox6">Pool</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox7" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox7">Elevator</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox8" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox8">Dryer</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox9" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox9">Sauna</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox10" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox10">Dish Washer</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="osahan-checkbox11" />
                                                        <label className="custom-control-label" htmlFor="osahan-checkbox12">Pet Frindly</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card padding-card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-4">Property Gallery</h5>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="fuzone">
                                                        <div className="fu-text">
                                                            <span><i className="mdi mdi-image-area"></i> Click here or drop files to upload</span>
                                                        </div>
                                                        <input className="upload" type="file" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="fuzone">
                                                        <div className="fu-text">
                                                            <span><i className="mdi mdi-image-area"></i> Click here or drop files to upload</span>
                                                        </div>
                                                        <input className="upload" type="file" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="fuzone">
                                                        <div className="fu-text">
                                                            <span><i className="mdi mdi-image-area"></i> Click here or drop files to upload</span>
                                                        </div>
                                                        <input className="upload" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card padding-card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-4">Property Location</h5>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label>Address <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Address" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Country<span className="text-danger">*</span></label>
                                                    <select className="form-control custom-select">
                                                        <option>Select Country</option>
                                                        <option>Country 1</option>
                                                        <option>Country 2</option>
                                                        <option>Country 3</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>City <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter City" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label>State <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter State" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Zip/Postal Code <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Zip/Postal" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Neighborhood <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="..." />
                                                </div>
                                            </div>
                                            <div className="mt-3" id="map"></div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success">ADD PROPERTY</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding bg-dark text-center">
                    <h2 className="text-white mt-0">Join our professional team & agents<br />to start selling your house</h2>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button type="button" className="btn btn-success">Contact Us</button> <button type="button" className="btn btn-outline-success">Read More</button>
                </section>
                <JointTeam />
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}