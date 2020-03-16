import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
  render(){
    return (
      <div className="container-fluid bg-light footer" id="foot">

        <div className="container">

          <div className="row">

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
              <img 
                src="https://cdn.svgporn.com/logos/shopify.svg"
                alt="zerodha-logo"
                className="footer-logo"/>
              <h5 className='my-3'><i class="fas fa-phone-alt"></i> +91 80 4040 2020</h5>
              <small className="my-3">© 2010 - 2020, Shopify Ltd.<br/>
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
              <h5 className="font-weight-bold">About</h5>
              <ul>
                <li><h6>Contact Us</h6></li>
                <li><h6>About us</h6></li>
                <li><h6>Shopify Stories</h6></li>
                <li><h6>Careers</h6></li>
                <li><h6>Press & media</h6></li>
                <li><h6>Shopify Cares (CSR)</h6></li>
              </ul>
            </div>

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
              <h5 className="font-weight-bold">Support</h5>
                <ul>
                  <li><h6>Payments</h6></li>
                  <li><h6>Shipping</h6></li>
                  <li><h6>Cancellation & Return</h6></li>
                  <li><h6>FAQ</h6></li>
                  <li><h6>Report Infringement</h6></li>
                </ul>
            </div>

            <div className="col-md-3 my-md-0 col-sm-12 my-3">
            <h5 className="font-weight-bold ">Policy</h5>
                <ul>
                  <li><h6>Return Policy</h6></li>
                  <li><h6>Terms Of Use</h6></li>
                  <li><h6>Security</h6></li>
                </ul>
            </div>

          </div>

        </div>


        <div className="container">
          <small className="terms text-muted ">
          E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down
          </small><br/>
        <small className="terms text-muted ">
        In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.        </small><br/>
        <small className="terms text-muted ">
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </small><br/>
        <small className="terms text-muted">
        From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - the Flipkart Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door services. 
          <Link
            > create
            a ticket here</Link>.
        </small><br/>
        <div>
          <ul className="d-flex flex-row align-items-center justify-content-center">
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