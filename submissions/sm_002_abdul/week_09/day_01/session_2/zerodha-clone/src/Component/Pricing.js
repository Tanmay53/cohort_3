import React from 'react'
import './Pricing.css'
import {Link} from 'react-router-dom'

class Pricing extends React.Component{
  render(){
    return (
      <div className="container-fluid border-bottom">

        <section className="pricing-heading border-bottom container text-center">
          <h1 className="pricing my-3 font-weight-bold dark-color-text">Pricing</h1>
          <h5 className="pricing-desc my-3 dark-color-text">Free equity investments and flat &#8377;20 intraday and F&amp;O trades</h5>
        </section>

        <section className="border-bottom container text-center pricing-section">
          <section className="row">
            <section className="col-md-4 my-md-0 col-sm-12 my-2">
              <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" className="img-fluid prices"/>
              <h3 className="dark-color-text">
                Free Equity Delivery
              </h3>
              <p>All equity delivery investments (NSE, BSE), are absolutely free
                  &mdash; &#8377; 0 brokerage.</p>
            </section>

            <section className="col-md-4 my-md-0 col-sm-12 my-2">
              <img src="https://zerodha.com/static/images/other-trades.svg" alt="" className="img-fluid prices"/>
              <h3 className="dark-color-text">
                Intraday and F&amp;O trades
              </h3>
              <p>Flat &#8377; 20 or 0.01% (whichever is lower) per executed order on
          intraday trades across equity, currency, and commodity trades.</p>
            </section>

            <section className="col-md-4 my-md-0 col-sm-12 my-2">
              <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" className="img-fluid prices"/>
              <h3 className="dark-color-text">
                Free Direct MF
              </h3>
              <p>All direct mutual fund investments are absolutely free &mdash;
                &#8377; 0 commissions &amp; DP charges.</p>
            </section>
          </section>
        </section>

        <section className="container open-account text-center">
          <h2 className="my-3 dark-color-text font-weight-bold">Open a Zerodha account</h2>
          <p className="my-3">Excellent platforms and apps &middot; ₹0 investments and flat ₹20 intraday
          and F&amp;O trades.</p>
          <button className="btn btn-primary btn-lg my-3">Sign up now</button>
        </section>

        <section className="container brokerage-calculator">

          <section className="row">
            <section className="col-md-6 my-md-0 text-center col-sm-12 my-2">
              <Link><h5>Brokerage calculator</h5></Link>
            </section>
            <section className="col-md-6 my-md-0 text-center col-sm-12 my-2">
              <Link><h5>List of charges</h5></Link>
            </section>
            <section className="col-md-6 my-md-0 col-sm-12 my-2">
              <ul className="ul-in-pricing">
                <li>
                  <small className="charges-text">Call &amp; Trade and RMS auto-squareoff: Additional charges of
                    &#8377;20 per executed order.</small>
                </li>
                <li>
                  <small className="charges-text">
                    Digital contract notes will be sent via e-mail.
                  </small>
                </li>
                <li>
                  <small className="charges-text">
                    Physical copies of contract notes, if required, shall be charged
                      &#8377;20 per contract note. Courier charges apply.
                  </small>
                </li>
                <li>
                  <small className="charges-text">
                    For NRI's: &#8377;200 or 0.1% (whichever lower) per executed order
                  </small>
                </li>
              </ul>
            </section>
          </section>

        </section>

      </div>
    )
  }
}

export default Pricing