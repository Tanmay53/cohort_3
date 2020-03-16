import React from 'react'

export default function Enterprise() {
    return (
        <div>
            <div className="container-fluid jumbotron-fluid">
                <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/Picture-2.jpg" alt="backgnd" className="img-fluid" style={{height:"800px",width:"100%"}}/>
            </div>

            <div className="container my-5">
                <h2 className="text-center mb-5 text-muted">Fully Customized. Fully Serviced.</h2>
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-6 d-flex mb-2">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/06/noun_1090012_cc-2.png" alt="nohassle" height="70px"/>
                        <div className="pl-3">
                            <h4 className="font-weight-light">No Hassles</h4>
                            <h5 className="text-muted">We handle all the daily facility management hassles and overheads. Our team is always on hand to solve your issues so you can focus on your work.</h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 d-flex mb-2">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/06/001-sketchbook-3.png" alt="design"  height="70px"/>
                        <div className="pl-3">
                            <h4 className="font-weight-light">We Design-Think</h4>
                            <h5 className="text-muted">Our spaces are optimized for utility, not fixed team sizes. Typically, less than 80% of your team is in office on any given day so funnel your savings from the 20% into more productive channels.</h5>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 d-flex mb-2">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/06/noun_179375_cc-1.png" alt="pay"  height="70px"/>
                        <div className="pl-3">
                            <h4 className="font-weight-light">Pay Per Person</h4>
                            <h5 className="text-muted">Our malleable spaces are equipped to accommodate your changing needs. There’s no need to predict manpower.</h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 d-flex mb-2">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/06/002-tag-4.png" alt="pricing"  height="70px"/>
                        <div className="pl-3">
                            <h4 className="font-weight-light">Transparent Pricing</h4>
                            <h5 className="text-muted">Receive upfront pricing which is all inclusive. Always.</h5>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 d-flex mb-2">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/06/noun_1043554_cc-3.png" alt="customize"  height="70px"/>
                        <div className="pl-3">
                            <h4 className="font-weight-light">Customized by You</h4>
                            <h5 className="text-muted">Make your own space in our hub. Your own layouts and branding for privacy and your own culture. It’s the best of both worlds.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <h2 className="text-center mb-5 text-muted">Talent Finds You.</h2>
                <div className="row mb-5">
                    <div className="col-10 offset-1 offset-md-0 col-md-5 col-lg-5 mb-2">
                        <h5 className="mb-3"><b>Attract and retain employees</b> in an environment that’s corporate yet has a unique company culture.</h5>
                        <h5 className="mb-3"><b>Pan India Presence: </b>We give your team the freedom of movement. No need to pass on a great hire who can’t move to the HQ.</h5>
                    </div>
                    <div className="col-10 offset-1 offset-md-0 col-md-5 col-lg-5 offset-lg-1">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/06/IMG_20160210_182851567_HDR-01.jpeg" alt="attract employees" className="img-fluid rounded"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1 offset-md-0 col-md-5 col-lg-5 mb-3">
                        <img src="https://www.91springboard.com/wp-content/uploads/2016/05/mum_chillzone-new.jpg" alt="hr" className="img-fluid rounded"/>
                    </div>
                    <div className="col-10 offset-1 offset-md-0 col-md-5 col-lg-5 offset-lg-1">
                        <h5 className="mb-3"><b>Less burdened HR Team: </b>We share the load with your HR team and work hard to keep your employees happy and engaged.</h5>
                        <h5 className="mb-3"><b>Constant Learning: </b>Knowledge events, workshops, seminars and talks give your employees an environment of continuous learning to leverage.</h5>
                    </div>
                </div>       
            </div>

            <div className="container my-5">
                <h2 className="text-center text-muted">Want to know more?</h2>
                <h5 className="text-center mt-3">Tell us a bit about yourself so our team can serve you better.</h5>
                <div className="row">
                    <div className="col-10 offset-1 col-md-10 offset-md-1 offset-lg-0 col-lg-11 mt-3">
                    <label className="h6 text-dark font-weight-light">First Name*</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Last Name*</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Your Designation</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Your Email*</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Your Phone Number*</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Your Company Name*</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Company Size</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">No.of Seats*</label>
                    <input className="form-control mb-3"/>
                    <label className="h6 text-dark font-weight-light">Expected start date</label>
                    <input className="form-control mb-3" placeholder="dd/mm/yyyy"/>
                    <label className="h6 text-dark font-weight-lighter">Which location do you prefer*</label>
                    <input className="form-control mb-3" placeholder="Banglore-Indiranagar"/>
                    <label className="h6 text-dark font-weight-lighter">Tell us about your requirement</label>
                    <input className="form-control mb-3 py-5"/>
                    <button className="btn text-light background mt-2">GET A CALLBACK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
