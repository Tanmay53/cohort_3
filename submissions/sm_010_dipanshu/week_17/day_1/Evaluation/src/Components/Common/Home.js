import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MeetingRoom from "./MeetingRoom";

class Home extends React.Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <h3 className="text-center text-success mt-3">
            Meeting Rooms Available
          </h3>
          <div className="d-flex mt-3 container">
            {this.props.meetingRooms.map((room, index) => {
              return (
                <MeetingRoom
                  data={room}
                  key={room.name + room.floor}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    meetingRooms: state.meetingRooms
  };
};

export default connect(mapStateToProps)(Home);
