import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menubar from "./component/common/Menubar";
import Home from "./component/home/Home";
import AddProduct from "./component/product/AddProduct";
import AddCategory from "./component/category/AddCategory";
import CategoryList from "./component/category/CategoryList";
import SignUp from "./component/auth/SignUp";
import Login from "./component/auth/Login";

const App = () => {
  return (
    <>
      <Menubar />
      <Container className="mt-5">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/category-list" component={CategoryList} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
