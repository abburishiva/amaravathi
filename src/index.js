import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios'

axios.defaults.headers.common['x-access-token'] = localStorage.getItem('userToken');
axios.defaults.baseURL = "https://api.stag.talentscreen.io";

class AppRoot extends React.Component {
    render() {
        return <App />
    }
}
const RootApp = withRouter(AppRoot)

ReactDOM.render(
    <Router>
        <RootApp />
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
