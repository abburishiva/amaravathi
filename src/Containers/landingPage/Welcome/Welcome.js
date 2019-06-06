import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = (props) => {
    return (
        <div className="col-md-8 col-xl-6">
            <div className="card card-body welcome-card">
                <h3 className="text-center welcome-heading">WELCOME TO <span className="theme-color">Sahayak.me</span> <Link to="/register"> <button type="button" className="close float-right" data-dismiss="modal">&times;</button></Link></h3>
                <p className="text-center">Sahayak.me helps candidates to improve their technical interviewing skills dramatically and gets them jobs. We just need a little more details to forward Sahayak.me.</p>
                <div className="info-section text-center my-2 radio">
                    <div>
                        <form>
                            <div className="custom-control custom-radio mx-2">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    onChange={props.handleOnChange}
                                    id="customRadio1"
                                    value="seeker"
                                    checked={props.selectedOption === 'seeker'}
                                    name="selectedOption" />
                                <label className="custom-control-label" htmlFor="customRadio1">I need a sahayak</label>
                            </div>
                            <div className="custom-control custom-radio mx-2">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    onChange={props.handleOnChange}
                                    id="customRadio"
                                    value="helper"
                                    checked={props.selectedOption === 'helper'}
                                    name="selectedOption"
                                />
                                <label className="custom-control-label" htmlFor="customRadio">I want to be a sahayak</label>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="py-2 px-1 text-right button-align">
                    <button className="btn btn-secondary btn-sm" onClick={() => props.handleNext(props.selectedOption)}>NEXT</button>
                </div>
            </div>
        </div>
    )
};
export default Welcome;