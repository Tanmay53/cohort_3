import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <h2 className="display-5 text-center"> Contact Us</h2>
                <hr/>
                <div className="offset-5">
                <button className="btn btn-lg btn-success ml-5">Get it <span className="font-weight-bold">NOW</span></button>
                </div>
              
                <h4 className="font-weeight-bold text-center my-4">Happy to talk to you!</h4>
                <h5 className="text-center">Our customer support will reach to you soon</h5>
                <p className="text-center">bbinstant customer support</p>
                <p className="text-center">Email us: <a href="">bbinstant@bigbasket.com</a> </p>
                <p className="text-center">Call Us: +91-8068328777</p>
                <p className="text-center mt-5"></p>
                        <div className="offset-5">
                        <img src= "http://bbinstant.bigbasket.com/img/googleplay.png"/>  
                        <img className="ml-2" src= "http://bbinstant.bigbasket.com/img/app%20store%20logo.png"/>
                        </div>
             
            </div>
        )
    }
}