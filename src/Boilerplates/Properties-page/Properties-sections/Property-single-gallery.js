import React, { Component } from 'react';
import Header from '../../../Components/Header';
import JointTeam from '../../../Components/JointTeam';
import Footer1 from '../../../Components/Footer1';
import Footer2 from '../../../Components/Footer2';

export default class PropertySingleGallery extends Component {
    render() {
        return (
            <div className="property-single-gallery">
                <Header />
                <section className="osahan-slider">
                    <div id="osahanslider" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#osahanslider" data-slide-to="0" className="active"></li>
                            <li data-target="#osahanslider" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active" id="property1"></div>
                            <div className="carousel-item" id="property2"></div>
                        </div>
                        <a className="carousel-control-prev" href="#osahanslider" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#osahanslider" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="property-single-title property-single-title-gallery">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <h1>House in Kent Street</h1>
                                    <h6><i className="mdi mdi-home-map-marker"></i> 250-260 3rd St, Hoboken, NJ 07030, USA</h6>
                                </div>
                                <div className="col-lg-4 col-md-4 text-right">
                                    <h6 className="mt-2">For Rent</h6>
                                    <h2 className="text-success">$25,000 <small>/month</small></h2>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <p className="mt-1 mb-0"><strong>Property ID</strong> : 533566 &nbsp;&nbsp; <strong>Add to favorites</strong> <i className="mdi mdi-heart"></i></p>
                                </div>
                                <div className="col-lg-4 col-md-4 text-right">
                                    <div className="footer-social">
                                        <span>Share :</span> &nbsp;
                        <a href="index.html"><i className="mdi mdi-facebook"></i></a>
                                        <a href="index.html"><i className="mdi mdi-twitter"></i></a>
                                        <a href="index.html"><i className="mdi mdi-instagram"></i></a>
                                        <a href="index.html"><i className="mdi mdi-google"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="card">
                                    <div className="card-body osahan-slider pl-0 pr-0 pt-0 pb-0">
                                        <div id="osahansliderz" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="index.htmlosahansliderz" data-slide-to="0" className="active"></li>
                                                <li data-target="index.htmlosahansliderz" data-slide-to="1"></li>
                                            </ol>
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active rounded" id="property3"></div>
                                                <div className="carousel-item rounded" id="property4"></div>
                                            </div>
                                            <a className="carousel-control-prev" href="#osahansliderz" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#osahansliderz" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Description</h5>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="list-icon">
                                                    <i className="mdi mdi-move-resize-variant"></i>
                                                    <strong>Area:</strong>
                                                    <p className="mb-0">1270 aq ft</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="list-icon">
                                                    <i className="mdi mdi-sofa"></i>
                                                    <strong>Beds:</strong>
                                                    <p className="mb-0">4 Bedrooms</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="list-icon">
                                                    <i className="mdi mdi-hot-tub"></i>
                                                    <strong>Baths:</strong>
                                                    <p className="mb-0">2 Bathrooms</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="list-icon">
                                                    <i className="mdi mdi-garage"></i>
                                                    <strong>Rooms:</strong>
                                                    <p className="mb-0">6 Rooms</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="list-icon">
                                                    <i className="mdi mdi-floor-plan"></i>
                                                    <strong>Floors:</strong>
                                                    <p className="mb-0">4 Floors</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="list-icon">
                                                    <i className="mdi mdi-car-convertible"></i>
                                                    <strong>Garage:</strong>
                                                    <p className="mb-0">2 Garages</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                        <p className="mb-0">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                    </div>
                                </div>
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Features</h5>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <ul className="sidebar-card-list">
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> In-room tea and coffee</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Writing desk</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Personal safe</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Minibar</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Refrigerator</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Electronic key card access</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <ul className="sidebar-card-list">
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Refrigerator</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Electronic key card access</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> In-room tea and coffee</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-close-box-outline text-danger"></i> Writing desk</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-close-box-outline text-danger"></i> Personal safe</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-close-box-outline text-danger"></i> Minibar</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <ul className="sidebar-card-list">
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Personal safe</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Minibar</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Refrigerator</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> In-room tea and coffee</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Writing desk</a></li>
                                                    <li><a href="index.html"><i className="mdi mdi-checkbox-marked-outline text-success"></i> Electronic key card access</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Location</h5>
                                        <div className="row mb-3">
                                            <div className="col-lg-6 col-md-6">
                                                <p><strong className="text-dark">Address :</strong> 1200 Petersham Town</p>
                                                <p><strong className="text-dark">State :</strong> Newcastle</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p><strong className="text-dark">City :</strong> Sydney</p>
                                                <p><strong className="text-dark">Zip/Postal Code  :</strong> 54330</p>
                                            </div>
                                        </div>
                                        <div id="map"></div>
                                    </div>
                                </div>
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Video</h5>
                                        <a href="index.html"><img className="rounded img-fluid" src={require('../../../img/video.jpg')} alt="Card" /></a>
                                    </div>
                                </div>
                                <div className="card padding-card reviews-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">3 Reviews</h5>
                                        <div className="media mb-4">
                                            <img className="d-flex mr-3 rounded-circle" src={require('../../../img/user/1.jpg')} alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Stave Martin <small>Feb 12, 2018</small>
                                                    <span className="star-rating float-right">
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star-half text-warning"></i>
                                                        <i className="mdi mdi-star-half text-warning"></i><small className="text-success">5/2</small>
                                                    </span>
                                                </h5>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <img className="d-flex mr-3 rounded-circle" src={require('../../../img/user/2.jpg')} alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Mark Smith <small>Feb 09, 2018</small> <span className="star-rating float-right">
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star-half text-warning"></i>
                                                    <i className="mdi mdi-star-half text-warning"></i>
                                                    <i className="mdi mdi-star-half text-warning"></i>
                                                    <i className="mdi mdi-star-half text-warning"></i><small className="text-success">5/1</small>
                                                </span>
                                                </h5>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <div className="media mt-4">
                                                    <img className="d-flex mr-3 rounded-circle" src={require('../../../img/user/3.jpg')} alt="" />
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Ryan Printz <small>Nov 13, 2018</small> <span className="star-rating float-right">
                                                            <i className="mdi mdi-star text-warning"></i>
                                                            <i className="mdi mdi-star text-warning"></i>
                                                            <i className="mdi mdi-star-half text-warning"></i>
                                                            <i className="mdi mdi-star-half text-warning"></i>
                                                            <i className="mdi mdi-star-half text-warning"></i><small className="text-success">5/5</small>
                                                        </span>
                                                        </h5>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media mt-4">
                                            <img className="d-flex mr-3 rounded-circle" src={require('../../../img/user/4.jpg')} alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Stave Mark <small>Feb 12, 2018</small>
                                                    <span className="star-rating float-right">
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star-half text-warning"></i>
                                                        <i className="mdi mdi-star-half text-warning"></i><small className="text-success">5/2</small>
                                                    </span>
                                                </h5>
                                                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Leave a Review</h5>
                                        <form name="sentMessage">
                                            <div className="row">
                                                <div className="control-group form-group col-lg-4 col-md-4">
                                                    <div className="controls">
                                                        <label>Your Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="control-group form-group col-lg-4 col-md-4">
                                                    <div className="controls">
                                                        <label>Your Email <span className="text-danger">*</span></label>
                                                        <input type="email" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="control-group form-group col-lg-4 col-md-4">
                                                    <div className="controls">
                                                        <label>Rating <span className="text-danger">*</span></label>
                                                        <select className="form-control custom-select">
                                                            <option>1 Star</option>
                                                            <option>2 Star</option>
                                                            <option>3 Star</option>
                                                            <option>4 Star</option>
                                                            <option>5 Star</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Review <span className="text-danger">*</span></label>
                                                    <textarea rows="10" cols="100" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-success">Send Message</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">About Agent</h5>
                                        <div id="featured-properties">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="card card-list">
                                                        <a href="index.html">
                                                            <img className="card-img-top" src={require('../../../img/agent.jpg')} alt="Card" />
                                                            <div className="card-body pb-0">
                                                                <h5 className="card-title mb-4">Gurdeep Osahan</h5>
                                                                <h6 className="card-subtitle mb-3 text-muted"><i className="mdi mdi-phone"></i> (950) 491-570-180</h6>
                                                                <h6 className="card-subtitle mb-3 text-muted"><i className="mdi mdi-email"></i> support@example.com</h6>
                                                                <h6 className="card-subtitle text-muted"><i className="mdi mdi-link"></i> www.askbootstrap.com</h6>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Request a Showing</h5>
                                        <form name="sentMessage">
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Your Name <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="Enter Your Name" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Your Email <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="Enter Your Email" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Phone <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="Enter Phone Number" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Message <span className="text-danger">*</span></label>
                                                    <textarea rows="5" cols="50" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-success btn-block">SEND REQUEST</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Featured Properties</h5>
                                        <div id="featured-properties" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#featured-properties" data-slide-to="0" className="active"></li>
                                                <li data-target="#featured-properties" data-slide-to="1"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="card card-list">
                                                        <a href="index.html">
                                                            <span className="badge badge-success">For Sale</span>
                                                            <img className="card-img-top" src={require('../../../img/list/1.png')} alt="Card" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">House in Kent Street</h5>
                                                                <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                                                                <h2 className="text-success mb-0 mt-3">
                                                                    $130,000 <small>/month</small>
                                                                </h2>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="card card-list">
                                                        <a href="index.html">
                                                            <span className="badge badge-secondary">For Rent</span>
                                                            <img className="card-img-top" src={require('../../../img/list/2.png')} alt="Card" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Family House in Hudson</h5>
                                                                <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hoboken, NJ, USA</h6>
                                                                <h2 className="text-success mb-0 mt-3">
                                                                    $127,000 <small>/month</small>
                                                                </h2>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Mortage Calculator</h5>
                                        <form name="sentMessage">
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Sale Price <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="$" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Down payment <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="$" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Term <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="Years" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Interest Rate <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="%" className="form-control" required />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-success btn-block">CALCULATE</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding  border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 section-title text-left mb-4">
                                <h2>Similar Properties</h2>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-list">
                                    <a href="index.html">
                                        <span className="badge badge-success">For Sale</span>
                                        <img className="card-img-top" src={require('../../../img/list/1.png')} alt="Card" />
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
                                        <img className="card-img-top" src={require('../../../img/list/2.png')} alt="Card" />
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
                                        <img className="card-img-top" src={require('../../../img/list/3.png')} alt="Card" />
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
                <JointTeam />
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
