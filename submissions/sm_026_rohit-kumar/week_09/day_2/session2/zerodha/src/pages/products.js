import React from 'react'
import Banner from '../components/banner'
import Cart from '../components/cart'
import Footer from '../components/footer'

class Products extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return (
            <div className='component'>
                <div className='row'>
                    <div className='col'>
                        <Banner>
                            <h1><b>Technology – <span className='text-muted'>Investments</span></b></h1>
                            <p>Sleek, modern, and intuitive trading platforms</p>
                        </Banner>
                    </div>
                </div>
                <div className='row'>
                    <Cart attrib = {{orient : 'left',
                                     style : {height:'200px', width:'300px'},
                                     src : 'https://zerodha.com/static/images/products-kite.png',
                                     heading : 'Kite',
                                     para : 'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'  }} />
                </div>

                <div className='row'>
                    <Cart attrib = {{orient : 'right',
                                     style : {height:'200px', width:'300px'},
                                     src : 'https://zerodha.com/static/images/products-console.png',
                                     heading : 'Console',
                                     para : 'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'  }} />
                </div>

                <div className='row'>
                    <Cart attrib = {{orient : 'left',
                                     style : {height:'200px', width:'300px'},
                                     src : 'https://zerodha.com/static/images/products-coin.png',
                                     heading : 'Coin',
                                     para : 'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'  }} />
                </div>

                <div className='row'>
                    <Cart attrib = {{orient : 'right',
                                     style : {height:'200px', width:'300px'},
                                     src : 'https://zerodha.com/static/images/products-kiteconnect.png',
                                     heading : 'Kite Connect API',
                                     para : 'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'  }} />
                </div>

                <div className='row'>
                    <Cart attrib = {{orient : 'left',
                                     style : {height:'200px', width:'300px'},
                                     src : 'https://zerodha.com/static/images/varsity-products.png',
                                     heading : 'Varsity mobile',
                                     para : 'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'  }} />
                </div>

                <div className='row'>
                    <Cart attrib = {{orient : 'right',
                                     style : {height:'200px', width:'300px'},
                                     src : 'https://zerodha.com/static/images/sentinel-products.png',
                                     heading : 'Sentinel',
                                     para : 'Create powerful market alerts on the cloud for stocks, futures and options, and more for free.'  }} />
                </div>

                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2 className='mt-3'>The Zerodha Universe</h2>
                        <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                    </div>
                    <div className='col-10 offset-1 d-flex justify-content-between mt-3'>
                        <div className='card border-0'>
                            <img className='img img-fluid' style={{height:'60px', width:'250px'}}  src='https://zerodha.com/static/images/products/smallcase-logo.png'/>
                        </div>
                        <div className='card border-0'>
                            <img className='img img-fluid' style={{height:'60px', width:'250px'}} src='https://zerodha.com/static/images/products/streak-logo.png'/>
                        </div>
                        <div className='card border-0'>
                            <img className='img img-fluid' style={{height:'60px', width:'250px'}} src='https://zerodha.com/static/images/products/sensibull-logo.svg'/>
                        </div>
                        <div className='card border-0'>
                            <img className='img img-fluid' style={{height:'60px', width:'250px'}} src='https://zerodha.com/static/images/products/goldenpi-logo.png'/>
                        </div>
                    </div>
                    <div className='col-12 text-center mt-5'>
                        <button className='btn btn-primary'>Sign up now</button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Products