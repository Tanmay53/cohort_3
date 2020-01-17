import React from 'react';

export default class Products extends React.Component{
    render(){
        return(
            <div className="text-center mt-5">
                <br></br>
                <p className="display-4 font-weight-bold mt-5">Technology – <span className="text-muted">Investments</span></p>
                <p className="h5">Sleek, modern, and intuitive trading platforms</p>
                <img className="img-fluid col-5 mt-5" src="https://zerodha.com/static/images/investments-head.png" alt=""/>
            </div>
        )
    }
}