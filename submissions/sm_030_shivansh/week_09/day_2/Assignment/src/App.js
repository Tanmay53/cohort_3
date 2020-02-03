import React from 'react';
import { Switch, Route } from "react-router-dom";

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


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/component/About"><About /></Route>
          <Route path="/component/Stores"><Stores /></Route>
          <Route path="/component/Faq" > <Faq /></Route>
          <Route path="/component/Career" > <Career /></Route>

          <Route path="/component/categories/Mobile"> <Mobile /> </Route>
          <Route path="/component/categories/Appliance"> <Appliance /></Route>
          <Route path="/component/categories/Laptop"> <Laptop /> </Route>
          <Route path="/component/categories/Television"> <Television /> </Route>
          <Route path="/component/categories/Gaming"> <Gaming /></Route>
          <Route path="/component/categories/Accesories"> <Accesories /></Route>
        </Switch>

        <Footer />
      </div>
    )
  }
}


export default App;
