/* eslint-disable no-useless-constructor */
import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <div className = "container text-center mx-auto mt-5 mb-5 text-dark">
                    <img src = "logo192.png" alt = "Broker" height = {"275px"} width = {"425px"} className = "mt-4 mb-5"></img>
                    <h2 className = "mt-3" style = {{fontSize: "45px"}}>Invest in everything</h2>
                    <h5 className = "mt-3 mb-4">Online platform to invest in stocks, derivatives, mutual funds, and more</h5>
                    <button className = "btn btn-primary btn-lg mt-3 px-5">Sign up now</button>
                </div>
                <div className = "container mx-auto mt-5 text-dark py-5">
                    <div className = "row mt-5 d-flex justify-content-between py-5">
                        <div className = "col-6">
                            <img src = "largest-broker.svg" alt = "Largest Broker"></img>
                        </div>
                        <div className = "col-6">
                            <h1 className = "mb-4 display-5">Largest stock broker in India</h1>
                            <p className = "mb-4">1.5+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                            <div className = "row">
                                <div className = "col-6 pl-0 mt-4 mb-4">
                                    <ul>
                                        <li className = "mb-2">Futures and Options</li>
                                        <li className = "mb-2">Commodity derivatives</li>
                                        <li className = "mb-2">Currency derivatives</li>
                                    </ul>
                                </div>
                                <div className = "col-6 pl-0 mt-4">
                                    <ul>
                                        <li className = "mb-2">Stocks & IPOs</li>
                                        <li className = "mb-2">Direct mutual funds</li>
                                        <li className = "mb-2">Bonds and Govt. Securities</li>
                                    </ul>
                                </div>
                            </div>
                            <img src = "press-logos.png" alt = "Press Logos" className = "img-fluid mb-3"></img>
                        </div>
                    </div>
                </div>
                <div className = "container mx-auto mt-5 mb-4 text-center">
                    <div className = "col-6 mx-auto">
                        <h1 className = "mb-4">The Zerodha Universe</h1>
                        <p>A whole ecosystem of modern investment apps tailored to specific needs, built from the ground up</p>
                    </div>
                    <img src = "ecosystem.png" alt = "ecosystem" className = "img-fluid"></img>
                    <button className = "btn btn-outline-primary border-0 mt-3">Explore our products</button>
                </div>
                <div className = "container mx-auto mt-5">
                    <div className = "row">
                        <div className = "col-6">
                            <h1 className = "mb-4">Unbeatable pricing</h1>
                            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                            <button className = "btn btn-outline-primary border-0 mt-4">See pricing</button>
                        </div>
                        <div className = "col-6">
                            <div className = "card-group text-center">
                                <div className = "card">
                                    <div className = "card-body py-4">
                                        <h3 className = "card-title">₹0</h3>
                                        <h6 className = "card-text mt-5">Free equity delivery and direct mutual funds</h6>
                                    </div>
                                </div>
                                <div className = "card">
                                    <div className = "card-body py-4">
                                        <h3 className = "card-title">₹20</h3>
                                        <h6 className = "card-text mt-5">Intraday and F&O</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container mt-5 py-5">
                    <div className = "row mt-5">
                        <div className = "col-6">
                            <img src = "index-education.svg" alt = "index-education" height = {"300"}></img>
                        </div>
                        <div className = "col-6 mt-2">
                            <h2>Free and open market education</h2>
                            <p className = "mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <button className = "btn btn-outline-primary border-0 mb-4">Varsity</button>
                            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <button className = "btn btn-outline-primary border-0">TradingQ&A</button>
                        </div>
                    </div>
                </div>
                <div className = "container mx-auto text-center mt-5 py-5">
                    <h2>Open a Zerodha account</h2>
                    <p className = "mt-4">Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.</p>
                    <button className = "btn btn-primary btn-lg px-5 mt-4 mb-5">Sign up now</button>
                </div>
            </>
        );
    }
}

export default Content;