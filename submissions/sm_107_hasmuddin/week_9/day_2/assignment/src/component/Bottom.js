import React from "react";
import { Link } from "react-router-dom";
var connectWithUs = ["Facebook", "Instagram", "Twitter"];
var hiring = ["Designer", "Sales officer", "Product Manager"];

export default function Bottom() {
  return (
    <div className="container-fluid bg-dark p-5">
      <div className="w-100 container">
        <div className="container text-white">
          <div className="row">
            <ul>
              <h3>About</h3>

              <li>
                <Link to="/contact" style={{ color: "white" }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "white" }}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: "white" }}>
                  Faq
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ color: "white" }}>
                  Signup
                </Link>
              </li>
            </ul>

            <ul>
              <h4>Social</h4>
              {connectWithUs.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
            <ul>
              <h3>We Are Hiring</h3>
              {hiring.map(ele => {
                return <li>{ele}</li>;
              })}
            </ul>
            <p className="col-5 mx-4">
              <p className="text-danger">Registered Office Address:</p> Shopingo
              Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring
              Road, Devarabeesanahalli Village, Banglore, 560103, India CIN :
              U511XXXAAXX6107 <br /> Telephone: 1800 200 300
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
