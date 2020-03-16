import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Button, Avatar } from "antd";
import "./App.css";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import Axios from "axios";
const { Header, Content, Footer } = Layout;

function App() {
  const [state, setState] = useState({
    isAuth: localStorage.getItem("isAuth"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token")
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    setState({
      isAuth: false,
      user: {},
      token: null
    });
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="5" className="logo">
            <Link to="/">Blogger</Link>
          </Menu.Item>
          <Menu.Item key="1">
            {state.isAuth ? (
              <Link to="/create">Create Blog</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Menu.Item>
          <Menu.Item key="2">
            {state.isAuth ? (
              <Link to="/update">Update Profile</Link>
            ) : (
              <Link to="/signup">Signup</Link>
            )}
          </Menu.Item>
          <Menu.Item key="3">
            {state.isAuth ? (
              <Button type="primary" onClick={logout}>
                Logout
              </Button>
            ) : null}
          </Menu.Item>
          {state.isAuth ? (
            <Menu.Item style={{ left: "50%" }}>
              <Avatar src={state.user.profile_img || ""}></Avatar>
            </Menu.Item>
          ) : null}
        </Menu>
      </Header>
      <Content style={{ padding: "2rem 50px", minHeight: "79vh" }}>
        <div style={{ padding: 24, minHeight: 280 }}>
          <Routes update={setState}></Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
