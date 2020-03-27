import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtistName, addNewArtist } from "../../redux/action";

class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: "",
      year: 0,
      artist_id: 0
    };
  }
  componentDidMount = () => {
    this.props.fetchArtistName();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    this.props.addNewArtist(this.state);
  };
  render() {
    return (
      <div>
        <select
          name="artist_id"
          value={this.state.artist_id}
          onChange={this.handleChange}
        >
          {this.props.artistData != undefined ? (
            this.props.artistData.map(ele => {
              return (
                <option selected value={ele.id}>
                  {ele.name}
                </option>
              );
            })
          ) : (
            <option>No Artist</option>
          )}
        </select>
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
        <button onClick={this.submit}>Add</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artistData: state.artistData
});

const mapDispatchToProps = {
  fetchArtistName: () => fetchArtistName(),
  addNewArtist: payload => addNewArtist(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddData);
