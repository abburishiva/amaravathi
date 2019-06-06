import React, { Component } from 'react';
import Header from '../../Components/Header';
import LatestProperties from './Home-Sections/LatestProperties';
import HomeSectionThree from './Home-Sections/HomeSectionThree';
import HomeSectionFour from './Home-Sections/HomeSectionFour';
import HomeSectionFive from './Home-Sections/HomeSectionFive';
import JointTeam from '../../Components/JointTeam';
import Footer1 from '../../Components/Footer1';
import Footer2 from '../../Components/Footer2';
import HomeMapSection from './Home-Sections/HomeMapSection';

export default class HomeWithMap extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeMapSection />
                <LatestProperties />
                <HomeSectionThree />
                <HomeSectionFour />
                <HomeSectionFive />
                <JointTeam />
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
