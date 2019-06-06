import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class AgencyList extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="section-padding bg-dark inner-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mt-0 mb-3 text-white">Agency List</h1>
                <div className="breadcrumbs">
                  <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Agency List</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-list card-list-view">
                      <a href="index.html">
                        <div className="row no-gutters">
                          <div className="col-lg-4 col-md-4">
                            <span className="badge badge-success">10 Property</span>
                            <img className="card-img-top" src={require('../img/agency-list/1.png')} alt="" />
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="card-body">
                              <h3>House in Kent Street</h3>
                              <h6 className="card-subtitle mt-1 mb-4 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum.  consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. </p>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-phone"></i> (+91) 123 456 7890</span>
                              <span><i className="mdi mdi-email"></i> iamosahan@gmail.com</span>
                              <span><i className="mdi mdi-link"></i> www.askbootstrap.com</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-list card-list-view">
                      <a href="index.html">
                        <div className="row no-gutters">
                          <div className="col-lg-4 col-md-4">
                            <span className="badge badge-danger">16 Property</span>
                            <img className="card-img-top" src={require('../img/agency-list/2.png')} alt="" />
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="card-body">
                              <h3>Rodeo Realty</h3>
                              <h6 className="card-subtitle mt-1 mb-4 text-muted"><i className="mdi mdi-home-map-marker"></i>  Hoboken, NJ, USA</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum.  consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. </p>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-phone"></i> (+91) 123 456 7890</span>
                              <span><i className="mdi mdi-email"></i> rodeorealty@gmail.com</span>
                              <span><i className="mdi mdi-link"></i> www.askbootstrap.com</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-list card-list-view">
                      <a href="index.html">
                        <div className="row no-gutters">
                          <div className="col-lg-4 col-md-4">
                            <span className="badge badge-info">60 Property</span>
                            <img className="card-img-top" src={require('../img/agency-list/3.png')} alt="" />
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="card-body">
                              <h3>Platinum Properties</h3>
                              <h6 className="card-subtitle mt-1 mb-4 text-muted"><i className="mdi mdi-home-map-marker"></i>   Hope Street (Stop P), London SW11, UK</h6>
                              <p className="mb-0">Ipsum dolor sit amet, consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum.  consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. </p>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-phone"></i> (+91) 123 456 7890</span>
                              <span><i className="mdi mdi-email"></i> platinum@gmail.com</span>
                              <span><i className="mdi mdi-link"></i> www.askbootstrap.com</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-list card-list-view">
                      <a href="index.html">
                        <div className="row no-gutters">
                          <div className="col-lg-4 col-md-4">
                            <span className="badge badge-primary">05 Property</span>
                            <img className="card-img-top" src={require('../img/agency-list/4.png')} alt="" />
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="card-body">
                              <h3>House in Kent Street</h3>
                              <h6 className="card-subtitle mt-1 mb-4 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum.  consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. </p>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-phone"></i> (+91) 123 456 7890</span>
                              <span><i className="mdi mdi-email"></i> iamosahan@gmail.com</span>
                              <span><i className="mdi mdi-link"></i> www.askbootstrap.com</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-list card-list-view">
                      <a href="index.html">
                        <div className="row no-gutters">
                          <div className="col-lg-4 col-md-4">
                            <span className="badge badge-dark">99 Property</span>
                            <img className="card-img-top" src={require('../img/agency-list/5.png')} alt="" />
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="card-body">
                              <h3>Rodeo Realty</h3>
                              <h6 className="card-subtitle mt-1 mb-4 text-muted"><i className="mdi mdi-home-map-marker"></i>  Hoboken, NJ, USA</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum.  consectetur adipiscing elit. Quisqu lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. </p>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-phone"></i> (+91) 123 456 7890</span>
                              <span><i className="mdi mdi-email"></i> rodeorealty@gmail.com</span>
                              <span><i className="mdi mdi-link"></i> www.askbootstrap.com</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <nav className="mt-5">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="index.html" tabIndex="-1"><i className="mdi mdi-chevron-left"></i></a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="index.html">1</a></li>
                    <li className="page-item"><a className="page-link" href="index.html">2</a></li>
                    <li className="page-item"><a className="page-link" href="index.html">3</a></li>
                    <li className="page-item"><a className="page-link" href="index.html">...</a></li>
                    <li className="page-item"><a className="page-link" href="index.html">10</a></li>
                    <li className="page-item">
                      <a className="page-link" href="index.html"><i className="mdi mdi-chevron-right"></i></a>
                    </li>
                  </ul>
                </nav>
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
