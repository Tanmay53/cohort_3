import React from "react";
import Axios from "axios";
import { Row, Col, Form, Icon, Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
function Login(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        submit_login(values);
      }
    });
  };

  const submit_login = async ({ username, password }) => {
    let response = await Axios({
      url: "http://localhost:5000/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: username,
        password: password
      }
    });

    if (!response.data.error) {
      const { history } = props;
      localStorage.setItem("token", response.data.token);
      notification.open({
        message: "Login Successful",
        description: "Redirecting to Home...."
      });

      verify_user(response.data.token);
      setTimeout(() => {
        history.push("/");
      }, 500);
    } else {
      notification.open({
        message: "Login Failed",
        description: response.data.message
      });
    }
  };

  const verify_user = async token => {
    let response = await Axios({
      url: "http://localhost:5000/auth/getuser",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.data.error == false) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      props.update({
        isAuth: "true",
        user: response.data.user,
        token: localStorage.getItem("token")
      });
    }
  };

  const { getFieldDecorator } = props.form;
  return (
    <Row>
      <Col lg={{ span: 12, offset: 9 }} md={{ span: 12, offset: 6 }}>
        <Form onSubmit={handleSubmit} className="login-form">
          <h3>Login To Blog</h3>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);

export default WrappedNormalLoginForm;
