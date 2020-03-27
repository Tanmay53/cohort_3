/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import Pagination from "./pagination";
import {
  addArtist,
  addAlbum,
  filterArtist,
  deleteAlbum,
  createPages,
  sortAlbums
} from "../Redux/Actions/Actions";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: "",
      albumName: "",
      year: "",
      artistSelected: "",
      filterSelected: "all",
      tempData: [],
      page: 0,
      perPage: 0,
      isLoaded: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount = async () => {
    const { albums, createPages } = this.props;
    this.setState({
      tempData: [...albums]
    });
    await createPages();
    const { isLoaded, perPage, pageDup } = this.props;
    this.setState({
      isLoaded,
      perPage,
      page: pageDup
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange1 = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      async () => {
        const { filterArtist, createPages } = this.props;
        const { filterSelected } = this.state;

        // func to filter albums based on artist
        await filterArtist(filterSelected);

        createPages();
        const { temp } = this.props;
        this.setState({
          tempData: [...temp]
        });
      }
    );
  };

  // func to delete an album

  handleDelete = async albumId => {
    const { deleteAlbum } = this.props;
    await deleteAlbum(albumId);
    const { temp } = this.props;
    this.setState({
      tempData: [...temp]
    });
    swal({
      title: "Album Deleted Successfully!",
      icon: "success"
    });
  };
  // func to add artist

  addArtist = () => {
    const { artistName } = this.state;
    const { addArtist } = this.props;
    addArtist({ artistName });
    this.setState({
      artistSelected: ""
    });
    swal({
      title: "Artist added Successfully!",
      icon: "success"
    });
  };

  // func to add album

  addAlbum = async () => {
    const { artistSelected, albumName, year, filterSelected } = this.state;
    const { addAlbum, filterArtist } = this.props;
    await addAlbum({
      albumName,
      artistSelected,
      year
    });
    swal({
      title: "Album added Successfully!",
      icon: "success"
    });
    // auto filter after album added

    filterArtist(filterSelected);
    const { temp } = this.props;
    this.setState({
      tempData: [...temp],
      year: "",
      albumName: "",
      artistSelected: ""
    });
  };
  // func to sort album in ascending order

  sortAsc = async () => {
    const { sortAlbums } = this.props;
    await sortAlbums("asc");
    const { temp } = this.props;
    console.log(temp);
    this.setState({
      tempData: [...temp]
    });
  };

  // func to sort album in descending order

  sortDsc = async () => {
    const { sortAlbums } = this.props;
    await sortAlbums("dsc");
    const { temp } = this.props;
    this.setState({
      tempData: [...temp]
    });
  };

  render() {
    const {
      artistSelected,
      tempData,
      perPage,
      albumName,
      artistName,
      year
    } = this.state;

    const { pageDup, artists } = this.props;
    let albumData = [...tempData];

    // creating artist dropdown

    let artistOption = artists.map(ele => {
      return (
        <option key={ele.artistId} value={ele.artistName}>
          {ele.artistName}
        </option>
      );
    });

    return (
      <>
        <div className="row d-flex justify-content-center p-1">
          <div className="col-sm-9 col-md-3 col-lg-3 ">
            <div className="form-group">
              {/* dropdown for filtering albums */}

              <h3 className=" text-primary">Filter By Artist</h3>
              <label htmlFor="#filter">Select Artist</label>
              <select
                id="filter"
                name="filterSelected"
                className="form-control"
                onChange={this.handleChange1}
              >
                <option value="all">All</option>
                {artistOption.map(ele => {
                  return ele;
                })}
              </select>
            </div>
          </div>

          <div className="col-sm-9 col-md-3 col-lg-3 mx-1">
            {/*Form for adding album  */}

            <div className="form-group">
              <h3 className="text-primary">Add Albums</h3>
              <label htmlFor="#albumName">Add Album Name </label>
              <input
                type="text"
                id="albumName"
                name="albumName"
                className="form-control"
                placeholder="Enter Album Name"
                onChange={this.handleChange}
                value={albumName}
              />
              <label htmlFor="#year">Add Year </label>
              <input
                type="number"
                id="year"
                name="year"
                className="form-control"
                placeholder="Enter year"
                onChange={this.handleChange}
                value={year}
              />
              <div className="form-group">
                <label htmlFor="#artistSelected"> Add Artist</label>
                <select
                  id="artistSelected"
                  name="artistSelected"
                  className="form-control"
                  onChange={this.handleChange}
                  value={artistSelected}
                >
                  <option value="">Choose</option>

                  {artistOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>

              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={this.addAlbum}
              >
                Add Album
              </button>
            </div>
          </div>
          <div className="col-sm-9 col-md-3 col-lg-3">
            {/*Form for adding artist  */}

            <div className="form-group">
              <h3 className="text-primary">Add Artist</h3>

              <label htmlFor="#artistName">Add Artist Name </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                placeholder="Example - Rahul Sharma"
                className="form-control"
                onChange={this.handleChange}
                value={artistName}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary py-2 w-100"
              onClick={this.addArtist}
            >
              Add Artist
            </button>
          </div>
        </div>
        <div className="table-responsive-lg">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  Artist Name
                </th>
                <th scope="col" className="text-center">
                  Album Name
                </th>
                <th scope="col" className="text-center">
                  Year
                  <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={this.sortDsc}
                  >
                    <i className="fas fa-sort-down"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.sortAsc}
                  >
                    <i className="fas fa-sort-up"></i>
                  </button>
                </th>
                <th scope="col" className="text-center">
                  Edit
                </th>
                <th scope="col" className="text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {albumData
                .filter(
                  (a, i) =>
                    i >= perPage * (pageDup - 1) && i < perPage * pageDup
                )
                .map(ele => {
                  return (
                    <tr key={ele.albumId}>
                      <td className="text-center">{ele.artistSelected}</td>
                      <td className="text-center">{ele.albumName}</td>
                      <td className="text-center">{ele.year}</td>
                      <td className="text-center">
                        <Link
                          to={`/home/edit/${ele.albumId}`}
                          className="btn btn-primary"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(ele.albumId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {}
          {this.state.isLoaded && (
            <div className="row justify-content-center">
              {albumData.length !== 0 && <Pagination />}
              {albumData.length === 0 && (
                <div className="text-center text-danger display-2">
                  No Albums Right Now
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albumReducer.albums,
    artists: state.albumReducer.artists,
    temp: state.albumReducer.temp,
    pageDup: state.albumReducer.page,
    perPage: state.albumReducer.perPage,
    isLoaded: state.albumReducer.isLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAlbum: payload => dispatch(addAlbum(payload)),
    addArtist: payload => dispatch(addArtist(payload)),
    filterArtist: payload => dispatch(filterArtist(payload)),
    deleteAlbum: payload => dispatch(deleteAlbum(payload)),
    createPages: () => dispatch(createPages()),
    sortAlbums: payload => dispatch(sortAlbums(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
