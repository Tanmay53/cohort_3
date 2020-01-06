import React from 'react'

const BarrierFree = () => {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6 py-5 mt-5">
                        <h1 className="text-primary font-weigth-bold">Here to Set <br />
                            Crypto Free</h1>
                        <p className="text-muted p-2" style={{wordSpacing:'3px', letterSpacing:'1px'}}>
                            In the business of cryptocurrencies since the year 2014, 
                            Zebpay has served over 3 Million crypto users across the globe, and 
                            has enabled fiat transactions worth over $2 Billion on its robust web
                            and mobile platforms. As the torch bearers of liberating crypto from
                            all shackles, Zebpay invites crypto enthusiasts from 162 countries across
                            the globe to buy/sell crypto instantly & securely at the most 
                            competitive prices.
                        </p>
                        <div className="col-12">
                            <div className="input-group mb-3 border border-dark" style={{width:'400px',borderRadius:'30px'}}>
                                
                                <div class="input-group">
                                    {/* <select className="form-control" style={{width:'100px'}}>
                                        <option>+91</option>
                                        <option>+91</option>
                                        <option>+91</option>
                                        <option>+91</option>
                                        <option>+91</option>
                                    </select> */}
                                    <input style={{borderRadius:'30px 0 0 30px', 
                                                   padding:'30px',border:'none' }} 
                                           type="text" className="form-control" 
                                           placeholder="Enter mobile no." 
                                           aria-label="Recipient's username with two button addons" 
                                           aria-describedby="button-addon4"/>
                                    <div className="input-group-append" id="button-addon4">
                                        <button style={{borderRadius:'30px', padding:'15px'}} className="btn btn-outline-secondary" type="button">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src="https://www.zebpay.com/img/site/global-hero-img-3.png"
                                 className="img-fluid"
                                 alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarrierFree;