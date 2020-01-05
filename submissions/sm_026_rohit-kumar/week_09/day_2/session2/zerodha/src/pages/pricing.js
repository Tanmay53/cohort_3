import React from 'react'
import Banner from '../components/banner'
import Cart from '../components/cart'
import LandingBanner from '../components/landingBanner'
import Footer from '../components/footer'

class Pricing extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return (
            <div className='component'>
                <div className='row'>
                    <div className='col'>
                        <Banner>
                            <h1><b>Pricing</b></h1>
                            <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
                        </Banner>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-3 offset-1'>
                        <div className='card text-center border-0'>
                            <img src='https://zerodha.com/static/images/pricing-eq.svg'/>
                            <div className='card-body'>
                                <h2>Free equity delivery</h2>
                                <p>
                                    All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-3 offset-1'>
                        <div className='card text-center border-0'>
                            <img src='https://zerodha.com/static/images/other-trades.svg'/>
                            <div className='card-body'>
                                <h2>Intraday and F&O trades</h2>
                                <p>
                                Flat ₹ 20 or 0.01% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-3 offset-1'>
                        <div className='card text-center border-0'>
                            <img src='https://zerodha.com/static/images/pricing-eq.svg'/>
                            <div className='card-body'>
                                <h2>Free direct MF</h2>
                                <p>
                                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <LandingBanner attrib = {{src : null, 
                                       style: {width: '40%', height:'40%'},
                                       heading : "Open a Zerodha account", 
                                       para : "Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.", 
                                       buttonText : "Sign up now"}}>
                        </LandingBanner>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Pricing