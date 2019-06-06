import React from 'react';
import ReactTags from 'react-tag-autocomplete';
import { Redirect } from 'react-router-dom';

const Sahayak = (props) => {
    let redirect = null;
    if (props.isRedirect) {
        redirect = <Redirect to="/login" />
    }
    return (
        <div className="col-md-8 col-xl-6">
            {redirect}
            <div className="card card-body">
                <div className="py-2 px-1">
                    <div className="text-center mb-3">
                        <h4>Let us Know about your self</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="usr">Skills you are expertise in:</label>
                                <ReactTags
                                    tags={props.skills}
                                    suggestions={props.suggestions}
                                    handleDelete={props.handleDeleteSkill}
                                    handleAddition={props.handleAddSkill}
                                    handleInputChange={props.handleInputChange}
                                    placeholder="Add your skills" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="communication">Mode of communication:</label>
                                <select name="communicationMode" value={props.communicationMode} onChange={props.handleOnChange} className="form-control" id="communication">
                                    <option value="" disabled>Select mode of communication</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="availability">How often you can be a sahayak:</label>
                                <select name="availability"
                                    value={props.availability}
                                    onChange={props.handleOnChange}
                                    className="form-control" id="availability">
                                    <option value="" disabled>Select an option</option>
                                    <option value="Weekdays">Weekdays</option>
                                    <option value="Weekends">Weekends</option>
                                    <option value="All days in a week">All days in a week</option>
                                    <option value="Once in a week">Once in a week</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="comment">Explain About your self:</label>
                                <textarea name="details" onChange={props.handleOnChange} value={props.details} className="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary btn-sm float-left" onClick={props.handleback}>BACK</button>
                    <button className="btn btn-secondary btn-sm float-right" disabled={props.loading} onClick={props.handleDataSubmit}>
                        {props.loading ? <span className="spinner-border spinner-border-sm"></span> : null} SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Sahayak;