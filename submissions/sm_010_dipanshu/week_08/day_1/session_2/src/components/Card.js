import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.name = props.data.name;
    this.location = props.data.location;
    this.description = props.data.description;
    this.skills = props.data.skills;
  }
  render() {
    return (
      <div className="container bg-info mb-5 p-5 mt-5">
        <div className="col-6 mx-auto">
          <div className="card bg-light shadow shadow-lg">
            <div className="row mt-3">
              <p
                className="badge-pill bg-warning ml-4"
                style={{ height: "50px" }}
              >
                PRO
              </p>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                className="ml-5 mt-3 rounded-circle"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <div className="text-center mt-3">{this.name}</div>
            <div className="text-center mt-1 small">{this.location}</div>
            <div className="text-center mt-1 col-8 mx-auto">
              {this.description}
            </div>
            <div className="row mt-3">
              <button className="col-4 btn btn-primary ml-auto">Message</button>
              <button className="col-4 btn btn-primary ml-2 mr-auto">
                Following
              </button>
            </div>
            <div className="card-body small bg-primary mt-3 text-light">
              <p className="card-text">Skills</p>
              <div className="row mb-1">
                {this.skills.map(element => {
                  return (
                    <p
                      key={element}
                      className="card-text border rounded p-1 pl-3 pr-3 ml-1 mb-3"
                    >
                      {element}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
