import React, { Component } from 'react';
import Header from '../../Components/Header';
import JointTeam from '../../Components/JointTeam';
import Footer1 from '../../Components/Footer1';
import Footer2 from '../../Components/Footer2';
import { Typeahead } from 'react-typeahead';
import Axios from 'axios';
import TutorsData from '../../Tutors.json'
import Cards from '../../Components/Cards/Cards';

let tempValue = 'a';

export default class SahayakPage extends Component {
    state = {
        skillsInfo: [],
        errors: [],
        defVal: "",
        items: []
    }
    componentDidMount() {
        this.getSkillsdata('a')
    };
    getSkillsdata = async (key) => {
        key = key ? key : 'a'
        await Axios.get("/v1/autocomplete?limit=100&skill=true&q=" + key)
            .then(res => {
                this.setState({ items: res.data })
            })
            .catch(error => {
                this.setState({ errors: this.state.errors.concat(error) })
            })
    };
    handleOnChange = event => {
        this.setState({ defVal: event.currentTarget.value })
    }
    getCaps = (list) => {
        if (list) {
            return list.map(val => val.toUpperCase())
        }
    };
    getKeyWords = (event) => {
        let callService = event.currentTarget.value.startsWith(tempValue);
        if ((!callService || tempValue === "") && event.keyCode !== 8) {
            this.getSkillsdata(event.currentTarget.value);
        };
        tempValue = event.currentTarget.value;
    };

    render() {
        return (
            <div>
                <Header />
                <section className="osahan-slider">
                    <div id="osahanslider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner carousel-inner1" role="listbox">
                            <div className="carousel-item active" id="property3">
                                <div className="overlay"></div>
                            </div>
                            <div className="carousel-item" id="property2">
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-form inner-page-form">
                        <div className="container">
                            <h1 className="text-center text-white mb-4">Find Your Sahayak</h1>
                            <form>
                                <div className="row no-gutters">
                                    <div className="col-md-2 col-1"></div>
                                    <div className="col-md-6 col-7">
                                        <Typeahead placeholder="Enter a Skill" className="width-align active"
                                            onChange={this.handleOnChange}
                                            value={this.state.defVal}
                                            options={this.getCaps(this.state.items)}
                                            onKeyUp={this.getKeyWords}
                                            onOptionSelected={(value) => this.setState({ defVal: value })}
                                        />
                                    </div>
                                    <div className="col-md-2 col-3 property-align">
                                        <button type="button" className="btn btn-success btn-align2">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Skill Type</h5>
                                        <ul className="sidebar-card-list">
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> React.js <span className="sidebar-badge">90</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Angular.js <span className="sidebar-badge">60</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Spring <span className="sidebar-badge">44</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> ASP.NET <span className="sidebar-badge">38</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> MongoDB <span className="sidebar-badge">29</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Selenium <span className="sidebar-badge">28</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> ReactNative<span className="sidebar-badge">12</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Java <span className="sidebar-badge">8</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Property Status</h5>
                                        <ul className="sidebar-card-list">
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Vikas <span className="sidebar-badge">600</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> For Sale <span className="sidebar-badge">1200</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">Sort By Instructor</h5>
                                        <ul className="sidebar-card-list">
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Vineeth <span className="sidebar-badge">220</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Vikas <span className="sidebar-badge">150</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Bhaskar <span className="sidebar-badge">100</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Chaitanya <span className="sidebar-badge">50</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Aryav <span className="sidebar-badge">23</span></a></li>
                                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Lakshay <span className="sidebar-badge">23</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Featured Skills</h5>
                                        <div id="featured-properties" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#featured-properties" data-slide-to="0" className="active"></li>
                                                <li data-target="#featured-properties" data-slide-to="1"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="card card-list">
                                                        <a href="index.html">
                                                            <span className="badge badge-success custom-badge">FEATURED</span>
                                                            <div className="text-center bg-dark">
                                                                <img width="100" height="80" src={require('../../img/javascript.png')} alt="Card" />
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-title">JavaScript</h5>
                                                                <h2 className="text-success-custom mb-0 mt-3">
                                                                    $130 <small>/month</small>
                                                                </h2>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="card card-list">
                                                        <a href="index.html">
                                                            <span className="badge badge-secondary custom-badge">HIGHEST RATED</span>
                                                            <div className="text-center bg-dark">
                                                                <img width="100" height="80" src={require('../../img/list/angular.png')} alt="Card" />
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-title">Angularjs</h5>
                                                                <h2 className="text-success-custom mb-0 mt-3">
                                                                    $127 <small>/month</small>
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
                            <div className="col-lg-9 col-md-9">
                                <div className="osahan_top_filter row">
                                    <div className="col-lg-12"> </div>
                                    <div className="col-lg-6 col-md-6 tags-action">
                                        <span>Vikas <a href="index.html"><i className="fa fa-times"></i></a></span>
                                        <span className="ml-2">ReactNative <a href="index.html"><i className="fa fa-times"></i></a></span>
                                    </div>

                                    <div className="col-lg-6 col-md-6 sort-by-btn float-right">
                                        <div className="row">
                                            <div className="col-lg-5 col-6">
                                                <div className="view-mode float-right">
                                                    <a className="active" href="properties-grid.html"><i className="fa fa-th-large"></i></a><a href="properties-list.html"><i className="fa fa-list"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="dropdown float-right">
                                                    <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-filter"></i> Sort by</button>
                                                    <div className="dropdown-menu float-right" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="index.html"><i className="fa fa-angle-right"></i> Popularity </a>
                                                        <a className="dropdown-item" href="index.html"><i className="fa fa-angle-right"></i> New </a>
                                                        <a className="dropdown-item" href="index.html"><i className="fa fa-angle-right"></i> Discount </a>
                                                        <a className="dropdown-item" href="index.html"><i className="fa fa-angle-right"></i> Price: Low to High </a>
                                                        <a className="dropdown-item" href="index.html"><i className="fa fa-angle-right"></i> Price: High to Low </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {TutorsData && <Cards
                                        data={TutorsData}
                                        col={6}
                                        {...this.props}
                                    />}
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
