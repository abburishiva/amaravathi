import React, { Component } from 'react'
import Header from '../../Components/Header';
import HomeSearchPage from './HomeComponents/HomeSearchPage';
import Footer1 from '../../Components/Footer1';
import Footer2 from '../../Components/Footer2';
import Cards from '../../Components/Cards/Cards';
import TutorsData from '../../Tutors.json';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomeSearchPage {...this.props}/>
                <section className="section-padding">
                    <div className="section-title text-center mb-5">
                        <h2>Latest Sahayaks</h2>
                        <p>Recent topics.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            {TutorsData && <Cards
                                data={TutorsData}
                                col={4}
                                handleRedirect={this.handleRedirect}
                                {...this.props}
                            />}
                        </div>
                    </div>
                </section>
                <Footer1 />
                <Footer2 />
            </React.Fragment>
        )
    }
}
