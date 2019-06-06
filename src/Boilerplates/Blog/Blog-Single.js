import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class BlogSingle extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Blog Single</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Blog Single</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="card blog-card padding-card">
                                    <img className="card-img-top" src={require('../img/blog/2.png')} alt="" />
                                    <div className="card-body">
                                        <span className="badge badge-success">House/Villa</span>
                                        <h2>Possimus aut mollitia eum ipsum</h2>
                                        <h6 className="mb-3"><i className="mdi mdi-calendar-text"></i> March 09, 2018 / 3 Comments</h6>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum...
                        </p>
                                        <p>
                                            Praesent eget euismod nibh. Fusce ac tellus eu nisl lobortis maximus ac eget sapien. Nulla malesuada mauris non nulla imperdiet ullamcorper.
                        </p>
                                        <p>Spacial has both a web app and an android app to make your website easy and always available. It offers you all the designs in collaboration with some smart people. Your projects will look great everywhere you go. Use new components that come included!</p>
                                        <div className="row">
                                            <div className="col-xl-10 offset-xl-1">
                                                <blockquote className="margin-top-1x margin-bottom-1x">
                                                    <p className="font-weight-bold">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                                    <cite>Someone famous</cite>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <p>
                                            Focus on creating and growing your projects and websites, and we‘ll take care of spinning up new designs for your users and making sure they’re great. Work with all types of customers right out of the box while still getting paid in your preferred currency.
                        </p>
                                        <p className="mb-0">Sed porta libero metus, nec feugiat enim pharetra vel. Sed vel sagittis augue. Donec hendrerit nibh ac dolor lobortis, eu varius odio sollicitudin. Proin non condimentum nulla, quis dictum leo. Vestibulum lobortis urna eu mauris viverra porttitor. Cras consequat leo condimentum lacus viverra sollicitudin. Donec dignissim ornare est, nec scelerisque purus mollis eu. Phasellus dictum suscipit ligula. Donec malesuada gravida velit. Nulla egestas diam in ligula mollis, nec tincidunt diam porta. Proin eleifend lacinia diam quis pretium. Sed lacinia varius nisi et euismod. Ut ac arcu vulputate, porta nibh non, ultricies erat. Nulla facilisi. </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="footer-social"><span>Share</span> : &nbsp;
                           <a href="index.html"><i className="mdi mdi-facebook"></i></a>
                                            <a href="index.html"><i className="mdi mdi-twitter"></i></a>
                                            <a href="index.html"><i className="mdi mdi-instagram"></i></a>
                                            <a href="index.html"><i className="mdi mdi-google"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card padding-card reviews-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">3 Reviews</h5>
                                        <div className="media mb-4">
                                            <img className="d-flex mr-3 rounded" src={require('../img/user/1.jpg')} alt="" />
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
                                            <img className="d-flex mr-3 rounded" src={require('../img/user/2.jpg')} alt="" />
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
                                                    <img className="d-flex mr-3 rounded" src="img/user/3.jpg" alt="" />
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
                                            <img className="d-flex mr-3 rounded" src={require('../img/user/5.jpg')} alt="" />
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
                                        <h5 className="card-title mb-4">Leave a Comment</h5>
                                        <form name="sentMessage">
                                            <div className="row">
                                                <div className="control-group form-group col-lg-6 col-md-6">
                                                    <div className="controls">
                                                        <label>Your Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="control-group form-group col-lg-6 col-md-6">
                                                    <div className="controls">
                                                        <label>Your Email <span className="text-danger">*</span></label>
                                                        <input type="email" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Review <span className="text-danger">*</span></label>
                                                    <textarea rows="10" cols="100" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-success">SUBMIT</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Blog Search</h5>
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Type and hit enter" aria-label="Recipient's username" aria-describedby="basic-addon2" type="text" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button"><i className="mdi mdi-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Popular Posts</h5>
                                        <a href="index.html">
                                            <h6>Possimus aut mollitia eum ipsum</h6>
                                        </a>
                                        <p className="mb-0"><i className="mdi mdi-calendar-text"></i> April 05, 2018</p>
                                        <hr />
                                        <a href="index.html">
                                            <h6>Nulla malesuada mauris non nulla imperdiet ullamcorper</h6>
                                        </a>
                                        <p className="mb-0"><i className="mdi mdi-calendar-text"></i> June 20, 2018</p>
                                        <hr />
                                        <a href="index.html">
                                            <h6 className="text-success">Focus on creating and growing your projects and websites</h6>
                                        </a>
                                        <p className="mb-0"><i className="mdi mdi-calendar-text"></i> June 29, 2018</p>
                                        <hr />
                                        <a href="index.html">
                                            <h6>Vestibulum lobortis urna eu mauris viverra porttitor. Cras consequat </h6>
                                        </a>
                                        <p className="mb-0"><i className="mdi mdi-calendar-text"></i> October 10, 2018</p>
                                        <hr />
                                        <a href="index.html">
                                            <h6>Sed lacinia varius nisi et euismod.</h6>
                                        </a>
                                        <p className="mb-0"><i className="mdi mdi-calendar-text"></i> April 05, 2018</p>
                                    </div>
                                </div>
                                <div className="card sidebar-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Archives</h5>
                                        <ul className="sidebar-card-list">
                                            <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> December, 2017</a></li>
                                            <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> November, 2017</a></li>
                                            <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> October, 2017</a></li>
                                        </ul>
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
                                                            <img className="card-img-top" src={require('../img/list/1.png')} alt="" />
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
                                                            <img className="card-img-top" src={require('../img/list/2.png')} alt="" />
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
