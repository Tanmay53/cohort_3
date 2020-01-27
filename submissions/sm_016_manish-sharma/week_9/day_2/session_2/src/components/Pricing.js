import React from 'react'

class Pricing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='container text-center mb-5'>
                    <div className='my-5 py-5'>
                        <h1>Pricing</h1>
                        <h5 className='font-weight-light my-4'>Free equity investments and flat ₹20 intraday and F&O trades</h5>
                    </div>
                    
                    <div className='row'>
                        <div className='col text-center'>
                            <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{height:'200px'}} />
                            <h2>Free equity delivery</h2>
                            <p className='my-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        </div>
                        <div className='col-5 text-center'>
                            <img src='https://zerodha.com/static/images/other-trades.svg' style={{height:'200px'}} />
                            <h2>Intraday and F&O trades</h2>
                            <p className='my-4'>Flat ₹ 20 or 0.01% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                        </div>
                        <div className='col text-center'>
                            <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{height:'200px'}} />
                            <h2>Free direct MF</h2>
                            <p className='my-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Pricing