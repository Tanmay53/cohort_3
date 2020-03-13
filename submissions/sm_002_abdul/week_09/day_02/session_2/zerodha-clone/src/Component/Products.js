import React from 'react'
import './Products.css'
import {Link} from 'react-router-dom'

class Products extends React.Component{
  render(){
    return (
      <div className="container-fluid border-bottom">

        <section className="container heading-product border-bottom text-center">
          <h1 className="font-weight-bold technology-color display-4">Technology &#8211;
          <span className="investment-color"> Investments</span></h1>
          <h5>Sleek, modern, and intuitive trading platforms</h5>
        </section>

        <section className="container kite">
          <div className="row">
              <section className="col-md-7 col-sm-12">
                <img 
                  src="https://zerodha.com/static/images/products-kite.png"
                  alt="kite"
                  className="img-fluid"/>
              </section>

              <section className="col-md-4 my-md-0 col-sm-12 my-2 py-5">
                <h2 className="my-3">Kite</h2>
                <p className="my-2">Our ultra-fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                <Link className="my-2">Learn more <i class="fas fa-arrow-right"></i></Link>
                <div className="row my-2">
                  <img 
                    src="https://zerodha.com/static/images/google-play-badge.svg" 
                    className="col-6 playstore"
                    alt="google-play"/>
                  <img 
                    src="https://zerodha.com/static/images/appstore-badge.svg" 
                    className="col-6 playstore"
                    alt="ios-store"/>
                </div>
              </section>
          </div>
        </section>

        <section className="container console">
          <div className="row">
            <section className="col-md-4 my-md-0 col-sm-12 my-2 py-5">
              <h2 className="my-3">Console</h2>
              <p className="my-2">The central dashboard for your Zerodha account. Gain insights into
                your trades and investments with in-depth reports and
                visualisations.</p>
              <Link className="my-2">Learn more <i class="fas fa-arrow-right"></i></Link>
            </section>
            <section className="d-none d-md-block col-md-1">

            </section>
            <section className="col-md-7 col-sm-12">
              <img 
                src="https://zerodha.com/static/images/products-console.png"
                alt="console"
                className="img-fluid"/>
            </section>
          </div>
        </section>

        <section className="container coin">
          <div className="row">
            <section className="col-md-7 col-sm-12">
              <img 
                src="https://zerodha.com/static/images/products-coin.png"
                alt="coin"
                className="img-fluid"/>
            </section>

            <section className="col-md-4 my-md-0 col-sm-12 my-2 py-5">
              <h2 className="my-3">Coin</h2>
              <p className="my-2">Buy direct mutual funds online, commission-free, delivered directly
                  to your Demat account. Enjoy the investment experience on your
                  Android and iOS devices.</p>
              <Link className="my-2">Coin <i class="fas fa-arrow-right"></i></Link>
            </section>
          </div>
        </section>

        <section className="container api-kite">
          <div className="row">
            <section className="col-md-4 my-md-0 col-sm-12 my-2 py-5">
              <h2 className="my-3">Kite Connect API</h2>
              <p className="my-2">Build powerful trading platforms and experiences with our
            super simple HTTP/JSON APIs. If you are a startup, build your
            investment app and showcase it to our clientbase.</p>
              <Link className="my-2">Kite Connect <i class="fas fa-arrow-right"></i></Link>
            </section>
            <section className="d-none d-md-block col-md-1">

            </section>
            <section className="col-md-7 col-sm-12">
              <img 
                src="https://zerodha.com/static/images/products-kiteconnect.png"
                alt="kite-connect-api"
                className="img-fluid"/>
            </section>
          </div>
        </section>

        <section className="container varsity">
          <div className="row">
              <section className="col-md-7 col-sm-12">
                <img 
                  src="https://zerodha.com/static/images/varsity-products.png"
                  alt="varsity"
                  className="img-fluid"/>
              </section>

              <section className="col-md-4 my-md-0 col-sm-12 my-2 py-5">
                <h2 className="my-3">Varsity Mobile</h2>
                <p className="my-2">An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go</p>
                <div className="row my-2">
                  <img 
                    src="https://zerodha.com/static/images/google-play-badge.svg" 
                    className="col-6 playstore"
                    alt="google-play"/>
                  <img 
                    src="https://zerodha.com/static/images/appstore-badge.svg" 
                    className="col-6 playstore"
                    alt="ios-store"/>
                </div>
              </section>
          </div>
        </section>

        <section className="container console">
          <div className="row">
            <section className="col-md-4 my-md-0 col-sm-12 my-2 py-5">
              <h2 className="my-3">Sentinel</h2>
              <p className="my-2">Create powerful market alerts on the cloud for stocks, futures and options, and more for free.</p>
              <Link className="my-2">Sentinel <i class="fas fa-arrow-right"></i></Link>
            </section>
            <section className="d-none d-md-block col-md-1">

            </section>
            <section className="col-md-7 col-sm-12">
              <img 
                src="https://zerodha.com/static/images/sentinel-products.png"
                alt="sentinel"
                className="img-fluid"/>
            </section>
          </div>
        </section>

        <section className="container zerodha-universe text-center">
          <h2 className="col-12">
            The Zerodha Universe
          </h2>
          <p className="col-12">
            Extend your trading and investment experience even further with our
          partner platforms
          </p>

          <div className="row">
            <div className="col-md-3 my-md-0 col-sm-6 my-sm-1">
              <img 
                src="https://zerodha.com/static/images/products/smallcase-logo.png"
                alt="small-case-logo"
                className="img-fluid client-logos"
                /><br/>
              <small className="text-muted">Thematic Investment Platform</small>   
            </div>

            <div className="col-md-3 my-md-0 col-sm-6 my-sm-1">
              <img 
                src="https://zerodha.com/static/images/products/streak-logo.png"
                alt="streak-logo"
                className="img-fluid client-logos"
                /><br/>
              <small className="text-muted">Algo & Strategy Platform</small>
            </div>

            <div className="col-md-3 my-md-0 col-sm-6 my-sm-1">
              <img 
                  src="https://zerodha.com/static/images/products/sensibull-logo.svg"
                  alt="sensi-bull-logo"
                  className="img-fluid client-logos"
                  /><br/>
              <small className="text-muted">Options trading Platform</small>
            </div>

            <div className="col-md-3 my-md-0 col-sm-6 my-sm-1">
              <img 
                    src="https://zerodha.com/static/images/products/goldenpi-logo.png"
                    alt="golden-pi-logo"
                    className="img-fluid client-logos"
                    /><br/>
              <small className="text-muted">Bonds trading Platform</small>
            </div>

          </div>
        </section>

        <div className="container text-center sign-up-button">
          <button className="btn btn-primary btn-lg">Sign up now</button>
        </div>
      </div>
    )
  }
}

export default Products