import React, { Component } from 'react';
import Header from '../../../Components/Header';
import JointTeam from '../../../Components/JointTeam';
import Footer1 from '../../../Components/Footer1';
import Footer2 from '../../../Components/Footer2';

export default class PropertiesList extends Component {
  render() {
    return (
      <div className="prooperties-list">
        <Header />
        <section className="osahan-slider">
          <div id="osahanslider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="index.htmlosahanslider" data-slide-to="0" className="active"></li>
              <li data-target="index.htmlosahanslider" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" id="property1">
                <div className="overlay"></div>
              </div>
              <div className="carousel-item" id="property2">
                <div className="overlay"></div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#osahanslider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#osahanslider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="slider-form inner-page-form">
            <div className="container">
              <h1 className="text-center text-white mb-5">Find Your Favorite Property</h1>
              <form>
                <div className="row no-gutters">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Any Location</option>
                        <option value="">Australia</option>
                        <option value="">Brazil</option>
                        <option value="">Cambodia</option>
                        <option value="">Dominica</option>
                        <option value="">France</option>
                        <option value="">Guyana</option>
                        <option value="">Hong Kong</option>
                        <option value="">Ireland</option>
                        <option value="">Japan</option>
                        <option value="">Malaysia</option>
                        <option value="">Nepal</option>
                        <option value="">Oman</option>
                        <option value="">Peru</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-city"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Any Status</option>
                        <option value="">Heigh </option>
                        <option value="">Midium</option>
                        <option value="">Normal</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-home-modern"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Any Type</option>
                        <option value="">Property Types</option>
                        <option value="">House/Villa</option>
                        <option value="">Flat</option>
                        <option value="">Plot/Land</option>
                        <option value="">Office Space</option>
                        <option value="">Shop/Showroom</option>
                        <option value="">Commercial Land</option>
                        <option value="">Warehouse/ Godown</option>
                        <option value="">Industrial Building</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-hotel"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Min. Bedrooms</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-magnify-minus-outline"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Min Size</option>
                        <option value="">100</option>
                        <option value="">200</option>
                        <option value="">300</option>
                        <option value="">400</option>
                        <option value="">500</option>
                        <option value="">600</option>
                        <option value="">700</option>
                        <option value="">800</option>
                        <option value="">900</option>
                        <option value="">1000</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-magnify-plus-outline"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Max Size</option>
                        <option value="">1000</option>
                        <option value="">2000</option>
                        <option value="">3000</option>
                        <option value="">4000</option>
                        <option value="">5000</option>
                        <option value="">6000</option>
                        <option value="">7000</option>
                        <option value="">8000</option>
                        <option value="">9000</option>
                        <option value="">10000</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-hot-tub"></i></div>
                      <select className="form-control select2" name="location">
                        <option disabled="" selected="">Baths</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="input-group"><button type="submit" className="btn btn-success btn-block no-radius font-weight-bold">SEARCH</button>   </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card sidebar-card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Property Type</h5>
                    <ul className="sidebar-card-list">
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> House/Villa <span className="sidebar-badge">90</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Flat <span className="sidebar-badge">60</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Plot/Land <span className="sidebar-badge">44</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Office Space <span className="sidebar-badge">38</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Shop/Showroom <span className="sidebar-badge">29</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Commercial Land <span className="sidebar-badge">28</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Warehouse/ Godown <span className="sidebar-badge">12</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Industrial Building <span className="sidebar-badge">8</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card sidebar-card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Property Status</h5>
                    <ul className="sidebar-card-list">
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> For Rent <span className="sidebar-badge">600</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> For Sale <span className="sidebar-badge">1200</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card sidebar-card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Property By City</h5>
                    <ul className="sidebar-card-list">
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> New York <span className="sidebar-badge">220</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Los Angeles <span className="sidebar-badge">150</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Chicago <span className="sidebar-badge">100</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Houston <span className="sidebar-badge">50</span></a></li>
                      <li><a href="index.html"><i className="mdi mdi-chevron-right"></i> Philadelphia <span className="sidebar-badge">23</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card sidebar-card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Featured Properties</h5>
                    <div id="featured-properties" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="index.htmlfeatured-properties" data-slide-to="0" className="active"></li>
                        <li data-target="index.htmlfeatured-properties" data-slide-to="1"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="card card-list">
                            <a href="index.html">
                              <span className="badge badge-success">For Sale</span>
                              <img className="card-img-top" src={require('../../../img/list/1.png')} alt="Card" />
                              <div className="card-body">
                                <h5 className="card-title">House in Kent Street</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                                <h2 className="text-success mb-0 mt-3">
                                  $130,000 <small>/month</small>
                                </h2>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="card card-list">
                            <a href="index.html">
                              <span className="badge badge-secondary">For Rent</span>
                              <img className="card-img-top" src={require('../../../img/list/2.png')} alt="Card" />
                              <div className="card-body">
                                <h5 className="card-title">Family House in Hudson</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hoboken, NJ, USA</h6>
                                <h2 className="text-success mb-0 mt-3">
                                  $127,000 <small>/month</small>
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
              <div className="col-lg-8 col-md-8">
                <div className="osahan_top_filter row">
                  <div className="col-lg-6 col-md-6 tags-action">
                    <span>For Rent <a href="index.html"><i className="mdi mdi-window-close"></i></a></span>
                    <span>Plot/Land <a href="index.html"><i className="mdi mdi-window-close"></i></a></span>
                  </div>
                  <div className="col-lg-6 col-md-6 sort-by-btn float-right">
                    <div className="view-mode float-right">
                      <a href="properties-grid.html"><i className="mdi mdi-grid"></i></a><a className="active" href="properties-list.html"><i className="mdi mdi-format-list-bulleted"></i></a>
                    </div>
                    <div className="dropdown float-right">
                      <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="mdi mdi-filter"></i> Sort by
                           </button>
                      <div className="dropdown-menu float-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="index.html"><i className="mdi mdi-chevron-right"></i> Popularity </a>
                        <a className="dropdown-item" href="index.html"><i className="mdi mdi-chevron-right"></i> New </a>
                        <a className="dropdown-item" href="index.html"><i className="mdi mdi-chevron-right"></i> Discount </a>
                        <a className="dropdown-item" href="index.html"><i className="mdi mdi-chevron-right"></i> Price: Low to High </a>
                        <a className="dropdown-item" href="index.html"><i className="mdi mdi-chevron-right"></i> Price: High to Low </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-list card-list-view">
                      <a href="index.html">
                        <div className="row no-gutters">
                          <div className="col-lg-5 col-md-5">
                            <span className="badge badge-success">For Sale</span>
                            <img className="card-img-top" src={require('../../../img/list/1.png')} alt="Card" />
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">House in Kent Street</h5>
                              <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                              <h2 className="text-success mb-0 mt-3">
                                $130,000 <small>/month</small>
                              </h2>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa"></i> Beds : <strong>3</strong></span>
                              <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>2</strong></span>
                              <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>587 sq ft</strong></span>
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
                          <div className="col-lg-5 col-md-5">
                            <span className="badge badge-secondary">For Rent</span>
                            <img className="card-img-top" src={require('../../../img/list/2.png')} alt="Card" />
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">Family House in Hudson</h5>
                              <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hoboken, NJ, USA</h6>
                              <h2 className="text-success mb-0 mt-3">
                                $127,000 <small>/month</small>
                              </h2>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa"></i> Beds : <strong>5</strong></span>
                              <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>3</strong></span>
                              <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>300 sq ft</strong></span>
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
                          <div className="col-lg-5 col-md-5">
                            <span className="badge badge-danger">For Sale</span>
                            <img className="card-img-top" src={require('../../../img/list/4.png')} alt="Card" />
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">Store Space Greenville</h5>
                              <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 250-260 3rd St, Hoboken, NJ 07030, USA</h6>
                              <h2 className="text-success mb-0 mt-3">
                                $25,000 <small>/month</small>
                              </h2>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa"></i> Beds : <strong>6</strong></span>
                              <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>4</strong></span>
                              <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>987 sq ft</strong></span>
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
                          <div className="col-lg-5 col-md-5">
                            <span className="badge badge-warning">For Rent</span>
                            <img className="card-img-top" src={require('../../../img/list/5.png')} alt="Card" />
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">Villa in Melbourne</h5>
                              <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> NJ 07305, USA</h6>
                              <h2 className="text-success mb-0 mt-3">
                                $12,000 <small>/month</small>
                              </h2>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa"></i> Beds : <strong>8</strong></span>
                              <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>4</strong></span>
                              <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>120 sq ft</strong></span>
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
                          <div className="col-lg-5 col-md-5">
                            <span className="badge badge-info">For Rent</span>
                            <img className="card-img-top" src={require('../../../img/list/6.png')} alt="Card" />
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">Villa on Hollywood Boulev</h5>
                              <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> The Village, Jersey City, NJ 07302, USA</h6>
                              <h2 className="text-success mb-0 mt-3">
                                $356, 000 <small>/month</small>
                              </h2>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa"></i> Beds : <strong>1</strong></span>
                              <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>3</strong></span>
                              <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>187 sq ft</strong></span>
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
                          <div className="col-lg-5 col-md-5">
                            <span className="badge badge-success">For Sale</span>
                            <img className="card-img-top" src={require('../../../img/list/3.png')} alt="Card" />
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">Loft Above The City</h5>
                              <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hope Street (Stop P), London SW11, UK</h6>
                              <h2 className="text-success mb-0 mt-3">
                                $55,000 <small>/month</small>
                              </h2>
                            </div>
                            <div className="card-footer">
                              <span><i className="mdi mdi-sofa"></i> Beds : <strong>2</strong></span>
                              <span><i className="mdi mdi-scale-bathroom"></i> Baths : <strong>1</strong></span>
                              <span><i className="mdi mdi-move-resize-variant"></i> Area : <strong>100 sq ft</strong></span>
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
