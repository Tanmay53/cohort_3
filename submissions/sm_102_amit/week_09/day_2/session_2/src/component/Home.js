import React from "react";
import Slider from "./Slider";

const Div = props => {
  return (
    <div className="col-md-3">
      <div className="gradient-bg">
        <img src={props.data.img} alt="icon" />
        <h6 className="h5 font-weight-bold my-3">{props.data.heading}</h6>
        <small className="font-weight-bold">{props.data.content}</small>
        <br />
        <a href="#" className="border-bottom text-dark">
          Learn More
        </a>
      </div>
    </div>
  );
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          id: 1,
          img:
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZgxB?ver=0b92&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
          heading: "Surface Book 2",
          content: "Give inspiration with a fast, powerful device."
        },
        {
          id: 2,
          img:
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZBhz?ver=ec40&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
          heading: "Give joy with Surface Go",
          content: "Small, strong and ready for every adventure."
        },
        {
          id: 3,
          img:
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZbiY?ver=f317&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
          heading: "Inspire magic this holiday",
          content: "Imagine what they’ll create with Office 365 for PC and Mac."
        },
        {
          id: 4,
          img:
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZqUZ?ver=79cc&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
          heading: "Xbox One X",
          content:
            "Give thrills that’ll last all year with the world’s most powerful console."
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Slider />
        <div className="col-sm-10 offset-sm-1 py-5">
          <div className="row my-5">
            {this.state.info.map(el => (
              <Div key={el.id} data={el} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
