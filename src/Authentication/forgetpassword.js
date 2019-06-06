import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 mx-auto">
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Reset Password</h5>
                                        <form>
                                            <div className="form-group">
                                                <label>Email address <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Your Email or Username" />
                                            </div>
                                            <button type="submit" className="btn btn-success btn-block">RESET PASSWORD</button>
                                        </form>
                                        <div className="mt-4 text-center">
                                            Don't have an account?  <Link to="/register" className="dropdown-item">Register</Link>
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