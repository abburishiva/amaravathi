import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    state = {
        userData: null
    }
    componentDidMount() {
        this.getUserData()
    }
    getUserData = () => {
        const data = localStorage.getItem("userData");
        this.setState({ userData: data })
    }
    handleLogout = () => {
        const data = localStorage.removeItem("userData")
        localStorage.removeItem('userToken');
        this.setState({ userData: data })
        this.props.history.push('/login')
    }

    render() {
        return (
            <React.Fragment>
                <header className="header-section">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container px-2">
                            <NavLink to="/" className="navbar-brand theme-color logo"><img src={require('../img/brand.png')} alt='brand' /> <strong>Sahayak</strong>.me<br /><h6 className="theme-color text-align">Find your Sahayak</h6></NavLink>

                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                                    <NavLink exact activeClassName="active_nav" className="nav-link" to="/">Home</NavLink>
                                    <NavLink to="/sahayaks"  activeClassName="active_nav"  className="nav-link">Sahayaks</NavLink>
                                    {
                                        this.state.userData ?
                                            <NavLink className="nav-link"  activeClassName="active_nav"  to="/dashboard">Dashboard</NavLink> : null
                                    }
                                </ul>
                                <div className="my-2 my-lg-0">
                                    {this.state.userData ? <button onClick={this.handleLogout} className="btn btn-success btn-sm">Logout</button> : <ul className="list-inline main-nav-right m-0">
                                        <li className="list-inline-item">
                                            <NavLink to="/login" className="btn sign-in-btn btn-sm">Sign In</NavLink>
                                        </li>
                                        <li className="list-inline-item">
                                            <NavLink to="/register" className="btn btn-success btn-sm">Sign Up</NavLink>
                                        </li>
                                    </ul>}
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    };
};
export default withRouter(Header);