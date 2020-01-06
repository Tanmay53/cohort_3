import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { DELETE_ACTION } from "../../Redux/Action";

class ViewVehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: ""
    };
  }

  handleDelete = event => {
    this.props.deleteVehicle(Number(event.target.id));
  };

  handleSort = event => {
    if (event.target.id === "desc") {
      this.vehicles.sort((a, b) => a.sales - b.sales);
    } else {
      this.vehicles.sort((a, b) => b.sales - a.sales);
    }

    this.setState({
      sortBy: event.target.id
    });
  };

  render() {
    this.vehicles = this.props.vehicles;

    if (this.props.isLoggedIn) {
      return (
        <div className="container mt-5">
          <div className="text-center">
            <Link to="/dashboard">
              <button className="btn btn-primary ml-5">Dashboard</button>
            </Link>
          </div>
          <div className="text-center mt-5">
            <p className="display-4">
              Total Vehicle Sales : {this.props.totalSales}
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-8"></div>
            <div className="d-flex align-items-center">
              <div className="display-5 col">Sort by:</div>
            </div>
            <button
              className="btn-sm btn-primary rounded mx-2"
              id="asc"
              onClick={this.handleSort}
            >
              Ascending
            </button>
            <button
              className="btn-sm btn-primary rounded mx-2"
              id="desc"
              onClick={this.handleSort}
            >
              Descending
            </button>
          </div>
          <table className="table table-bordered table-hover mt-3">
            <thead className="thead-dark text-center">
              <tr>
                <th>Model Name</th>
                <th>Model Type</th>
                <th>Mileage</th>
                <th>Top Speed</th>
                <th>Cost</th>
                <th>Sales in FY2019-20</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.vehicles.map((vehicle, index) => {
                return (
                  <React.Fragment key={vehicle.modelName + index}>
                    <tr className="text-center">
                      <td>{vehicle.modelName}</td>
                      <td>{vehicle.vehicleType}</td>
                      <td>{vehicle.mileage}</td>
                      <td>{vehicle.topSpeed}</td>
                      <td>{vehicle.cost}</td>
                      <td>{vehicle.sales}</td>
                      <td>
                        <button
                          className="btn-sm btn-danger rounded"
                          id={index}
                          onClick={this.handleDelete}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles,
    totalSales: state.totalSales,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    deleteVehicle: index => {
      dispatch(DELETE_ACTION(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ViewVehicles);
