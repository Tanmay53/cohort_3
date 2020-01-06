import React from 'react'

const Cards = () => {
    return (
        <div className="container mt-5">
            <h6 className="">Live Crypto Buy/Sell Prices</h6>
            <p className="text-muted">With Zebpay, what you see is what you get. Live prices include fees.</p>
            <div className="row">
                <div className="col shadow bg-white border border-light rounded">
                    <div className="row">
                        <div className="col border border-light">
                            <div style={{width:'60px', height:'60px',borderRadius:'50%'}} className="shadow bg-light border border-light">
                                <img style={{width:'50px', height:'50px'}} src="https://zebpaylogstest.blob.core.windows.net/multicoins/v3/blue/btc.png" />
                            </div>
                            <div>
                                <h6 className="text-muted">Buy</h6>
                            </div>
                            <div>
                                <h6 className="text-muted">Sell</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <p>Bitcoin</p>
                            </div>
                            <div>
                                <p>€6578.02</p>
                            </div>
                            <div>
                                <p>€6556.25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Cards;