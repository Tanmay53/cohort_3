import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white">
                <div className="container">
                    <div className="row text-left pt-5">
                        <div className="col-4">
                            <h2 className="display-4">Uber</h2>
                            <p>Help Center</p>
                            <p>English (Inernational)</p>
                            <i className="fas fa-globe"></i>
                            <br />
                            <img
                                src="data:image/png;base64,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"
                                alt=""
                                className="w-50"
                            />
                            <img
                                src="https://insight-timer-public.firebaseapp.com/static/media/App_store.7f628578.svg"
                                alt=""
                                className="w-50"
                            />
                        </div>
                        <div className="col-4">
                            <p className="font-weight-bold">About us</p>
                            <p>How Uber works</p>
                            <p>Global citizenship</p>
                            <p>Newsroom</p>
                            <p>Investor</p>
                            <p>relations</p>
                            <p>Careers</p>
                        </div>
                        <div className="col-4">
                            <p className="font-weight-bold">Products</p>
                            <p>Ride</p>
                            <p>Drive</p>
                            <p>Eat</p>
                            <p>Business</p>
                            <p>Freight</p>
                            <p>Health</p>
                            <p>Uber Air</p>
                            <p>Uber works</p>
                            <p>Advanced technologies group</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
