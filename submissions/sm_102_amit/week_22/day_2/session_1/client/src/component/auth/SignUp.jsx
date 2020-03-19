import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Jumbotron, Row, Col, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import { signUp } from "../../redux/actions/authAction";

const SignUp = props => {
  const [state, setState] = useState({
    fullname: "",
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
      fullname: state.fullname,
      username: state.username,
      password: state.password,
      usertype: state.usertype
    };
    props.signUp(data);
  };

  useEffect(() => {
    const { error, message } = props;

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
          props.history.push("/login");
        });
      }
    }
  }, [props.message, props.error]);

  return (
    <Jumbotron>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>SignUp</h1>
          <hr />
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fullname"
                size="lg"
                placeholder="Enter your fullname ... "
                onChange={e => handleChange(e)}
              />
            </Form.Group>
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
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Jumbotron>
  );
};

const mapStateToProps = state => ({
  error: state.authReducer.error,
  message: state.authReducer.message
});
const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUp(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
