import React from "react";
import { connect } from "react-redux";
import { addCustomer } from "../../Redux/action";
import { Col, Jumbotron, Form, Button } from "react-bootstrap";

class AddCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
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
      email: this.state.email,
      phone: this.state.phone,
      sales: this.state.sales
    };
    this.props.addCustomer(data);
  };

  render() {
    return (
      <React.Fragment>
        <Col md={{ span: 4, offset: 4 }}>
          <Jumbotron>
            <h1>Add New Customer!</h1>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter customer fullname"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
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
    addCustomer: data => dispatch(addCustomer(data))
  };
};

export default connect(null, mapDispatchToProps)(AddCustomer);
