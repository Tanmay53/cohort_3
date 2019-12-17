import React from "react";

function Intro() {
  return (
    <div className="row my-5">
      <div className="col-md-5 ">
        <h3 className="h2 fw-600">Our commitment to your safety</h3>
        <p>
          With every safety feature we add and every standard in our Community
          Guidelines we uphold, we’re committed to protecting you on the road
          ahead. Learn more about our Community Guidelines <a href="">here.</a>
        </p>
        <a href="" className="border-bottom text-dark">
          See all safety features
        </a>
      </div>
      <div className="col-md-6 offset-md-1">
        <img
          src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_496,h_331/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg"
          alt="img"
          className="img-fluid"
        />
      </div>
    </div>
  );
}
function Info(props) {
  return (
    <div className="col-md-4">
      <img src={props.data.icon} alt="icon" />
      <h6 className="h6 fw-600 my-3">{props.data.heading}</h6>
      <p>{props.data.content}</p>
      <a href="#" className="border-bottom text-dark">
        Learn More
      </a>
    </div>
  );
}

function SignUp(props) {
  return (
    <div className="col-md-6">
      <h5 className="h1 fw-600 py-5 signup-border">
        {props.data} <i className="fa fa-arrow-right float-right mr-3"></i>
      </h5>
    </div>
  );
}

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          icon:
            "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg",
          heading: "About Us",
          content:
            "Find out how we started, what drives us, and how we’re igniting opportunity."
        },
        {
          icon:
            "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg",
          heading: "Newsroom",
          content:
            "See announcements about our latest releases, initiatives, and partnerships."
        },
        {
          icon:
            "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg",
          heading: "Global citizenship",
          content:
            "Read about our commitment to making a positive impact in the cities we serve."
        }
      ],
      signup: ["Sign up to drive", "Sign up to ride"]
    };
  }

  render() {
    return (
      <div className="container">
        <Intro />
        <div className="row my-5">
          {this.state.info.map(obj => (
            <Info key={obj.heading} data={obj} />
          ))}
        </div>
        <div className="row my-5">
          {this.state.signup.map(el => (
            <SignUp key={el} data={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
