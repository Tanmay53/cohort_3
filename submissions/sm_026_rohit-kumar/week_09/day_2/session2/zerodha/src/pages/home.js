import React from 'react'
import Banner from '../components/banner'
import LandingBanner from '../components/landingBanner'
import Footer from '../components/footer'


class Home extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return (
            <div className='component'>
                <div className='row'>
                    <div className='col'>
                        <LandingBanner attrib = {{src : "https://zerodha.com/static/images/landing.png", 
                                       style: {width: '40%', height:'40%'},
                                       heading : "Invest in everything", 
                                       para : "Online platform to invest in stocks, derivatives, mutual funds, and more", 
                                       buttonText : "Sign up now"}}>
                        </LandingBanner>
                    </div>
                </div>
                <div className='row mt-5 mx-5'>
                    <div className='col-6'>
                        <img src="https://zerodha.com/static/images/largest-broker.svg" />
                    </div>
                    <div className='col-6'>
                        <h2 className='my-3'>Largest stock broker in India</h2>
                        <p className='my-3'>1.5+ million Zerodha clients contribute to over 15% of all retail 
                            order volumes in India daily by trading and investing in:</p>
                        <div className='d-flex'>
                            <ul>
                                <li className = 'my-3'>Futures and Options</li>
                                <li className = 'my-3'>Commodity derivatives</li>
                                <li className = 'my-3'>Currency derivatives</li>
                            </ul>
                            <ul>
                                <li className = 'my-3'>Stocks & IPOs</li>
                                <li className = 'my-3'>Direct mutual funds</li>
                                <li className = 'my-3'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img style={{width:'500px'}} src='https://zerodha.com/static/images/press-logos.png'></img>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col text-center'>
                        <h2 className='my-3'>The Zerodha Universe</h2>
                        <p className='mb-3'>A whole ecosystem of modern investment apps <br/>
                            tailored to specific needs, built from the ground up</p>
                        <img style={{width:'75%'}} src='https://zerodha.com/static/images/ecosystem.png'/>
                    </div>
                </div>
                <div className='row mx-5 mt-5'>
                    <div className='col-6'>
                        <h2>Unbeatable pricing</h2>
                        <p>
                            We pioneered the concept of discount broking and price  transparency in India. Flat fees and no hidden charges.
                        </p>

                    </div>
                    <div className='col-6 d-flex'>
                        <div style={{height:'200px', width:'250px'}} className='border p-5'>
                            <h2>₹0</h2>
                            <p>Free equity delivery <br/>and direct mutual funds</p>
                        </div>
                        <div style={{height:'200px', width:'250px'}} className='border p-5'>
                            <h2>₹20</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

                <div className='row m-5'>
                    <div className='col-6'>
                        <img src="https://zerodha.com/static/images/index-education.svg" />
                    </div>
                    <div className='col-6'>
                        <h2 className='my-3'>Free and open market education</h2>
                        <p>Varsity, the largest online stock market education book in
                           the world covering everything from the basics to advanced trading.</p>
                        <p>Varsity, the largest online stock market education book in
                        the world covering everything from the basics to advanced trading.</p>

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

export default Home