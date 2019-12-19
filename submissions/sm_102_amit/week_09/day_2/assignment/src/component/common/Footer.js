import React from "react";
import { Link } from "react-router-dom";

const Div = props => {
  return (
    <div className="col-md-3">
      <h6 className="h6 font-weight-bold my-2 text-muted">
        {props.data.heading}
      </h6>
      <ul className="list-unstyled ">
        {props.data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      menus: [
        {
          id: 1,
          heading: "Information",
          items: [
            "About us",
            "Delivery information",
            "Terms & Conditions",
            "Help Center",
            "Returns & Refunds"
          ]
        },
        {
          id: 2,
          heading: "Customer Services",
          items: ["Brands", "Gift Vouchers", "Affiliates", "Specials"]
        },
        {
          id: 3,
          heading: "My Account",
          items: ["Dashboard", "Ordr History", "Wish List", "Newsletter"]
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-10 offset-sm-1 py-4">
          <div className="row">
            <div className="col-md-3">
              <Link to="/">
                <img src="/images/logo.png" className="img-fluid" alt="logo" />
              </Link>
              <ul className="list-inline text-center">
                <li className="list-inline-item px-3">
                  <i className="fa fa-facebook fa-2x"></i>
                </li>
                <li className="list-inline-item px-3">
                  <i className="fa fa-twitter fa-2x"></i>
                </li>
                <li className="list-inline-item px-3">
                  <i className="fa fa-instagram fa-2x"></i>
                </li>
              </ul>
            </div>
            {this.state.menus.map(el => (
              <Div key={el.id} data={el} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
