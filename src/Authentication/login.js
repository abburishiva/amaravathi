import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import axios from 'axios';
import firebase from '../firbase';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: [],
        loading: false,
        usersRef: firebase.database().ref('users'),
        rememberMe: false
    }
    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const email = rememberMe ? localStorage.getItem('email') : '';
        const password = rememberMe ? localStorage.getItem('password') : '';
        this.setState({ email, rememberMe, password });
    }

    handleOnChange = e => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [input.name]: value });
    }
    handleLoginSubmit = event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            const { email, password, rememberMe } = this.state;
            localStorage.setItem("rememberMe", rememberMe);
            localStorage.setItem("email", rememberMe ? email : '');
            localStorage.setItem("password", rememberMe ? password : '');

            this.setState({ errors: [], loading: true })
            const data = {
                user_profile: {
                    email: this.state.email,
                    password: this.state.password
                }
            }
            axios.post('v1/job_help_requests/login', data)
                .then(response => {
                    let userData = response.data.token
                    localStorage.setItem('userData', JSON.stringify(response.data))
                    localStorage.setItem('userToken', userData)
                    this.setState({ loading: false })
                    if (userData) {
                        this.props.history.push('/')
                    } else {
                        this.props.history.push('/login')
                    }
                })
                .catch(err => {
                    let error = { message: "please check your email or password" }
                    this.setState({ errors: this.state.errors.concat(error), loading: false })
                })
        }
    }
    isFormValid = ({ email, password }) => {
        let errors = [];
        let error
        if (email.length > 0 && password.length > 0) {
            return true
        } else {
            error = { message: "Please enter valid email and password" }
            this.setState({ errors: errors.concat(error) })
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
    handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((createUser) => {
                this.saveUser(createUser).then(() => {
                    if (createUser) {
                        this.props.history.push('/');
                    } else {
                        this.props.history.push('/login')
                    }
                })
            }).catch(err => {
            })
    }

    handleFacebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((createUser) => {
                this.saveUser(createUser).then(() => {
                    if (createUser) {
                        this.props.history.push('/home with PropertyGrid');
                    } else {
                        this.props.history.push('/login');
                    }
                }).catch(err => {

                })

            })

    }

    saveUser = createUser => {
        return this.state.usersRef.child(createUser.user.uid).set({
            name: createUser.user.displayName,
            avatar: createUser.user.photoURL
        })
    }

    render() {
        const { errors, email, password, loading } = this.state;
        return (
            <div>
                <Header />
                {
                    errors.length > 0 && this.displayErrors(errors)
                }
                <section className="login-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 mx-auto">
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4 text-center">Login</h5>
                                        <form onSubmit={this.handleLoginSubmit}>
                                            <div className="form-group">
                                                <label>Email address <span className="text-danger">*</span></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email address"
                                                    name="email"
                                                    value={email}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password <span className="text-danger">*</span></label>
                                                <input
                                                    type="password"
                                                    autoComplete=""
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    value={password}
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox mb-2">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                        name="rememberMe"
                                                        checked={this.state.rememberMe}
                                                        onChange={this.handleOnChange}
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                </div>
                                            </div>
                                            <button type="submit" disabled={loading} className="btn btn-success btn-block">SIGN IN</button>
                                        </form>
                                        <div className="mt-4 text-center login-with-social">
                                            <button type="button" className="btn btn-facebook btn-block" onClick={this.handleFacebookLogin}><i className="mdi mdi-facebook"></i> Login With Facebook</button>
                                            <button type="button" className="btn btn-google btn-block" onClick={this.handleGoogleLogin}><i className="mdi mdi-google-plus"></i> Login With Google</button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <Link to="/forgotpassword" className="dropdown-item">Forget your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer2 />
            </div>
        )
    }
}