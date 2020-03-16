import React from "react";
// import { Route, Link } from "react-router-dom";

function SignIn() {
    return (
        <React.Fragment>
            <div className="bg-primary py-2" style={{ fontFamily: "ProximaNova Regular" }}>
                <div style={{ width: "20%", margin: "auto" }} className="my-4">
                    <img src="./logIN-white.png" alt="zeb.png" className="img-fluid" />
                </div>
                <div className="bg-light border text-center p-2 mt-5"
                    style={{ width: "45%", margin: "auto", borderRadius: "25px" }}>
                    <p className="text-left ml-3">Login to Zebpay</p>
                    <hr />
                    <div className="p-3">
                        <p style={{ width: "60%", margin: "auto" }} className="my-2">
                            Zebpay will send a One time SMS to verify your phone number
                        </p>
                        <div className="rounded-pill bg-light p-2 border my-4 text-left">
                            <select className="border border-light bg-light">
                                <option className="text-secondary">IND +91</option>
                                <option>China +86</option>
                                <option>UK +44</option>
                            </select>
                            <input type="text" className="border border-light" placeholder="    Mobile Number" />
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
                        <button className="bg-primary border rounded-pill text-center w-100 p-2 my-3">
                            Continue
                        </button>
                    </div>
                </div>
                <p className="text-center my-3 text-light">Create an account | Support</p>
            </div>
        </React.Fragment>
    )
}

export default SignIn