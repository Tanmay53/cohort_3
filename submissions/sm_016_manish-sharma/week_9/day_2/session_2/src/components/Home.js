import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='text-center'>
                <div>
                    <img src='https://zerodha.com/static/images/landing.png' style={{height:'300px'}}/>
                    <div>
                        <div className='h1 my-4'>Invest in everything</div>
                        <div className='h5 font-weight-light my-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</div>
                    </div>
                    <div className='btn btn-primary px-5'>Sign Up Now</div>
                </div>

            </div>
        )
    }
}

export default Home