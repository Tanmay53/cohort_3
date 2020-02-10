import React from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Stores from "./component/Stores";
import Faq from "./component/Faq";
import Career from "./component/Career";

import Accesories from "./component/categories/Accesories";
import Mobile from "./component/categories/Mobile";
import Appliance from "./component/categories/Appliance";
import Laptop from "./component/categories/Laptop";
import Gaming from "./component/categories/Gaming";
import Television from "./component/categories/Television";
import Product from "./component/categories/Product";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      television: [],
      mobile: [],
      accesories: [],
      gaming: [],
      laptop: [],
      appliance: []
    }
  }
  componentDidMount() {

    axios("/data.json")
      .then((res) => {
        console.log(res);
        console.log("componentDidMount", res.data);
        this.setState({
          television: res.data.Television,
          mobile: res.data.Mobile,
          accesories: res.data.accesories,
          gaming: res.data.gaming,
          laptop: res.data.laptop,
          appliance: res.data.appliance
        })
      })
      .catch((error) => console.log(error))

  }

  render() {
    console.log("App", this.state);

    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/component/About"><About /></Route>
          <Route path="/component/Stores"><Stores /></Route>
          <Route path="/component/Faq" > <Faq /></Route>
          <Route path="/component/Career" > <Career /></Route>

          <Route path="/component/categories/Mobile"> <Mobile data={this.state.mobile} /> </Route>
          <Route path="/component/categories/Appliance"> <Appliance /></Route>
          <Route path="/component/categories/Laptop"> <Laptop /> </Route>
          <Route path="/component/categories/Television"> <Television data={this.state.television} /> </Route>
          <Route path="/component/categories/Gaming"> <Gaming /></Route>
          <Route path="/component/categories/Accesories"> <Accesories /></Route>

          <Route path="/component/categories/Product"> <Product /></Route>
        </Switch>

        <Footer />
      </div>
    )
  }
}


export default App;
