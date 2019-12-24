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
                            <h1><b>Join 1.5+ million investors & traders</b></h1>
                            <p>Open a trading and Demat account online and start investing for free</p>
                        </Banner>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center ml-5'>
                            <div>
                                <img className='img img-fluid' src='https://zerodha.com/static/images/account_open.png'/>
                            </div>
                            <div>
                                <h2>Signup now</h2>
                                <span className='text-muted'>Or continue with your existing application</span>
                                <input type='text' className='form-control' placeholder='Your 10 digit number'></input>
                                <p className='small'>You will receive an OTP on your number</p>
                                <button className='btn btn-primary'>Continue</button>
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