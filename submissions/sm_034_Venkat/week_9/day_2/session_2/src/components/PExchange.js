import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from "./Footer"

function PExchange() {
    return (
        <React.Fragment>
            <Navbar />

            <div className="text-center container-fluid" style={{ fontFamily: "ProximaNova Regular" }}>
                <p className="h2 my-5 text-primary">
                    Fast, simple and secure ways to trade with ZebPay
                </p>
                <p className="p-3 pb-5 mb-5" style={{ fontSize: "18px" }}>
                    With a suite of products across devices, ZebPay platforms include mobile apps
                    for those who are always on the go, and a seamless web interface for users who
                    prefer desktops. Designed to reduce all friction, our platforms are meticulously
                    designed to be clutter-free so you can trade cryptos stress-free!
                </p>
                <p className="h2 pt-5 my-5 text-primary">For Advanced Traders</p>
                <p style={{ fontSize: "18px" }} className="px-3 mb-5">
                    With a range of high-end charting tools and lightning fast execution, the ZebPay Pro-Trader
                    is your best bet for staying on top of the crypto market.
                </p>
                {/* <div style={{ backgroundImage: "./stocksH6.png",height:"300px" }} className="pb-5 bg-info">
                    <div className="p-1 rounded-pill bg-primary" 
                        style={{ width: "20%", margin: "auto", fontSize: "20px" }}>
                        <button
                            className="bg-primary border border-primary text-light ">
                            Go to Pro
                        </button>
                    </div>
                </div> */}
                <div>
                    <div className="p-1 rounded-pill bg-primary" 
                        style={{ width: "20%", margin: "auto", fontSize: "20px" }}>
                        <button
                            className="bg-primary border border-primary text-light ">
                            Go to Pro
                        </button>
                    </div>
                    <img src="./stocksH6.png" alt="stocks.png" className="img-fliud w-100" />
                </div>

                <div className="row d-flex align-items-center  py-5">
                    <div className="col-4">
                        <img src="./phoneExc2.png" alt="phone.png" className="img-fluid" />
                    </div>
                    <div className="col-6 pl-4 text-left">
                        <p className="h2 text-primary">For On-The-Go Traders</p>
                        <p>Intuitive and clutter-free design for an exceptional on-the-go crypto trading
                            experience. Available on Android and iOS.</p>
                        <div className="d-flex align-items-center">
                            <img src="./android.png" alt="android.png" className="mx-2" />
                            <img src="./ios.png" alt="ios.png" className="mx-2" />
                        </div>
                    </div>
                </div>

                <div className="row d-flex align-items-center  py-5">
                    <div className="col-5 text-left">
                        <p className="h1 text-primary">Your Easy Dashboard</p>
                        <p>Simple & powerful ways to manage your account and execute your trades</p>
                        <div className="d-flex align-items-center">
                        <Link className="mx-2" to="/signIn"> >Sign In </Link>
                        <Link className="mx-2" to="/signUp"> >Sign Up</Link>
                        </div>
                    </div>
                    <div className="col-7">
                        <img src="./dashboardExc.png" alt="dashBoard.png" className="img-fluid" />
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default PExchange