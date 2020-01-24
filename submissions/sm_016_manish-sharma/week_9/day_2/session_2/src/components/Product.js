import React from 'react'

class Product extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='container text-center mb-5'>
                    <div className='my-5 py-5'>
                        <h1>Technology - <span className='text-muted'>Investments</span></h1>
                        <h5 className='font-weight-light my-4'>Sleek, modern, and intuitive trading platforms</h5>
                    </div>
                    <div className='container row'>
                        <div className='col mx-5'>
                            <img src='https://zerodha.com/static/images/products-kite.png'/>
                        </div>
                        <div className='col text-left my-5'>
                            <h2>Kite</h2>
                            <br></br>
                            <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                            <br></br>
                            <p className='text-primary'>Learn more -></p>
                            <br></br>
                            <div>
                                <img className='mx-2' src='https://zerodha.com/static/images/google-play-badge.svg'/>
                                <img src='https://zerodha.com/static/images/appstore-badge.svg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product