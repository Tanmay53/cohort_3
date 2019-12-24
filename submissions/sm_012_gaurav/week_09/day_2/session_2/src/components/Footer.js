/* eslint-disable no-useless-constructor */
import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "container-fluid bg-light">
                <hr></hr>
                    <div className = "container mx-auto mt-5 py-3">
                        <div className = "row">
                            <div className = "col-3">
                                <img src = "logo.svg" height = {"80"} width = {"150"} alt = "logo"></img>
                                <h3>+91 80 4040 2020</h3>
                                <p className = "text-secondary"><small>© 2010 - 2019, Zerodha Broking Ltd.</small></p>
                                <p className = "text-secondary"><small>All rights reserved.</small></p>
                            </div>
                            <div className = "col-3">
                                <h3 className = "mt-4">Company</h3>
                                <p className = "text-muted">About</p>
                                <p className = "text-muted">Products</p>
                                <p className = "text-muted">Pricing</p>
                                <p className = "text-muted">Referral Programme</p>
                                <p className = "text-muted">Careers</p>
                                <p className = "text-muted">Press & media</p>
                                <p className = "text-muted">Zerodha Cares (CSR)</p>
                            </div>
                            <div className = "col-3">
                                <h3 className = "mt-4">Support</h3>
                                <p className = "text-muted">Contact</p>
                                <p className = "text-muted">Support portal</p>
                                <p className = "text-muted">Z-Connect</p>
                                <p className = "text-muted">List of charges</p>
                                <p className = "text-muted">Downloads & resources</p>
                            </div>
                            <div className = "col-3">
                                <h3 className = "mt-4">Account</h3>
                                <p className = "text-muted">Open and account</p>
                                <p className = "text-muted">Fund transfer</p>
                                <p className = "text-muted">60 day challenge</p>
                            </div>
                        </div>
                        <p><small className = "text-muted mb-2">Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</small></p>
                        <p><small className = "text-muted mb-2">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</small></p>
                        <p><small className = "text-muted">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</small></p>
                    </div>
                </div>
        );
    }
}

export default Footer;