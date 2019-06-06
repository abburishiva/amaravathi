import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Typeahead } from 'react-typeahead'

let tempValue = 'a';
export default class HomeSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defVal: "",
            text: "",
            items: [],
            errors: []
        };
    };
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

    getKeyWords = (event) => {
        let callService = event.currentTarget.value.startsWith(tempValue);
        if ((!callService || tempValue === "") && event.keyCode !== 8) {
            this.getSkillsdata(event.currentTarget.value);
        };
        tempValue = event.currentTarget.value;
    };

    getCaps = (list) => {
        if (list) {
            return list.map(val => val.toUpperCase())
        }
    };

    data = () => {
        if (this.state.defVal) {
            this.props.history.push({
                pathname: 'sahayaks',
                search: '?' + this.state.defVal
            });
        } else {
            alert("enter the skills")
        };
    };
    handleOnChange = event => {
        this.setState({ defVal: event.currentTarget.value })
    }
    render() {
        return (
            <div>
                <section className="osahan-slider">
                    <div id="osahanslider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active carousel-img5">
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-form">
                        <div className="container">
                            <h1 className="text-center text-white mb-3">Find Your Sahayak</h1>
                            <form>
                                <div className="row no-gutters">
                                    <div className="col-md-2 col-1"></div>
                                    <div className="col-md-6 col-7">
                                        <div className="input-group">
                                            <div className="input-group-addon"></div>
                                            <Typeahead placeholder="Enter a Skill" className="width-align active"
                                                onChange={this.handleOnChange}
                                                value={this.state.defVal}
                                                options={this.getCaps(this.state.items)}
                                                onKeyUp={this.getKeyWords}
                                                onOptionSelected={(value) => this.setState({ defVal: value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-3">
                                        <button type="button" className="btn btn-success btn-align2 ml-2" onClick={this.data} >SEARCH</button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="text-center text-white mt-4">If you want to be a
                  &nbsp;<span className="text-align1">Sahayak</span> ,
                  <Link to="/Register" className="text-primary click-here"> click here.</Link>
                                    </h5>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

