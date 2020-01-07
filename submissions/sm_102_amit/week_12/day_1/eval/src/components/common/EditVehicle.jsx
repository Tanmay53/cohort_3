import React from "react";
import { connect } from "react-redux";
import { updateVehicle } from "../../actions/vehicleActions";
import { Col, Jumbotron, Form, Button } from "react-bootstrap";

class EditVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      type: "",
      mileage: "",
      speed: "",
      cost: "",
      sales: ""
    };
  }

  componentDidMount = () => {
    const {
      vehicles,
      match: { params }
    } = this.props;
    let data = vehicles.filter(
      vehicle => Number(vehicle._id) === Number(params.id)
    );
    console.log(data);
    this.setState({
      id: data[0]._id,
      name: data[0].name,
      type: data[0].type,
      mileage: data[0].mileage,
      speed: data[0].speed,
      cost: data[0].cost,
      sales: data[0].sales
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      _id: this.state.id,
      name: this.state.name,
      type: this.state.type,
      mileage: this.state.mileage,
      speed: this.state.speed,
      cost: this.state.cost,
      sales: this.state.sales
    };
    this.props.updateVehicle(data);
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Col md={{ span: 4, offset: 4 }}>
          <Jumbotron className="my-5">
            <h1>Edit Vehicle!</h1>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Label>Model Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Enter vehicle model name"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="type">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  onChange={e => this.handleChange(e)}
                >
                  <option value="" defaultValue>
                    Select vehicle type
                  </option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="mileage">
                <Form.Label>Mileage</Form.Label>
                <Form.Control
                  type="text"
                  name="mileage"
                  value={this.state.mileage}
                  placeholder="Enter vehicle mileage"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="speed">
                <Form.Label>Top Speed</Form.Label>
                <Form.Control
                  type="text"
                  name="speed"
                  value={this.state.speed}
                  placeholder="Enter vehicle top speed"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  type="text"
                  name="cost"
                  value={this.state.cost}
                  placeholder="Enter vehicle cost"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="sales">
                <Form.Label>Sales</Form.Label>
                <Form.Control
                  type="text"
                  name="sales"
                  value={this.state.sales}
                  placeholder="Enter sales for FY2019-2020"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <hr />

              <Button type="submit" variant="outline-success">
                Submit
              </Button>
            </Form>
          </Jumbotron>
        </Col>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateVehicle: data => dispatch(updateVehicle(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle);
