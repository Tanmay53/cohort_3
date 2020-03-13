import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
  render(){
    return (
      <div className="container-fluid bg-light footer">

        <div className="container">

          <div className="row">

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
              <img 
                src="https://zerodha.com/static/images/logo.svg"
                alt="zerodha-logo"
                className="footer-logo"/>
              <h5 className='my-3'><i class="fas fa-phone-alt"></i> +91 80 4040 2020</h5>
              <small className="my-3">© 2010 - 2020, Zerodha Broking Ltd.<br/>
              All rights reserved.</small>
              <div className="row">
                <div className="col-2">
                  <p>
                    <i class="fab fa-twitter"></i>
                  </p>
                </div>
                <div className="col-2">
                  <p>
                    <i class="fab fa-facebook-f"></i>
                  </p>
                </div>
                <div className="col-2">
                  <p>
                  <i class="fab fa-instagram"></i>
                  </p>
                </div>
                <div className="col-2">
                  <p>
                  <i class="fab fa-linkedin-in"></i>
                  </p>
                </div>
                <div className="col-2">
                  <p>
                    <i class="fab fa-telegram"></i>
                  </p>
                </div>
              </div>
              
            </div>

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
              <h5 className="font-weight-bold">Company</h5>
              <ul>
                <li><h6>About</h6></li>
                <li><h6>Products</h6></li>
                <li><h6>Pricing</h6></li>
                <li><h6>Referral Programme</h6></li>
                <li><h6>Careers</h6></li>
                <li><h6>Press & media</h6></li>
                <li><h6>Zerodha Cares (CSR)</h6></li>
              </ul>
            </div>

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
              <h5 className="font-weight-bold">Support</h5>
                <ul>
                  <li><h6>Contact</h6></li>
                  <li><h6>Support Portal</h6></li>
                  <li><h6>Z-Connect blog</h6></li>
                  <li><h6>List of charges</h6></li>
                  <li><h6>Downloads & Resources</h6></li>
                </ul>
            </div>

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
            <h5 className="font-weight-bold ">Account</h5>
                <ul>
                  <li><h6>Open an account</h6></li>
                  <li><h6>Fund Transfer</h6></li>
                  <li><h6>60 day challenge</h6></li>
                </ul>
            </div>

          </div>

        </div>


        <div className="container">
          <small className="terms text-muted ">
            Zerodha Broking Ltd.: Member of NSE​ &amp;​ BSE &ndash; SEBI
            Registration no.: INZ000031633 CDSL: Depository services through Zerodha
            Securities Pvt. Ltd. &ndash; SEBI Registration no.: IN-DP-100-2015
            Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025
            &ndash; SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
            any complaints pertaining to securities broking please write to
            <Link> complaints@zerodha.com</Link>, for
            DP related to <Link> dp@zerodha.com</Link>. Please
            ensure you carefully read the Risk Disclosure Document as prescribed by
            SEBI | ICF
          </small><br/>
        <small className="terms text-muted ">
          Procedure to file a complaint on SEBI SCORES:
          Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
          E-mail ID.
          Benefits: Effective Communication, Speedy redressal of the grievances
        </small><br/>
        <small className="terms text-muted ">
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </small><br/>
        <small className="terms text-muted">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another intermediary."
          Dear Investor, if you are subscribing to an IPO, there is no need to
          issue a cheque. Please write the Bank account number and sign the IPO
          application form to authorize your bank to make payment in case of
          allotment. In case of non allotment the funds will remain in your bank
          account. As a business we don't give stock tips, and have not authorized
          anyone to trade on behalf of others. If you find anyone claiming to be
          part of Zerodha and offering such services, please
          <Link
            > create
            a ticket here</Link>.
        </small><br/>
        <div>
          <ul className="d-flex flex-row align-items-center justify-content-center">
            <li>
              <small className="terms text-muted">
                NSE &nbsp;&nbsp;
              </small>
              
            </li>
            <li>
              <small className="terms text-muted">
                BSE &nbsp;&nbsp;
              </small>
              
            </li>
            <li>
              <small className="terms text-muted">
                MCX &nbsp;&nbsp;
              </small>
            </li>
            <li>
              <small className="terms text-muted">
                Terms & Conditions &nbsp;&nbsp;
              </small>
            </li>
            <li>
              <small className="terms text-muted">
                Policies & Procedures &nbsp;&nbsp;
              </small>
            </li>
            <li>
              <small className="terms text-muted">
                Privacy Policy &nbsp;&nbsp;
              </small>
            </li>
            <li>
              <small className="terms text-muted">
                Disclosure &nbsp;&nbsp;
              </small>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}

export default Footer