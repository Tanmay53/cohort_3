import React from 'react'

const Footer = (props) => {
    return (
        <div className='row mt-5 m-5'>
            <div className='col-3'> 
                <img style={{height:'50px', width:'200px'}} src='https://zerodha.com/static/images/logo.svg'/>
                <p>
                    <i className="p-3 material-icons">
                        call
                    </i>
                    <span>+91 80 4040 2020</span>
                </p>    
                <p className='small'>© 2010 - 2019, Zerodha Broking Ltd.
                    All rights reserved.</p>
                <span>
                    <i className="p-3 fa fa-facebook-official" style={{fontSize:'36px'}}></i>
                    <i className="p-3 fa fa-linkedin" style={{fontSize:'36px'}}></i>
                    <i className="p-3 fa fa-twitter" style={{fontSize:'36px'}}></i>
                    <i className="p-3 fa fa-instagram" style={{fontSize:'36px'}}></i>
                </span>
            </div>
            <div className='col-3'>
                <div>
                    <div className='mb-3'><b>Company</b></div>
                    <div className='my-2'>About</div>
                    <div className='my-2'>Products</div>
                    <div className='my-2'>Pricing</div>
                    <div className='my-2'>Referral programme</div>
                    <div className='my-2'>Careers</div>
                    <div className='my-2'>Press & media</div>
                    <div className='my-2'>Zerodha Cares (CSR)</div>

                </div>
            </div>
            <div className='col-3'>
                <div>
                    <div className='mb-3'><b>Support</b></div>
                    <div className='my-2'>Contact</div>
                    <div className='my-2'>Support portal</div>
                    <div className='my-2'>Z-Connect</div>
                    <div className='my-2'>List of charges</div>
                    <div className='my-2'>Downloads & resources</div>
                </div>
            </div>
            <div className='col-3'>
                <div>
                    <div className='mb-3'><b>Account</b></div>
                    <div className='my-2'>Open an account</div>
                    <div className='my-2'>Fund transfer</div>
                    <div className='my-2'>60 day challenge</div>
                </div>
            </div>
        </div>
    )
    
}

export default Footer