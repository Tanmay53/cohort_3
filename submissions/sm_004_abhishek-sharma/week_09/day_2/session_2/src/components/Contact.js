import React from "react";

const Contact = props => {
  return (
    <React.Fragment>
    {/* Intro Heading */}
    <div className = "container py-4">
        <div className = "row py-4 mb-4">
            <div className = "col py-4 mb-4">
                <div className = "text-center">
                    <h1 className = "display-4 font-weight-normal">Contact Us </h1>
                </div>
            </div>
        </div>
        <hr />
        <div className = "row py-2">
          <div className = "col-3 ">
            <div className = "mx-2 bg-light p-3">
              <h4>Support Portal</h4>
              <p className = "lead">Have a query?</p>
              <button type = "button" className = "btn btn-primary">Create a ticket</button>
            </div>
           
          </div>
          <div className = "col-3">
            <h5 className = "font-weight-normal">New account opening</h5>
            <p className = "text-muted">9:00 AM - 6:00 PM</p>
            <p> 080 4913 2020 </p>
            <p> 080 6666 2020 </p>
          </div>
          <div className = "col-3">
            <h5 className = "font-weight-normal">Support</h5>
            <p className = "text-muted">5:30 AM - 6:00 PM</p>
            <p> 080 4913 2020 </p>
            <p> 080 6666 2020 </p>
          </div>
          <div className = "col-3">
            <h5 className = "font-weight-normal">Call & trade</h5>
            <p className = "text-muted">12:00 AM - 6:00 PM</p>
            <p> 080 4913 2020 </p>
            <p> 080 6666 2020 </p>
          </div>
        </div>
    </div>
    
    </React.Fragment>
  );
};

export default Contact;
