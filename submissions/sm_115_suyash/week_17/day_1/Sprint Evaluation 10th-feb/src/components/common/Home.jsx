import React, { Component } from "react";
import { connect } from "react-redux";
import { bookRoom, filterFloor } from "../../redux/action";
import { Link, Redirect } from "react-router-dom";
import Pagination from "./Pagination";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomListPerPage: 5,
      currentPage: 1,
      currentPageList: []
    };
  }

  handlePage = () => {
    let indexOfLastList = this.state.currentPage * this.state.roomListPerPage;
    let indexOfFirstList = indexOfLastList - this.state.roomListPerPage;
    this.setState({
      currentPageList: this.props.roomList.slice(
        indexOfFirstList,
        indexOfLastList
      )
    });
  };

  componentDidMount = () => {
    console.log("------------------>>", this.props.roomList);
    this.handlePage();
  };

  paginate = pageNumber => {
    this.setState(
      {
        currentPage: pageNumber
      },
      () => {
        this.handlePage();
      }
    );
  };

  filterByFloor = e => {
    this.props.filterFloor(Number(e.target.value));
    setTimeout(() => {
      console.log("---------------------");
      this.paginate();
    }, 2000);
  };

  render() {
    return (
      <div className="container mt-5">
        {this.props.isAuth ? (
          <div>
            <h1>Select Meeting room</h1>
            <select
              className="form-control w-25"
              onChange={e => this.filterByFloor(e)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Floor</th>
                  <th scope="col">Room Name</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Price Per Day</th>
                  <th scope="col">Book</th>
                </tr>
              </thead>
              <tbody>
                {this.state.currentPageList.map((val, i) => {
                  if (!val.isBooked) {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{val.floor}</td>
                        <td>{val.room_name}</td>
                        <td>{val.capacity}</td>
                        <td>{val.pricePerDay}</td>
                        <td>
                          <Link
                            to={`/booking-page/${val.id}`}
                            className="card-link"
                          >
                            Book Now
                          </Link>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
            <Pagination
              totalList={this.props.roomList}
              roomListPerPage={this.state.roomListPerPage}
              changePage={this.paginate}
            />
          </div>
        ) : (
          <Redirect to="login" />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  roomList: state.roomList,
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  bookRoom: payload => dispatch(bookRoom(payload)),
  filterFloor: payload => dispatch(filterFloor(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
