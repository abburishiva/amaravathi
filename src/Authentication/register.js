import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import './authentication.css';
export default class Register extends Component {
    state = {
        fullname: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmpassword: '',
        errors: [],
        loading: false
    }
    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleRegisterSubmit = event => {
        event.preventDefault()
        if (this.formValid()) {
            this.setState({ errors: [], loading: true })
            this.props.history.push({
                pathname: '/landing-page',
                state: { ...this.state }
            })
        }
    };
    formValid = () => {
        let errors = [];
        let error;
        if (this.isAllfieldsEntered(this.state)) {
            error = { message: "Please fill all the details" }
            this.setState({ errors: errors.concat(error) })
            return false;
        } else if (this.isPasswordCheck(this.state)) {
            error = { message: "Password should contain atleast 6 characters" }
            this.setState({ errors: errors.concat(error) })
            return false
        } else if (this.isConfirmPassword(this.state)) {
            error = { message: "please check password" }
            this.setState({ errors: errors.concat(error) })
            return false
        }
        else {
            return true;
        }
    }
    isAllfieldsEntered = ({ fullname, email, password,confirmpassword, phonenumber }) => {
        return !fullname.length || !email.length || !password.length || !confirmpassword.length || !phonenumber.length
    }

    isPasswordCheck = ({ password }) => {
        return password.length < 6
    }
    isConfirmPassword = ({ confirmpassword, password }) => {
        if (confirmpassword !== password) {
            return true;
        }
    }
    setErrors = () => {
        this.setState({ errors: [] })
    }

    displayErrors = errors => errors.map((error, i) => (
        <div className="alert alert-danger alert-dismissible alerts-styles" key={i}>
            <button type="button" className="close" onClick={this.setErrors}>&times;</button>
            <strong>Error..!</strong> {error.message}
        </div>
    ));

    render() {
        const { fullname, email, phonenumber, password, confirmpassword, errors, loading } = this.state;
        return (
            <div>
                <Header />
                {
                    errors.length > 0 && this.displayErrors(errors)
                }
                <section className="register-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 mx-auto">
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4 text-center">Register</h5>
                                        <form onSubmit={this.handleRegisterSubmit}>
                                            <div className="form-group">
                                                <label>Full Name <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Full Name"
                                                    name="fullname"
                                                    value={fullname}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address <span className="text-danger">*</span></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email Address"
                                                    name="email"
                                                    value={email}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Mobile Number <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Mobile Number"
                                                    name="phonenumber"
                                                    value={phonenumber}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password <span className="text-danger">*</span></label>
                                                <input
                                                    autoComplete=""
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    value={password}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Confirm Password <span className="text-danger">*</span></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter Confirm Password"
                                                    name="confirmpassword"
                                                    value={confirmpassword}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <button type="submit" disabled={loading} className={`btn btn-success btn-block`}>
                                                {loading ? <span className="spinner-border spinner-border-sm"></span> : null} REGISTER
                                            </button>
                                        </form>
                                        <div className="mt-4 text-center login-with-social">
                                            <button type="button" className="btn btn-facebook btn-block"><i className="fa fa-facebook"></i> Login With Facebook</button>
                                            <button type="button" className="btn btn-google btn-block"><i className="fa fa-google-plus"></i> Login With Google</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer2 />
            </div>
        );
    };
};