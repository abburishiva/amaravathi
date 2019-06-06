import React, { Component } from 'react'
import Header from '../../Components/Header';

export default class Dashboard extends Component {
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
                        </div>
                    </div>
                    <div className="slider-form inner-page-form">
                        <div className="container">
                            <h1 className="text-center text-white mb-4">Find Your Sahayak</h1>
                            <form>
                                <div className="row no-gutters">
                                    <div className="col-md-2 col-1"></div>
                                    <div className="col-md-6 col-7">
                                        <input className="form-control" style={{ height: "43px" }} placeholder="Search for skills " />
                                    </div>
                                    <div className="col-md-2 col-3 property-align">
                                        <button type="button" className="btn btn-success btn-align2">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
