import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Containers/Home/Home';
import Login from '../Authentication/login';
import Register from '../Authentication/register';
import LandingPage from '../Containers/landingPage/landingPage';
import Dashboard from '../Containers/Dashboard/Dashboard';
import SahayaksPage from '../Containers/SahayaksPage/SahayaksPage';

export default class Routing extends Component {
    render() {
        const data = JSON.parse(localStorage.getItem("userData"));
        let routes = (
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/sahayaks" component={SahayaksPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/landing-page" component={LandingPage} />
                <Redirect to="/" />
            </Switch>
        )
        if (data) {
            routes = (
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/sahayaks" component={SahayaksPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <React.Fragment>
                {routes}
            </React.Fragment>
        );
    }
};
