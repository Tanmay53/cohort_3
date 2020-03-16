import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="bg-primary text-center">
                <p className="h1 text-light">Start trading now</p>
                <div className="d-flex justify-content-center my-5"
                    style={{ width: "35%", margin: "auto" }}>
                    <select className="rounded-pill bg-light border text-center">
                        <option>IND +91</option>
                        <option>China +86</option>
                        <option>UK +44</option>
                    </select>
                    <input type="text" className="bg-primary border border-primary text-secondary"
                        placeholder=" Enter mobile no." />
                    <input type="button" value="Sign up" className="p-3 rounded-pill bg-light border text-primary" />
                </div>

                <div className="d-flex flex-wrap text-left justify-content-around mt-5 pt-5">
                    <div>
                        <img src="./foot-logo0.png" alt="symbol.jpg" className="img-fluid" />
                        <p>&#169; 2019 Zebpay</p>
                        <p className="h5 text-light">Support</p>
                        <p>help.zebpay.com</p>
                        <p className="h5 text-light">Media & Press</p>
                        <p>Media Enquires</p>
                    </div>
                    <div>
                        <p className="h5 text-light">Support</p>
                        <p>Exchange</p>
                        <p>Build</p>
                        <p className="h5 text-light">Learning</p>
                        <p>video</p>
                        <p>Sound cloud</p>
                        <p>spotify</p>
                        <p>Slideshare</p>
                        <p className="h5 text-light">Blog</p>
                        <p>blog.zebpay.com</p>
                    </div>
                    <div>
                        <p className="h5 text-light">Why Zebpay?</p>
                        <p>Features</p>
                        <p>Security</p>
                        <p>Fees</p>
                        <p>Trade Crypto</p>
                        <p>Lightning</p>
                    </div>
                    <div>
                        <p className="h5 text-light">Cryptos</p>
                        <p>What is crypto</p>
                        <p>Bitcoin</p>
                        <p>Ether</p>
                        <p>XRP</p>
                        <p>TUSD</p>
                        <p>Tether</p>
                    </div>
                    <div>
                        <p className="h5 text-light">Company</p>
                        <p>About Us</p>
                        <p>Legal & Privacy</p>
                        <p>Terms of use</p>
                        <p>Stay Safe</p>
                        <p>Bug Bounty Program</p>
                        <p>Supported Countries</p>
                        <p>Mining Schemes</p>
                    </div>
                    <div>
                        <p className="h5 text-light">Social</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>YouTube</p>
                        <p>Instagram</p>
                        <p>Linkedin</p>
                        <p>Telegram</p>
                        <p>Pinterest</p>
                        <p>Giphy</p>
                    </div>
                </div>
                <div className="container pt-5">
                    <span className="text-light">Disclaimer</span>
                    <small>
                        : Trading in cryptocurrencies is subject to market & legal
                        risks. Prices in one county may differ from prices in other
                         countries. ZebPay does not guarantee any returns. Use
                         ZebPay's services at your own risk.
                        </small>
                </div>
                <div className="py-5 d-flex flex-wrap align-items-center">
                    <p className="ml-auto align-items-end pt-3">Proud members of</p>
                    <img src="./f1Blockchain-Australia-Inline.png" alt="footer.png" className="mx-2" height="30px" />
                    <img src="./f2bitcoin-association.png" alt="footer.png" className="mx-2" height="30px" />
                    <img src="./f3cryptovelly.png" alt="footer.png" className="mx-2" height="30px" />
                    <div className="d-flex  align-items-center ml-5">
                        <img src="./globe.png" alt="globe.png" height="20px" />
                        <p className="mx-2 pt-3">Global</p>
                    </div>
                    <button className="bg-light border rounded-pill px-3 mx-5">Go</button>
                </div>
            </div>
        )
    }
}

export default Footer