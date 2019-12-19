import React from "react";

export default function Home() {
    return (
        <div>
            <header className="container text-center my-5">
                <img
                    src="https://zerodha.com/static/images/landing.png"
                    alt=""
                    className="w-50"
                />

                <h1 className="font-weight-bold mt-2 ">Invest in everything</h1>
                <h4 className=" p-2 mt-2 ">
                    Online platform to invest in stocks, derivatives, mutual
                    funds, and more
                </h4>
                <button className="btn btn-primary  px-5">Sign up now</button>
            </header>
            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img
                            src="https://zerodha.com/static/images/largest-broker.svg"
                            alt=""
                            className="w-75"
                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row mt-5">
                            <h3>Largest stock broker in India</h3>
                        </div>
                        <div className="row mt-3">
                            <p>
                                1.5+ million Zerodha clients contribute to over
                                15% of all retail order volumes in India daily
                                by trading and investing in:
                            </p>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-12">
                                <ul>
                                    <li>Futures and Options</li>
                                    <li>Commodity derivatives</li>
                                    <li>Currency derivatives</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <ul>
                                    <li>Stocks & IPOs</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <img
                                src="https://zerodha.com/static/images/press-logos.png"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
