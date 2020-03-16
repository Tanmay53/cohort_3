import React from 'react'
class Partners extends React.Component{
    render(){
        return(
            <div className="container">
               <h4 className="font-weight-bold text-center">Our trusted partners</h4>
               <div className="row mt-4">
                  <div className="col-12 col-md-6 col-lg-6">
                     <div className="card border-0">
                        <div className="card-header d-flex border-0">
                           <img src="https://sites.google.com/a/evoapa.com/evoapa/_/rsrc/1478794464468/samarbetspartner/google.png" alt="google" height="35px"/>
                           <h3 className="font-weight-bold text-muted ml-2">for StartUps</h3>
                        </div>
                        <div className="card-body">
                           <p className="p-0">GFS brings the best of Google's connections, products and best practices to startups to help them grow. Through seven campuses and 50+ partner 
                              organisations, Google for Startups builds thriving communities of top startups, the world over.<br/>
                           <span className="text-muted font-weight-bold p-0">Learn More ></span></p>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-6">
                     <div className="card border-0">
                        <div className="card-header d-flex border-0">
                           <h4 className="facebook">facebook</h4>
                           <h4 className="text-info ml-2">@ 91 springboard</h4>
                        </div>
                        <div className="card-body">
                           <p className="p-0">We’ve partnered with Facebook to get their network and resources available to you. Expect everything from mentorship sessions, 
                           events, meetups, workshops and a whole lot more<br/>
                           <span className="text-muted font-weight-bold">Learn More ></span></p>
                        </div>
                     </div>
                  </div>                  
               </div>
            </div>
        )
    }
}
export default Partners