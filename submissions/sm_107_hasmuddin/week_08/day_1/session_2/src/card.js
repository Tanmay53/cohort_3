import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ricky Park",
      location: "New York",
      desc: "User interface designer and front-end developer",
      skills: [
        "UI/UX",
        "Front-end Devolopement",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "React",
        "Node"
      ]
    };
  }
  list(ar) {
    let item = ar.map(function(itm) {
      return <span className="p-2">{itm}</span>;
    });
    return item;
  }
  render() {
    return (
      <div>
        <div className="container bg-dark text-center p-4">
          <div className="text-white">
            <div className="col-12 shadow flex-d">
              <div className="col-8">
                <img
                  className="img-fluid rounded-circle border border-info p-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGiS_rL46SaUVooi6PMDFBW3CNMFcwSE7BsOyJlxgTqybQ4Sg&s"
                ></img>
                <h1>{this.state.name}</h1>
                <h2>{this.state.location}</h2>
                <p>{this.state.desc}</p>
                {/* buttons */}
                <div className="form-row">
                  <div className="col-5">
                    <button className="btn btn-info">Message</button>
                  </div>
                  <div className="col-5">
                    <button className="btn btn-outline-info mx-3">
                      following
                    </button>
                  </div>
                </div>
                {/* experience/ */}
                <h2>SKILLS</h2>
                <div className="col-12">
                  <div className="row">
                    <p className="border border-white p-3">
                      {this.list(this.state.skills)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
