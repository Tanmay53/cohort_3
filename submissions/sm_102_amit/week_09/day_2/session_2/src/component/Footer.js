import React from "react";

const Div = props => {
  return (
    <div className="col-md-2">
      <h6 className="h6 font-weight-bold my-2 text-muted">
        {props.data.heading}
      </h6>
      <ul className="list-unstyled">
        {props.data.items.map(item => (
          <li>{item}</li>
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
          heading: "What's new",
          items: ["Surface Go", "Surface Pro", "Windows 10 apps", "Office apps"]
        },
        {
          id: 2,
          heading: "Microsoft Store",
          items: [
            "Account profile",
            "Download Center",
            "Microsoft Store Support",
            "Returns",
            "Order tracking"
          ]
        },
        {
          id: 3,
          heading: "Education",
          items: [
            "Microsoft in education",
            "Office for students",
            "Office 365 for schools",
            "Microsoft Azure in education"
          ]
        },
        {
          id: 4,
          heading: "Enterprise",
          items: [
            "Azure",
            "AppSource",
            "Automotive",
            "Government",
            "Healthcare",
            "Manufacturing",
            "Financial services",
            "Retail"
          ]
        },
        {
          id: 5,
          heading: "Developer",
          items: [
            "Microsoft Visual Studio",
            "Developer Network",
            "TechNet",
            "Channel 9",
            "Office Dev Center"
          ]
        },
        {
          id: 6,
          heading: "Developer",
          items: [
            "Careers",
            "bout Microsoft",
            "ompany news",
            "rivacy at Microsoft",
            "nvestors",
            "Security"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-10 offset-sm-1 py-4">
          <div className="row my-5">
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
