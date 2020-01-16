import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div className="text-center mt-3">
                <img className="col-5" src="https://zerodha.com/static/images/landing.png" alt=""/>
                <p className="display-4 mt-5">Invest in everything</p>
                <p className="h5">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button type="button" class="btn btn-primary px-5 my-4">Sign up now</button>
            </div>
        )
    }
}