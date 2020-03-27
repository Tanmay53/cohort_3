import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Jumbotron, Row, Col, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import { login, authentication } from "../../redux/actions/authAction";

const Login = props => {
  const [state, setState] = useState({
    username: "",
    password: "",
    usertype: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      username: state.username,
      password: state.password,
      usertype: state.usertype
    };
    props.login(data);
  };

  useEffect(() => {
    const { error, message, token } = props;
    if (message) {
      if (error) {
        swal({
          title: "Failure",
          text: message,
          icon: "warning",
          timer: 2000,
          button: false
        });
      } else {
        swal({
          title: "Success",
          text: message,
          icon: "success",
          timer: 2000,
          button: false
        }).then(() => {
          props.authentication(token);
          props.history.push("/");
        });
      }
    }
  }, [props.token, props.error]);

  return (
    <Jumbotron>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Login</h1>
          <hr />
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group>
              <Form.Control
                type="email"
                name="username"
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
              <Form.Control
                as="select"
                name="usertype"
                size="lg"
                onChange={e => handleChange(e)}
              >
                <option key="0" value="" defaultValue>
                  === Select Usertype ===
                </option>
                <option>Admin</option>
                <option>User</option>
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
              <Button
                type="submit"
                variant="outline-dark"
                size="lg"
                className="float-right"
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Jumbotron>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  error: state.authReducer.error,
  message: state.authReducer.message,
  token: state.authReducer.token
});
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  authentication: data => dispatch(authentication(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
