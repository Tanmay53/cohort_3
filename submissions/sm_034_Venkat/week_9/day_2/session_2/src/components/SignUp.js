import React from "react";
// import { Route, Link } from "react-router-dom";

function SignUp() {
    return (
        <React.Fragment>
            <div className="bg-primary py-3"  style={{ fontFamily: "ProximaNova Regular" }}>
                <div style={{ width: "20%", margin: "auto" }} className="my-5">
                    <img src="./logIN-white.png" alt="zeb.png" className="img-fluid" />
                </div>
                <div className="bg-light border text-center p-2"
                    style={{ width: "50%", margin: "auto", borderRadius: "25px" }}>
                    <p className="text-left ml-3">Register</p>
                    <hr />
                    <div className="p-3">
                        <div className="rounded-pill bg-light p-2 border my-2 text-left">
                            <select className="border border-light bg-light">
                                <option className="text-secondary">IND +91</option>
                                <option>China +86</option>
                                <option>UK +44</option>
                            </select>
                            <input type="text" className="border border-light" placeholder="    Mobile Number" />
                        </div>
                        <div className="d-flex justify-content-between mb-2 mt-3">
                            <input type="text" className="rounded-pill p-2 border" placeholder="First Name" />
                            <input type="text" className="rounded-pill p-2 border" placeholder="Last Name" />
                        </div>
                        <input type="text" className="rounded-pill p-2 border w-100 my-2" placeholder="Email Address" />
                        <div className="d-flex justify-content-between my-2">
                            <input type="text" className="rounded-pill p-2 border" placeholder="Set 4 digit PIN" />
                            <input type="text" className="rounded-pill p-2 border" placeholder="Confirm 4 digit PIN" />
                        </div>
                        <div className="text-left my-3 d-flex">
                            <input type="checkbox" className="mr-3" />
                            <p className="pb-2">
                                I accept Zebpay's <u>Terms of use</u> and <u>Privacy policy.</u>
                            </p>
                        </div>
                        <div style={{ width: "60%", margin: "auto" }}
                            className="border d-flex align-items-center justify-content-around p-1">
                            {/* <div className="d-flex"> */}
                                <button style={{ width: "30px", height: "30px" }} className="border"></button>
                                <p className="pt-3">I'm not a robot</p>
                            {/* </div> */}
                            <div className="m-right">
                                <img src="./reload.png" alt="reload.png" height="35px" /><br />
                                <span style={{ fontSize: "11px" }}>reCAPTCHA</span><br />
                                <span style={{ fontSize: "9px" }}>Privacy-Terms</span>
                            </div>
                        </div>
                        <button className="bg-primary rounded-pill text-center w-100 p-2 my-3 border">
                            Continue</button>
                    </div>
                </div>

                <p className="text-center my-3 text-light">Login | Support</p>
            </div>
        </React.Fragment>
    )
}

export default SignUp