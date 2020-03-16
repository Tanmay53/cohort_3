import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Icon,
  Input,
  Button,
  notification,
  Select
} from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
const { Option } = Select;
function Signup(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        submit_signup(values);
      }
    });
  };

  const submit_signup = async ({ email, password, gender, name }) => {
    let data = {
      name,
      email,
      password,
      gender
    };
    let response = await Axios({
      url: "http://localhost:5000/auth/signup",
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.data.error) {
      notification.open({
        message: "Signup Failed",
        description: response.data.message
      });
    } else {
      const { history } = props;
      notification.open({
        message: "Signup Success",
        description: "Login to Continue"
      });
      history.push("/login");
    }
  };

  const { getFieldDecorator } = props.form;
  return (
    <Row>
      <Col lg={{ span: 8, offset: 8 }}>
        <Card hoverable title="Signup To Blog">
          <Form
            onSubmit={handleSubmit}
            className="login-form"
            style={{ margin: "0px auto" }}
          >
            <Form.Item>
              {getFieldDecorator("name", {
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
              {getFieldDecorator("gender", {
                rules: [
                  { required: true, message: "Please input your Gender!" }
                ]
              })(
                <Select style={{ width: "100%" }} placeholder="Enter Gender">
                  <Option value="Male">Male</Option>

                  <Option value="Female">Female</Option>
                  <Option value="Others">Others</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your Email!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="email"
                  placeholder="Enter Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
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
                Signup
              </Button>
              Or <Link to="/login">Login.!</Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Signup);

export default WrappedNormalLoginForm;
