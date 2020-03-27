/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { editAlbum } from "../Redux/Actions/Actions";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumName: "",
      year: "",
      artistSelected: "",
      albumId: ""
    };
  }

  componentDidMount = () => {
    const { albums, match } = this.props;
    let album = albums.filter(ele => {
      return ele.albumId == match.params.id;
    });
    this.setState({
      albumName: album[0].albumName,
      artistSelected: album[0].artistSelected,
      year: album[0].year,
      albumId: album[0].albumId
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  editAlbumInfo = () => {
    const { albumName, artistSelected, year, albumId } = this.state;
    this.props.editAlbum({
      artistSelected,
      albumName,
      year,
      albumId
    });
    swal({
      title: "Album Edited Successfully!",
      icon: "success"
    });
  };

  render() {
    const { artists } = this.props;
    const { artistSelected, albumName, year } = this.state;

    let artistOption = artists.map(ele => {
      return (
        <option key={ele.artistId} value={ele.artistName}>
          {ele.artistName}
        </option>
      );
    });

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-5 col-lg-5">
            <div className="form-group">
              <h3 className="text-primary">Edit Album Information</h3>
              <label htmlFor="#albumName">Update Album Name </label>
              <input
                type="text"
                id="albumName"
                name="albumName"
                className="form-control"
                value={albumName}
                onChange={this.handleChange}
              />
              <label htmlFor="#year">Update Album Year </label>
              <input
                type="text"
                id="year"
                name="year"
                className="form-control"
                value={year}
                onChange={this.handleChange}
              />
              <div className="form-group">
                <label htmlFor="#artistSelected">Select Artist</label>
                <select
                  id="artistSelected"
                  name="artistSelected"
                  className="form-control"
                  value={artistSelected}
                  onChange={this.handleChange}
                >
                  <option key={1}>Choose</option>

                  {artistOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>

              <button
                type="button"
                className="btn btn-primary col-sm-12 my-1"
                onClick={this.editAlbumInfo}
              >
                Edit
              </button>
              <Link
                to="/home/"
                className="btn btn-warning col-sm-12 flaot-right"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albumReducer.albums,
    artists: state.albumReducer.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editAlbum: payload => dispatch(editAlbum(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
