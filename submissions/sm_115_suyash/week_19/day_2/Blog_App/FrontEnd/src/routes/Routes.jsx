import React from "react";
import { Link, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../components/common/Home";
import SignUp from "../components/auth/Signup";
import AllBlogs from "../components/common/AllBlogs";
import MyBlogs from "../components/common/MyBlogs";
import CreateNewBlog from "../components/common/CreateNewBlog";

const Routes = () => {
  return (
    <div>
      <div className="shadow-sm">
        <ul
          className="d-flex justify-content-between"
          style={{ listStyle: "none" }}
        >
          <li className="py-3">
            <Link to="/">Landing Page</Link>
          </li>
          <li className="py-3">
            <Link to="/all/blogs">All Blogs</Link>
          </li>
          <li className="py-3">
            <Link to="/my/blogs">My Blogs</Link>
          </li>
          <li className="py-3">
            <Link to="/new/blog">New Blog</Link>
          </li>
          <li className="py-3 pr-5">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/all/blogs" component={AllBlogs} />
      <Route path="/my/blogs" component={MyBlogs} />
      <Route path="/new/blog" component={CreateNewBlog} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
};

export default Routes;
