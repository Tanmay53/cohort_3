import React from "react";

export default function Products() {
    return (
        <div className="mt-5">
            <header className="container text-center border-bottom pb-5 ">
                <h1>
                    Technology - <span className="text-muted">Investments</span>
                </h1>
                <h3 className="mt-5 font-weight-light ">
                    Sleek, modern, and intuitive trading platforms
                </h3>
            </header>
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <img
                            src="https://zerodha.com/static/images/products-kite.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-4 col-12 mt-5">
                        <h1>Kite</h1>
                        <p className="mt-4 font-weight-light">
                            Our ultra-fast flagship trading platform with
                            streaming market data, advanced charts, an elegant
                            UI, and more. Enjoy the Kite experience seamlessly
                            on your Android and iOS devices.
                        </p>
                        <div className="inline mt-5">
                            <img
                                src="https://zerodha.com/static/images/google-play-badge.svg"
                                alt=""
                            />
                            <img
                                src="https://zerodha.com/static/images/appstore-badge.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </main>
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-12 mt-5">
                        <h1>Console</h1>
                        <p className="mt-4 font-weight-light">
                            The central dashboard for your Zerodha account. Gain
                            insights into your trades and investments with
                            in-depth reports and visualisations.
                        </p>
                    </div>
                    <div className="col-md-8 col-12">
                        <img
                            src="https://zerodha.com/static/images/products-console.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
            </main>
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <img
                            src="https://zerodha.com/static/images/products-coin.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-4 col-12 mt-5">
                        <h1>Coin</h1>
                        <p className="mt-4 font-weight-light">
                            Buy direct mutual funds online, commission-free,
                            delivered directly to your Demat account. Enjoy the
                            investment experience on your Android and iOS
                            devices.
                        </p>
                    </div>
                </div>
            </main>
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-12 mt-5">
                        <h1>Kite Connect API</h1>
                        <p className="mt-4 font-weight-light">
                            Build powerful trading platforms and experiences
                            with our super simple HTTP/JSON APIs. If you are a
                            startup, build your investment app and showcase it
                            to our clientbase.
                        </p>
                    </div>
                    <div className="col-md-8 col-12">
                        <img
                            src="https://zerodha.com/static/images/products-kiteconnect.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
