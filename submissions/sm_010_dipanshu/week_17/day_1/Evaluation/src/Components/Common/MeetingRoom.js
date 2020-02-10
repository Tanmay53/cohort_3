import React from "react";

class MeetingRoom extends React.Component {
  handleClick = event => {
    event.preventDefault();
    console.log("Book button clicked no:", event.target.id);
  };
  render() {
    return (
      <div>
        <div className="card border border-dark m-3">
          <img
            src="https://via.placeholder.com/200"
            className="card-img-top"
            alt=""
          />
          <div className="card-body text-center">
            <h5 className="card-title text-danger">{this.props.data.name}</h5>
            <p>Floor : {this.props.data.floor}</p>
            <p>Capacity : {this.props.data.capacity}</p>
            <p>Price per day: {this.props.data.price}</p>
            <div className="text-center">
              <button
                className="btn btn-success"
                id={this.props.index}
                onClick={this.handleClick}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetingRoom;
