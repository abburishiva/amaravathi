import React, { Component } from 'react'
import Header from '../../src/Components/Header';
import HomeSectionOne from './Home-Sections/HomeSectionOne';
import LatestProperties from './Home-Sections/LatestProperties';
import Footer1 from '../../src/Components/Footer1';
import Footer2 from '../../src/Components/Footer2';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSectionOne {...this.props} />
        <LatestProperties />
        <Footer1 />
        <Footer2 />
      </div>
    )
  }
}
