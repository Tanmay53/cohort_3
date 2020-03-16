import React, { useState } from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

const Login = props => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://127.0.0.1:5000/auth/login", {
        ...state
      });
      console.log(res);
      swal({
        title: "Done!",
        text: res.data.message,
        icon: "info",
        timer: 2000,
        button: false
      }).then(() => {
        props.checkAuth(res.data.token);
        props.history.push("/users/listing");
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Jumbotron>
      <h1>User Login</h1>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            size="lg"
            placeholder="Enter your email id ... "
            onChange={e => handleChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            size="lg"
            placeholder="Enter your password ... "
            onChange={e => handleChange(e)}
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
};

export default Login;
