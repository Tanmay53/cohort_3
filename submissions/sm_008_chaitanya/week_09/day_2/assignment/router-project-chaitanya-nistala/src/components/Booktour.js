import React from 'react'
class Booktour extends React.Component{
    render(){
        return(
            <div className="container mt-5">  
               <div className="row">
                  <div className="col-10 offset-1 offset-md-1 col-md-10 col-lg-10 offset-lg-1 mb-5">
                     <h5 className="mb-4">
                           Hello,<br/>
                           We appreciate your interest in becoming a part of the largest co-working community in India. Please fill 
                           out a few details below and our team will get in touch shortly.
                     </h5>
                     <label className="h6 font-weight-light text-dark">First Name*</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Last Name*</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Your Designation</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Your Email*</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Your Phone Number*</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Your Company Name*</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Company Size</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">No.of Seats*</label>
                     <input className="form-control mb-3"/>
                     <label className="h6 font-weight-light text-dark">Expected start date</label>
                     <input className="form-control mb-3" placeholder="dd/mm/yyyy"/>
                     <label className="h6 font-weight-light text-dark">The 91springboard space you wish to work from*</label>
                     <select className="form-control">
                        <option value="--">--</option>
                        <option value="1">Banglore - 8th Block,Koramangala</option>
                        <option value="2">Banglore-Indiranagar</option>
                        <option value="3">Banglore-J.P.Nagar</option>
                        <option value="4">Banglore-MG Road</option>
                        <option value="5">Banglore-Out Ring Road,Mahadevpura</option>
                        <option value="6">Delhi-Nehru Palace</option>
                        <option value="7">Gurgaon-Sector 18</option>
                        <option value="8">Hyderabad-Hitech City</option>
                        <option value="9">Goa-Panjim</option>
                     </select>
                     <label className="h6 font-weight-lighter text-dark mt-3">Choose the time of your visit</label><br/>
                     <input type="checkbox"/><label>11:00 AM - 1.00 PM</label><input type="checkbox" className="ml-2"/><label> 3.00 PM - 5.00 PM</label><br/>
                     <label className="h6 font-weight-lighter text-dark">Tell us about your requirement</label>
                     <input className="form-control mb-3 py-5"/>
                     <button className="btn text-light background">SEND</button>

                     <h6 className="mt-4 ml-5"><i>Please note - Our team will be available to show you around between 11am to 5pm from Monday to Saturday.
                           Feel free to drop in and check out the space on your own on Sundays.</i></h6>
                  </div>
               </div>
            </div>
        )
    }
}
export default Booktour