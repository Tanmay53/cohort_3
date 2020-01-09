import React from "react";
import { connect } from "react-redux";
import { addVehicle } from "../../actions/vehicleActions";
import { Col, Jumbotron, Form, Button } from "react-bootstrap";

class AddVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      mileage: "",
      speed: "",
      cost: "",
      sales: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      type: this.state.type,
      mileage: this.state.mileage,
      speed: this.state.speed,
      cost: this.state.cost,
      sales: this.state.sales
    };
    this.props.addVehicle(data);
  };

  render() {
    return (
      <React.Fragment>
        <Col md={{ span: 4, offset: 4 }}>
          <Jumbotron className="my-5">
            <h1>Add New Vehicle!</h1>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Label>Model Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
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
                  placeholder="Enter vehicle mileage"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="speed">
                <Form.Label>Top Speed</Form.Label>
                <Form.Control
                  type="text"
                  name="speed"
                  placeholder="Enter vehicle top speed"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  type="text"
                  name="cost"
                  placeholder="Enter vehicle cost"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="sales">
                <Form.Label>Sales</Form.Label>
                <Form.Control
                  type="text"
                  name="sales"
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

const mapDispatchToProps = dispatch => {
  return {
    addVehicle: data => dispatch(addVehicle(data))
  };
};

export default connect(null, mapDispatchToProps)(AddVehicle);
