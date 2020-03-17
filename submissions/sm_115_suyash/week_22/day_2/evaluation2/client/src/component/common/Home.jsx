import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist, deleteArtist } from "../../redux/action";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.fetchArtist();
  };

  deleteAlbum = id => {
    console.log("delete", id);
    this.props.deleteArtist({ id });
  };

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>Show All Artist</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S no.</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Year</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data != undefined ? (
              this.props.data.map((ele, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{ele.name}</td>
                    <td>{ele.album}</td>
                    <td>{ele.year}</td>
                    <td>
                      <Link
                        to={`/update/${ele.id}?album=${ele.album}&album=${ele.year}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => this.deleteAlbum(ele.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = {
  fetchArtist: () => fetchArtist(),
  deleteArtist: payload => deleteArtist(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
