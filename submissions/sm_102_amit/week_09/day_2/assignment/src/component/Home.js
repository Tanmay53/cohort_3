import React from "react";
import Slider from "./Slider";

const Brand = props => {
  return (
    <div className="col-md">
      <div className="text-center">
        <img src={props.brand.img} alt="brand-img" />
      </div>
    </div>
  );
};

const Catalog = props => {
  return (
    <div className="col-md-6">
      <div className="shadow-lg">
        <div className="row">
          <div className="col-lg-6 col-sm-7 p-5">
            <h3 className="h1 text-muted">{props.catalog.heading}</h3>
            <ul className="list-unstyled">
              {props.catalog.items.map((item, index) => (
                <li key={index} className="lead">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 col-sm-5">
            <img
              src="https://placeimg.com/500/700/any"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: [
        {
          id: 1,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-1.png"
        },
        {
          id: 2,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-2.png"
        },
        {
          id: 3,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-3.png"
        },
        {
          id: 4,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-4.png"
        },
        {
          id: 5,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-5.png"
        }
      ],
      catalog: [
        {
          id: 1,
          heading: "Men",
          items: [
            "Down Jackets",
            "Hoodies",
            "Suits",
            "Jeans",
            "Casual Pants",
            "Sunglass"
          ]
        },
        {
          id: 2,
          heading: "Women",
          items: [
            "Down Jackets",
            "Hoodies",
            "Suits",
            "Jeans",
            "Casual Pants",
            "Sunglass"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Slider />
        <div className="col-sm-10 offset-sm-1 py-5">
          <div className="d-flex my-5">
            {this.state.brand.map(el => (
              <Brand key={el.id} brand={el} />
            ))}
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            {this.state.catalog.map(el => (
              <Catalog key={el.id} catalog={el} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
