import React from 'react';

export default class Pricing extends React.Component{
    render(){
        return(
            <div className="text-center">
                <p className="display-4 mt-5">Pricing</p>
                <p className="h5 mt-4 mb-5">Free equity investments and flat ₹20 intraday and F&O trades</p>
                <hr className="my-5"/>
                <div className="d-flex justify-content-around">
                    <img className="img-fluid col-4" src="https://zerodha.com/static/images/pricing-eq.svg" alt=""/>
                    <img className="img-fluid col-4" src="https://zerodha.com/static/images/other-trades.svg" alt=""/>
                    <img className="img-fluid col-4" src="https://zerodha.com/static/images/pricing-eq.svg" alt=""/>
                </div>
            </div>
        )
    }
}