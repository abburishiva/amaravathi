import React, { Component } from 'react'

export default class HomePropertiesSection extends Component {
  render() {
    return (
      <div>
         <section className="osahan-slider slider-h-auto">
         <div id="osahanslider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#osahanslider" data-slide-to="0" className="active"></li>
               <li data-target="#osahanslider" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
               <div className="carousel-item active carousel-img1">
                  <div className="overlay"></div>
                  <div className="section-padding">
                     <div className="container banner-list pl-5 pr-5">
                        <div className="row">
                           <div className="col-lg-8 col-md-8">
                              <h1 className="mt-5 mb-4 text-white">Find Your Favorite Property</h1>
                              <h6 className="mb-5 text-white">Vivamus luctus egestas convallis. Vestibulum arcu sapien,<br/> consequat a urna a, gravida molestie est. Mauris iaculis felis id elit laoreet,<br/> vitae blandit odio lacinia. Etiam viverra arcu lobortis semper posuere. Curabitur mattis a erat at ultricies. Duis ac porta est</h6>
                              <button className="btn btn-success mr-2" type="button">Contact Us</button>
                              <button className="btn btn-outline-success read-more-button" type="button">Read More</button>
                           </div>
                           <div className="col-lg-4 col-md-4">
                              <div className="card card-list mb-0 box-shadow-none">
                                 <a href="index.html">
                                    <span className="badge badge-success">For Sale</span>
                                    <img className="card-img-top" src={require('../../../img/list/1.png')} alt="Card"/>
                                    <div className="card-body">
                                       <h5 className="card-title">House in Kent Street</h5>
                                       <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6>
                                       <h2 className="text-success-custom mb-0 mt-3">
                                          $130,000 <small>/month</small>
                                       </h2>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item carousel-img1">
                  <div className="overlay"></div>
                  <div className="section-padding">
                     <div className="container banner-list pl-5 pr-5">
                        <div className="row">
                           <div className="col-lg-8 col-md-8">
                              <h1 className="mt-5 mb-4 text-white">Find Your Favorite Property</h1>
                              <h6 className="mb-5 text-white">Vivamus luctus egestas convallis. Vestibulum arcu sapien,<br/> consequat a urna a, gravida molestie est. Mauris iaculis felis id elit laoreet,<br/> vitae blandit odio lacinia. Etiam viverra arcu lobortis semper posuere. Curabitur mattis a erat at ultricies. Duis ac porta est</h6>
                              <button className="btn btn-success mr-2" type="button">Contact Us</button>
                              <button className="btn btn-outline-success read-more-button" type="button">Read More</button>
                           </div>
                           <div className="col-lg-4 col-md-4 ">
                              <div className="card card-list box-shadow-none">
                                 <a href="index.html">
                                    <span className="badge badge-danger">For Rent</span>
                                    <img className="card-img-top" src={require('../../../img/list/2.png')} alt="Card"/>
                                    <div className="card-body">
                                       <h5 className="card-title">Family House in Hudson</h5>
                                       <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> Hoboken, NJ, USA</h6>
                                       <h2 className="text-success-custom mb-0 mt-3">
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
            <a className="carousel-control-prev" href="#osahanslider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#osahanslider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
         </div>
      </section>
      </div>
    )
  }
}
