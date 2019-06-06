import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Blog</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Blog</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/1.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-success">House/Villa</span>
                                                    <h6>Possimus aut mollitia eum ipsum</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/blog/3.png')} alt="Card" /> <strong>Rahul Yadav</strong> On October 03, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/2.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-danger">Shop/Showroom</span>
                                                    <h6>Consectetur adipisicing elit</h6>
                                                    <p className="mb-0">Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/1.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 05, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/3.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-info">Industrial Building</span>
                                                    <h6>Fugiat odio officiis odit</h6>
                                                    <p className="mb-0">Mollitia ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/1.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 06, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/4.png')} alt="Card " />
                                                <div className="card-body">
                                                    <span className="badge badge-white">House/Villa</span>
                                                    <h6>Possimus aut mollitia eum ipsum</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/4.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 03, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/5.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-info">Shop/Showroom</span>
                                                    <h6>Consectetur adipisicing elit</h6>
                                                    <p className="mb-0">Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/5.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 05, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/6.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-dark">Industrial Building</span>
                                                    <h6>Fugiat odio officiis odit</h6>
                                                    <p className="mb-0">Mollitia ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/1.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 06, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/7.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-success">House/Villa</span>
                                                    <h6>Possimus aut mollitia eum ipsum</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/4.jpg')} alt="Card " /> <strong>Rahul Yadav</strong> On October 03, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/8.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-danger">Shop/Showroom</span>
                                                    <h6>Consectetur adipisicing elit</h6>
                                                    <p className="mb-0">Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/3.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 05, 2018</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card blog-card">
                                            <a href="index.html">
                                                <img className="card-img-top" src={require('../img/blog/9.png')} alt="Card" />
                                                <div className="card-body">
                                                    <span className="badge badge-primary">Industrial Building</span>
                                                    <h6>Fugiat odio officiis odit</h6>
                                                    <p className="mb-0">Mollitia ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="mb-0"><img className="rounded-circle" src={require('../img/user/2.jpg')} alt="" /> <strong>Rahul Yadav</strong> On October 06, 2018</p>
                                                </div>
                                            </a>
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