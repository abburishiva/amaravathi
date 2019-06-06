import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer1 from '../../src/Components/Footer1';
import Footer2 from '../../src/Components/Footer2';

export default class Error extends Component {
    render() {
        return (
            <div>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 mx-auto text-center">
                                <h1><img className="img-fluid" src={require('../../img/404.png')} alt="404" /></h1>
                                <h1>Sorry! Page not found.</h1>
                                <p className="land">Unfortunately the page you are looking for has been moved or deleted.</p>
                                <div className="mt-5">
                                <Link to="/" className="btn btn-success btn-lg"><i className="fa fa-home"></i> GO TO HOME PAGE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer1 />
                <Footer2 />
            </div>
        );
    };
};