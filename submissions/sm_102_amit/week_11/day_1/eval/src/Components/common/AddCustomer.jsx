import React from "react";
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

  render() {
    return (
      <React.Fragment>
        <Col md={{ span: 4, offset: 4 }}>
          <Jumbotron>
            <h1>Add New Customer!</h1>
            <Form onSubmit={e => this.addCustomer(e)}>
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

export default AddCustomer;
