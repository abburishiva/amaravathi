import React, { Component } from 'react';
import Header from '../Components/Header';
import JointTeam from '../Components/JointTeam';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

export default class Terms extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="section-padding bg-dark inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Terms & Conditions</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="index.html">Home</a>  /  <span className="text-success">Terms & Conditions</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 mx-auto">
                                <div className="card padding-card">
                                    <div className="card-body">
                                        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus nisl, fringilla vitae orci non, mollis dapibus dui.</p>
                                        <hr />
                                        <p className="h5"> User Account, Password, and Security: </p>
                                        <p>  Vivamus luctus egestas convallis. Vestibulum arcu sapien, consequat a urna a, gravida molestie est. Mauris iaculis felis id elit laoreet, vitae blandit odio lacinia. Etiam viverra arcu lobortis semper posuere. Curabitur mattis a erat at ultricies. Duis ac porta est, non rhoncus orci. Sed venenatis, nunc sit amet eleifend consequat, nibh leo laoreet purus, id pretium purus quam quis magna. Nullam mollis velit eu velit congue, quis facilisis tortor vestibulum. Sed malesuada nibh vitae neque pulvinar pretium. Nullam fermentum aliquet metus ac sollicitudin. </p>
                                        <hr />
                                        <p className="h5">  User Conduct and Rules:  </p>
                                        <p>  Donec sit amet convallis est. Morbi molestie, est sed viverra vehicula, ligula sem egestas urna, vel porta erat purus nec quam. Nunc ac iaculis sem. Aenean varius augue quam, et fringilla turpis porta mollis. Pellentesque quis cursus erat, a molestie neque. Fusce sed magna eu purus rhoncus fermentum. Cras non arcu ac metus volutpat varius. Duis id eros ac felis sodales ornare. </p>
                                        <p> Duis eu massa diam. Donec in porta tortor, in pharetra velit. Nunc at justo convallis, tempor tortor non, tempus mauris. Integer tristique nisl hendrerit, rhoncus odio a, semper risus. Integer vehicula tempus porttitor.</p>
                                        <hr />
                                        <p className="h5"> Our Proprietary Rights: </p>
                                        <p className="mb-0"> sit amet condimentum massa turpis vel nisl. Suspendisse lobortis lorem mollis, sodales magna non, eleifend neque. Vestibulum vulputate nibh et lacus luctus venenatis. Mauris pulvinar ultrices libero, interdum convallis urna dapibus sed. Sed libero ligula, ultricies non pharetra at, ullamcorper sed quam. </p>
                                    </div>
                                </div>
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