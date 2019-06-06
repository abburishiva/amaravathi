import React from 'react';
import Modal from 'react-awesome-modal';

export default class Cards extends React.Component {
    state = {
        modelVisible: false,
        skill: "",
        name: "",
        userName: "",
        email: "",
        phoneNumber: "",
        user: localStorage.getItem("userData")
    };
    openModal = data => {
        if (!this.state.user) {
            this.props.history.push("/login")
        } else {
            this.setState({ skill: data.skill, name: data.name, modelVisible: true });
        }
    };
    closeModal = () => this.setState({
        modelVisible: false,
        skill: "",
        name: "",
        userName: "",
        phoneNumber: "",
        email: ""
    });

    handleOnChange = event => this.setState({ [event.target.name]: event.target.value });

    sendContactData = () => {
        const { userName, email, phoneNumber } = this.state;

        if (!userName.length || !email.length || !phoneNumber.length) {
            window.alert("Fill all the details")
        } else {
            // const contactData = {
            //     name: userName,
            //     email: email,
            //     phoneNumber: phoneNumber
            // };
            this.setState({
                modelVisible: false,
                skill: "",
                name: "",
                userName: "",
                phoneNumber: "",
                email: ""
            });
        }
    }


    render() {
        const { data, col } = this.props;
        const { modelVisible, skill, name, userName, email, phoneNumber } = this.state;
        return (
            <>
                {
                    data.map((cardsData, i) => <React.Fragment key={i}>
                        <div className={`col-lg-${col} col-md-4`}>
                            <div className="card card-list">
                                <div>
                                    <span className="badge badge-success cursor_pointer" onClick={() => this.openModal(cardsData)}>Contact</span>
                                    <div className="text-center card-body card_height">
                                        <img width="100" height="80" src={require(`../../img/list/${cardsData.imgUrl}`)} alt="Card" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{cardsData.skill}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted"><i className="mdi mdi-home-map-marker"></i> {cardsData.name}</h6>
                                        <h2 className="text-success-custom mb-0 mt-3">
                                            ${cardsData.currency} <small>/month</small>
                                        </h2>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <span> Completed Jobs : <strong>{cardsData.count}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>)
                }
                <section>
                    <Modal visible={modelVisible} width="450" height="310" effect="fadeInDown" onClickAway={this.closeModal}>
                        <div className="p-3">
                            <h3>{skill}</h3>
                            <span>Tutor Name: {name}</span>
                            <div className="mt-3">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        name="userName"
                                        value={userName}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Number"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-danger btn-sm float-left " onClick={this.closeModal}>Close</button>
                                <button className="btn btn-primary btn-sm  float-right " onClick={this.sendContactData}>Submit</button>
                            </div>
                        </div>
                    </Modal>
                </section>
            </>
        )
    };
};