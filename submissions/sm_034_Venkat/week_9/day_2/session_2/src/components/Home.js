import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btn1: true,
            btn2: false,
            btn3: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid" style={{ fontFamily: "ProximaNova Regular" }}>
                    <div className="row text-center text-md-left d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-6">
                            <p className="h1 text-primary">Buy /Sell andTrade Cryptos</p>
                            <p className="">
                                In the business of cryptocurrencies since the year 2014, ZebPay has served over
                                3 Million crypto users across the globe on its robust web and mobile platforms.
                                With a refined vision and a brand new team, ZebPay is back in India with 5
                                new crypto-to-crypto trading pairs and many more exciting features to come.
                            </p>
                            <div className="col-10 my-3">
                                <div className="d-flex justify-content-center my-4 border rounded-pill"
                                    style={{ width: "86%", margin: "auto" }}>
                                    <select className="rounded-pill bg-light border">
                                        <option className="text-secondary">IND +91</option>
                                        <option>China +86</option>
                                        <option>UK +44</option>
                                    </select>
                                    <input type="text" className="border border-light"
                                        placeholder=" Enter mobile no." />
                                    <input type="button" value="Sign up"
                                        className="p-3 rounded-pill bg-light border text-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src="./hero_bannerH1.png" alt="gAndB.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ fontFamily: "ProximaNova Regular" }}>
                    <div className="row d-flex align-items-center my-5" id="H2Btns">
                        <div className="col-1 d-flex flex-column ">
                            <button onClick={() => this.setState({
                                btn1: true, btn2: false, btn3: false
                            })} className="my-2 border rounded-circle w-50">
                                o
                            </button>
                            <button onClick={() => this.setState({
                                btn1: false, btn2: true, btn3: false
                            })} className="my-2 border rounded-circle w-50">
                                o
                            </button>
                            <button onClick={() => this.setState({
                                btn1: false, btn2: false, btn3: true
                            })} className="my-2 border rounded-circle w-50">
                                o
                            </button>
                        </div>
                        <div className="col-11 ">
                            {this.state.btn1 ? (
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="./crypto_bannerH2.png" alt="btn1.png" className="img-fluid" />
                                    </div>
                                    <div className="d-flex justify-content-around border col-lg-10 rounded-pill py-4">
                                        <p className="mx- ">Deposit and Withdraw INR and swap
                                            Bitcoin, Ether, TrueUSD & More</p>
                                        <div>
                                            <button className="p-3 border bg-primary rounded-pill text-light">
                                                Trade Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (console.log("btn1 Hided"))}

                            {this.state.btn2 ? (
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="./launch_bannerH2-2.png" alt="btn2.png" className="img-fluid" />
                                    </div>
                                    <div className="d-flex justify-content-around border col-lg-10 rounded-pill py-4">
                                        <div>
                                            <p className="h5 text-primary">Trade before 31st March & get 0.0001 BTC!</p>
                                            <p>Get extra trading power with ZebPay!</p>
                                        </div>
                                        <div>
                                            <button className="p-3 border bg-warning rounded-pill text-danger">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (console.log("btn2 Hided"))}

                            {this.state.btn3 ? (
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="./electricAU6.png" alt="btn3.png" className="img-fluid" />
                                    </div>
                                    <div className="d-flex justify-content-around border col-lg-10 rounded-pill py-4">
                                        <p className="h5">Make payments on the Lightning
                                            Network with ZebPay.</p>
                                        <div>
                                            <button className="p-3 border bg-primary rounded-pill text-light">
                                                Lightning is here!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (console.log("btn3 Hided"))}
                        </div>
                    </div>
                </div>
                <div className="container-fluid my-2">
                    <div className="row d-flux justify-content-around align-items-center">
                        <div className="">
                            <img src="./crypto-cryptoH3.png" alt="h3.png" height="500px" />
                        </div>
                        <div className="mr-5">
                            <p className="h2 ml-4 text-primary">Clutter Free</p>
                            <ul>
                                <li>Refreshing New Look</li>
                                <li>Clean. Intuitive. Simple</li>
                                <li>Advanced Trading Features</li>
                            </ul>
                            <div className="d-flex ml-4 align-items-end ">
                                <img src="./android.png" alt="android.png"
                                    className="mx-2" height="30px" />
                                <img src="./ios.png" alt="ios.png" className="mx-2" height="30px" />
                                <p className="text-primary ">SEE FEATURES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flux justify-content-between align-items-center">
                        <div className="mr-5">
                            <p className="h2 ml-4 text-primary">Barrier Free</p>
                            <ul>
                                <li>Trade Across 5 Crypto-Crypto Pairs</li>
                                <li>Zero Deposit Fees (Crypto)</li>
                            </ul>
                            <p className="ml-4 text-primary">SEE FEE STRUCTURE</p>
                        </div>
                        <div className="">
                            <img src="./app-tradeH4.png" alt="h4.png" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid my-2">
                    <div className="row d-flux justify-content-around align-items-center">
                        <div className="">
                            <img src="./build-men-newH5.png" alt="h5.png" />
                        </div>
                        <div className="mr-5">
                            <p className="h2 ml-4 text-primary">World Leading Security</p>
                            <ul className="my-4">
                                <li>Multi-Sig & Multi-Geo Authentication for Cold Wallets</li>
                                <li>Proprietary Multi-Layered Security Protocols</li>
                                <li>Stringent Compliance & Regulations</li>
                            </ul>
                            <p className="ml-4 text-primary">More</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="h1 my-5 text-primary">Like a pro</p>
                    <p className="h4 m-5">With a range of high-end charting tools and lightning fast execution,
                         the ZebPay Pro-Trader is your best bet for staying on top of the crypto market</p>
                    <p className="h5 m3-5 text-primary">TRADE NOW</p>
                </div>

                <div className="container-fluid">
                    <img src="./stocksH6.png" alt="stocks.png" className="img-fluid my-5" />
                </div>

                <div className="text-center bg-primary py-5">
                    <p className="h1 text-light py-5">Zebpay in NEWS</p>
                    <div className="container d-flex flex-wrap justify-content-around mb-5">
                        <img src="./n1forbes.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n2enterpreneur.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n3bitcoin-magazine.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n4TNW.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n5cointelegraph.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n6bitcoinist.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n7quartz.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n8coingeek.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n9bitcoin-news.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n10techinasia.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n11bitcoin-dot-com.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n12businessworld.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n13reuters.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n14financial-fox.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n15cnbc-18.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n16cnbc-africa.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n17ET-now.png" alt="news.png" height="26px" className="m-4" />
                        <img src="./n18ME.png" alt="news.png" height="26px" className="m-4" />
                    </div>

                    <hr className="bg-success" />
                    <div className=" d-flex justify-content-around py-4 my-5">
                        <div>
                            <p className="text-light display-3">3B+</p>
                            <p className="text-secondary">Value transacted</p>
                        </div>
                        <div>
                            <p className="text-light display-3">4.1</p>
                            <p className="text-secondary">Star app rating</p>
                        </div>
                        <div>
                            <p className="text-light display-3">3M+</p>
                            <p className="text-secondary">Satisfied customers</p>
                        </div>
                    </div>
                    <hr className="bg-success" />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home