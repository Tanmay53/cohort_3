import React from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteVehicle } from "../../actions/vehicleActions";
import { Container, Jumbotron, Table, Button } from "react-bootstrap";

class VehicleList extends React.Component {
  constructor(props) {
    super();
  }

  // componentDidMount = () => {
  //   Axios.get("http://localhost:3000/data.json")
  //     .then(res => {
  //       console.log(res);
  //       // this.props.vehicleList(res.data);
  //     })
  //     .catch(err => console.log(err));
  // };
  render() {
    const { vehicles, deleteVehicle } = this.props;
    const vehiclesList = vehicles.length ? (
      vehicles.map(vehicle => (
        <tr key={vehicle._id}>
          <td>{vehicle.name}</td>
          <td>{vehicle.type}</td>
          <td>{vehicle.mileage}</td>
          <td>{vehicle.speed}</td>
          <td>{vehicle.cost}</td>
          <td>{vehicle.sales}</td>
          <td>
            <Link
              to={`edit-vehicle/${vehicle._id}`}
              className="btn btn-success btn-sm"
            >
              EDIT
            </Link>
          </td>
          <td>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteVehicle(vehicle._id)}
            >
              DELETE
            </Button>
          </td>
        </tr>
      ))
    ) : (
      <tr className="text-center">
        <td colSpan="8">No result found!</td>
      </tr>
    );
    return (
      <Container className="my-5">
        <Jumbotron className="my-5">
          <h1>All Vehicle List!</h1>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>Model Name</th>
                <th>Vehicle Type</th>
                <th>Mileage</th>
                <th>Top Speed</th>
                <th>Cost</th>
                <th>Sales FY 19-20</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>{vehiclesList}</tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  };
};
const mapDispathchToProps = dispatch => {
  return {
    // vehicleList: data => dispatch(vehicleList(data)),
    deleteVehicle: id => dispatch(deleteVehicle(id))
  };
};

export default connect(mapStateToProps, mapDispathchToProps)(VehicleList);
