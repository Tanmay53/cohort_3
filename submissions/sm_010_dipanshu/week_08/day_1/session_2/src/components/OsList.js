import React from "react";

class OsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.data.header,
      item1: props.data.item1,
      item2: props.data.item2,
      item3: props.data.item3,
      item4: props.data.item4
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-info mb-3 text-center">{this.state.header}</h1>
        <ul className="list-group">
          <li>{this.state.item1}</li>
          <li>{this.state.item2}</li>
          <li>{this.state.item3}</li>
          <li>{this.state.item4}</li>
        </ul>
      </div>
    );
  }
}

export default OsList;
