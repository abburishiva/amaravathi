import React, { Component } from 'react'
export default class Footer2 extends Component {
  render() {
    return (
      <div>
        <section className="py-2 text-center">
          <p className="mt-0 mb-0">© Copyright {(new Date().getFullYear())} <a href="/"><strong className="text-success-custom">Sahayak.me.</strong></a> All Rights Reserved</p>
        </section>
      </div>
    )
  }
}
