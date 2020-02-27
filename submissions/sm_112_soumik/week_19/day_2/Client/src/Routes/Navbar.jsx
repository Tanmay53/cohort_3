import React, { useContext, useState, useEffect } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useTransition, animated } from "react-spring";
import { connect } from "react-redux";
import NewBlog from "../Components/NewBlog";
import UserProfile from "../Components/UserProfile";
import { logout } from "../Redux/auth_action";
import { Menu, Icon, Layout } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import BLog_Page from "../Components/BLog_Page";

function Navbar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { SubMenu } = Menu;
  const { location } = useContext(__RouterContext);
  const [toggle, setToggle] = useState(false);
  const handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  useEffect(() => {
    let status = localStorage.getItem("isLoggedIn");
    status = JSON.parse(status);
    if (status == true) {
      setToggle(true);
    }
  }, [props.login]);

  const transtions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(100%,0)" }
  });
  const clickHandlerLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    props.logout();
    return setToggle(false);
  };
  const { Header, Sider, Content } = Layout;

  const toggler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          className="nav_style"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Home</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="User Feed">
              <Menu.Item key="1">
                <Link to="/">Show Feed</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Blog Settings</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/newpost">Add A New Blog</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="appstore" />
                <span>Auth</span>
              </span>
            }
          >
            <Menu.Item key="7">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Profile Settings</span>
              </span>
            }
          >
            <Menu.Item key="11">
              <Link to="/profile">Edit Profile</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/profile">Edit Your Blogs</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggler}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,

            minHeight: 280
          }}
        >
          {transtions.map(({ item, props, key }) => (
            <animated.div {...props} key={key} style={props}>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={props => <Home {...props} />}
                />
                <Route
                  exact
                  path="/login"
                  component={props => <Login {...props} />}
                />
                <Route
                  exact
                  path="/signup"
                  component={props => <Register {...props} />}
                />
                <Route
                  exact
                  path="/newpost"
                  component={props => <NewBlog {...props} />}
                />
                <Route
                  exact
                  path="/profile"
                  component={props => <UserProfile {...props} />}
                />
                <Route
                  path="/users/:id"
                  component={props => <BLog_Page {...props} />}
                />
              </Switch>
            </animated.div>
          ))}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => ({
  login: state.auth
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
