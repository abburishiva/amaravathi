import React, { Component } from 'react'

export default class HomeSectionFive extends Component {
    render() {
        return (
            <div>
                <section className="section-padding border-top">
                    <div className="section-title text-center mb-5">
                        <h2>Blogs We Wrote For You</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="card blog-card">
                                    <a href="index.html">
                                        <img className="card-img-top" src={require('../../../img/blog/1.png')} alt="Card" />
                                        <div className="card-body">
                                            <span className="badge badge-success">House/Villa</span>
                                            <h6>Possimus aut mollitia eum ipsum</h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                        </div>
                                        <div className="card-footer">
                                            <p className="mb-0"><img className="rounded-circle" src={require('../../../img/user/1.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 03, 2018</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card blog-card">
                                    <a href="index.html">
                                        <img className="card-img-top" src={require('../../../img/blog/2.png')} alt="Card" />
                                        <div className="card-body">
                                            <span className="badge badge-danger">Shop/Showroom</span>
                                            <h6>Consectetur adipisicing elit</h6>
                                            <p className="mb-0">Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                        </div>
                                        <div className="card-footer">
                                            <p className="mb-0"><img className="rounded-circle" src={require('../../../img/user/2.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 05, 2018</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card blog-card">
                                    <a href="index.html">
                                        <img className="card-img-top" src={require('../../../img/blog/3.png')} alt="Card" />
                                        <div className="card-body">
                                            <span className="badge badge-info">Industrial Building</span>
                                            <h6>Fugiat odio officiis odit</h6>
                                            <p className="mb-0">Mollitia ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                        </div>
                                        <div className="card-footer">
                                            <p className="mb-0"><img className="rounded-circle" src={require('../../../img/user/3.jpg')} alt="Card" /> <strong>Rahul Yadav</strong> On October 06, 2018</p>
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
