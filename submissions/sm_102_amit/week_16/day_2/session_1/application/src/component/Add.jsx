import React, { Component } from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      mobile: "",
      age: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://127.0.0.1:5000/create", {
        ...this.state
      });
      swal({
        title: "Done!",
        text: res.data.message,
        icon: "success",
        timer: 2000,
        button: false
      }).then(() => {
        this.props.fetchUsers();
        this.props.history.push("/");
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <Jumbotron>
        <h1>Add User</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              name="id"
              size="lg"
              placeholder="User Id"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="name"
              size="lg"
              placeholder="User Name"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="email"
              size="lg"
              placeholder="User Email"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="mobile"
              size="lg"
              placeholder="User Phone No."
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="age"
              size="lg"
              placeholder="User Age"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="success" size="lg" block>
              Add
            </Button>
          </Form.Group>
        </Form>
      </Jumbotron>
    );
  }
}

export default Add;
