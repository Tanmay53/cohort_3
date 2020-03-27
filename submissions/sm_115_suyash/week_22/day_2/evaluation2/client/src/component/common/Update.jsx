import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAlbum } from "../../redux/action";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      album: "",
      year: 0
    };
  }
  componentDidMount = () => {
    let query = new URLSearchParams(this.props.location.search);
    let album = query.get("album");
    let year = query.get("year");
    let id = this.props.match.params.id;
    console.log(album, year, id);
    this.setState({
      album: album,
      year: year,
      id: id
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    this.props.updateAlbum(this.state);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name="album"
          value={this.state.album}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="year"
          value={this.state.year}
        />
        <button onClick={this.submit}>Update</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  updateAlbum: payload => updateAlbum(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
