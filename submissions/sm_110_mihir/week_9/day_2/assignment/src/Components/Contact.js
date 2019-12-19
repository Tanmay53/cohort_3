import React from "react";

export default function Contact() {
    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-4 col-12 p-5">
                    <h3>We are based in Melbourne, Australia</h3>
                </div>
                <div className="col-md-4 col-12 p-5 text-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                    />
                    <button className="btn btn-primary btn-block p-2 mt-3">
                        Subscribe
                    </button>
                </div>
                <div className="col-md-4 col-12 p-5 text-center">
                    <h5>Didn't find what you were looking for?</h5>
                    <button className="btn btn-primary btn-block p-2">
                        Submit a request
                    </button>
                </div>
            </div>
        </div>
    );
}
