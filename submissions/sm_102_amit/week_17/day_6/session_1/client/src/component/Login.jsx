import React, { Component } from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
      const res = await Axios.post("http://127.0.0.1:5000/auth/login", {
        ...this.state
      });
      swal({
        title: "Done!",
        text: res.data.message,
        icon: "info",
        timer: 2000,
        button: false
      }).then(() => {
        this.props.checkAuth();
        this.props.history.push("/users/listing");
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <Jumbotron>
        <h1>User Login</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              size="lg"
              placeholder="Enter your email id ... "
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              size="lg"
              placeholder="Enter your password ... "
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="success" size="lg" block>
              Login
            </Button>
          </Form.Group>
        </Form>
      </Jumbotron>
    );
  }
}

export default Login;
