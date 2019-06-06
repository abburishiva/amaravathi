import React, { Component } from 'react';
import './landingPage.css'
import Seeker from './Seeker/Seeker';
import Welcome from './Welcome/Welcome';
import Helper from './Helper/Helper';
import Axios from 'axios';
import moment from 'moment';
import BackDrop from './BackDrop/BackDrop';

let tempValue = "a"
class SahayakDetails extends Component {
    state = {
        selectedOption: "seeker",
        welcome: false,
        tab1: false,
        tab2: false,
        skills: [],
        suggestions: [],
        busy: true,
        errors: [],
        communicationMode: '',
        availability: '',
        details: '',
        dateRequired: moment().format('YYYY-MM-DD'),
        loading: false,
        isRedirect: false
    }
    componentDidMount() {
        if (this.state.tab1 | this.state.tab2) {
            this.getSkillsSuggestions('a')
        }
    }
    getSkillsSuggestions = async (key) => {
        key = key ? key : 'a'
        await Axios.get("/v1/autocomplete?limit=100&skill=true&q=" + key)
            .then(res => {
                let skillsData = [];
                for (let suggestionSkill in res.data) {
                    skillsData.push({
                        name: res.data[suggestionSkill]
                    })
                }
                this.setState({ suggestions: this.state.suggestions.concat(skillsData) })
            })
            .catch(error => {
                this.setState({ errors: this.state.errors.concat(error) })
            })
    }
    handleDeleteSkill = (i) => {
        const skills = this.state.skills.slice(0)
        skills.splice(i, 1)
        this.setState({ skills })
    }
    handleAddSkill = (skill) => {
        this.setState({ skills: this.state.skills.concat(skill) })
    }
    handleInputChange = (input) => {
        let callService = input.startsWith(tempValue);
        if (!callService) {
            this.getSkillsSuggestions(input)
        };
        tempValue = input;
        if (!this.state.busy) {
            this.setState({ busy: true })
            return fetch(`query=${input}`).then((result) => {
                this.setState({ busy: false })
            })
        }
    }
    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleNext = (val) => {
        if (val === 'helper') {
            this.setState({ tab1: true })
        }
        if (val === 'seeker') {
            this.setState({ tab2: true })
        }
    }
    handleback = () => {
        this.setState({ welcome: true, tab1: false, tab2: false, skills: [], communicationMode: '', availability: '', details: '' })
    }
    handleDataSubmit = () => {
        if (this.isFormValid(this.state)) {
            this.setState({ errors: [], loading: true })
            let postDate = null
            if (this.state.selectedOption === "helper") {
                const { selectedOption, skills, communicationMode, availability, details } = this.state;
                const { fullname, email, phonenumber, password } = this.props.history.location.state
                postDate = {
                    user_profile: {
                        name: fullname,
                        email: email,
                        phone_number: phonenumber,
                        password: password
                    },
                    role: selectedOption,
                    work_details: {
                        skills: skills,
                        communication_mode: communicationMode,
                        availability: availability,
                        task_description: details
                    }
                }
            } else if (this.state.selectedOption === "seeker") {
                const { selectedOption, skills, communicationMode, availability, details, dateRequired } = this.state;
                const { fullname, email, phonenumber, password } = this.props.history.location.state
                postDate = {
                    user_profile: {
                        name: fullname,
                        email: email,
                        phone_number: phonenumber,
                        password: password
                    },
                    role: selectedOption,
                    work_details: {
                        skills: skills,
                        communication_mode: communicationMode,
                        availability: availability,
                        task_description: details,
                        completion_date: dateRequired
                    }
                }
            }
            Axios.post('/v1/job_help_requests', postDate)
                .then(res => {
                    this.setState({ loading: false, isRedirect: true })
                })
                .catch(err => {
                    let error = { message: "This email already exists" }
                    this.setState({ errors: this.state.errors.concat(error), loading: false })
                })
        }
    }
    isFormValid = ({ skills, communicationMode, availability, details, dateRequired }) => {
        let errors = [];
        let error;
        if (!skills.length) {
            error = { message: "please enter skills" }
            this.setState({ errors: errors.concat(error) });
            return false
        }
        else if (!communicationMode.length) {
            error = { message: "please provide mode of communication" }
            this.setState({ errors: errors.concat(error) });
            return false
        } else if (!availability.length) {
            error = { message: "please provide type of sahayak you need" }
            this.setState({ errors: errors.concat(error) });
            return false
        }
        else if (!details.length) {
            error = { message: "please tell us about yourself to continue" }
            this.setState({ errors: errors.concat(error) });
            return false
        }
        else {
            return true
        }
    }
    displayErrors = errors => errors.map((error, i) => (
        <div className="alert alert-danger alert-dismissible alerts-styles" key={i}>
            <button type="button" className="close" onClick={this.setErrors}>&times;</button>
            <strong>Error..!</strong> {error.message}
        </div>
    ));

    setErrors = () => {
        this.setState({ errors: [] })
    }
    render() {
        let detailsToShow = <Welcome
            handleOnChange={this.handleOnChange}
            selectedOption={this.state.selectedOption}
            handleNext={this.handleNext}
        />
        if (this.state.selectedOption === 'helper' && this.state.tab1) {
            detailsToShow = <Helper
                handleback={this.handleback}
                skills={this.state.skills}
                suggestions={this.state.suggestions}
                handleDeleteSkill={this.handleDeleteSkill}
                handleAddSkill={this.handleAddSkill}
                handleInputChange={this.handleInputChange}
                communicationMode={this.state.communicationMode}
                handleOnChange={this.handleOnChange}
                availability={this.state.availability}
                details={this.state.details}
                handleDataSubmit={this.handleDataSubmit}
                loading={this.state.loading}
                isRedirect={this.state.isRedirect}
            />
        }
        if (this.state.selectedOption === 'seeker' && this.state.tab2) {
            detailsToShow = <Seeker
                handleback={this.handleback}
                skills={this.state.skills}
                suggestions={this.state.suggestions}
                handleDeleteSkill={this.handleDeleteSkill}
                handleAddSkill={this.handleAddSkill}
                handleInputChange={this.handleInputChange}
                communicationMode={this.state.communicationMode}
                handleOnChange={this.handleOnChange}
                availability={this.state.availability}
                details={this.state.details}
                dateRequired={this.state.dateRequired}
                handleDataSubmit={this.handleDataSubmit}
                loading={this.state.loading}
                isRedirect={this.state.isRedirect}
            />

        }
        return (
            <div className="container-fluid details-section">
                <BackDrop />
                {
                    this.state.errors.length > 0 && this.displayErrors(this.state.errors)
                }
                <div className="row">
                    <div className="col-md-2 col-xl-3"> </div>
                    {detailsToShow}
                </div>
            </div>
        );
    }
}
export default SahayakDetails;
