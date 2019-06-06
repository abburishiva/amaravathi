import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
class HomeMapSection extends Component {
    render() {
        return (
            <div>
                <section className="osahan-slider">
                    <div id="map">
                        <Map google={this.props.google} zoom={14}
                            initialCenter={{
                                lat: 17.4399,
                                lng: 78.4983
                            }}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                        </Map>
                    </div>
                    <div className="slider-form inner-page-form map-slider-form">
                        <div className="container">
                            <form>
                                <div className="row no-gutters">
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <div className="input-group">
                                            <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple"></i></div>
                                            <select className="form-control select2" name="location">
                                                <option value="" disabled="" selected="">Any Location</option>
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
                                                <option value="" disabled="" selected="">Any Status</option>
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
                                                <option value="" disabled="" selected="">Any Type</option>
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
                                                <option value="" disabled="" selected="">Min. Bedrooms</option>
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
                                                <option value="" disabled="" selected="">Min Size</option>
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
                                                <option value="" disabled="" selected="">Max Size</option>
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
                                                <option value="" disabled="" selected="">Baths</option>
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
                                            <button type="submit" className="btn btn-success btn-block no-radius font-weight-bold">SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCgZ4MSAN1Qa88ma5OWu4urlk0x4N7k-wE")
})(HomeMapSection)
