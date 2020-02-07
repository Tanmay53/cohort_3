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
import NotFound from "./component/NotFound";
import Cart from "./component/Cart";
import Login from "./component/Login";

import Accesories from "./component/categories/accessories/Accessories";
import InfoAccesories from "./component/categories/accessories/InfoAccessories";
import Mobile from "./component/categories/mobile/Mobile";
import InfoMobile from "./component/categories/mobile/InfoMobile";
import Appliance from "./component/categories/appliances/Appliances";
import InfoAppliance from "./component/categories/appliances/InfoAppliances";
import Laptop from "./component/categories/laptop/Laptop";
import InfoLaptop from "./component/categories/laptop/InfoLaptop";
import Gaming from "./component/categories/gaming/Gaming";
import InfoGaming from "./component/categories/gaming/InfoGaming";
import Television from "./component/categories/television/Television";
import InfoTelevision from "./component/categories/television/InfoTelevision";

//developer mode
const verbose = 0;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      cart: [],
      television: [],
      mobile: [],
      accesories: [],
      gaming: [],
      laptop: [],
      appliance: []
    }
  }

  //callback function  to  set the login  state 
  loginState = (value) => {

    this.setState({
      isLogged: value
    })

  }

  //callback function to  add items to  cart
  addToCart = (element) => {

    this.setState({
      cart: [...this.state.cart, element]
    })
  }
  componentDidMount() {

    //fetching data from data.json
    axios("/data.json")
      .then((res) => {

        if (verbose) {
          console.log(res);
          console.log("componentDidMount", res.data);
        }

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
          <Route path="/component/about"><About /></Route>
          <Route path="/component/stores"><Stores /></Route>
          <Route path="/component/faq" > <Faq /></Route>
          <Route path="/component/career" > <Career /></Route>

          <Route path="/component/login">
            <Login loginState={this.loginState} />
          </Route>

          <Route path="/component/cart">
            <Cart data={this.state.cart} />
          </Route>

          {/* categories of products    */}
          <Route exact path="/component/categories/mobile">
            <Mobile
              data={this.state.mobile}
              islogged={this.state.isLogged}
              addToCart={this.addToCart}
            />
          </Route>

          <Route path="/component/categories/appliance"> <Appliance /></Route>
          <Route path="/component/categories/laptop"> <Laptop /> </Route>

          <Route exact path="/component/categories/television">
            <Television
              data={this.state.television}
              islogged={this.state.isLogged}
              addToCart={this.addToCart}
            />
          </Route>
          <Route path="/component/categories/gaming"> <Gaming /></Route>
          <Route path="/component/categories/accesories"> <Accesories /></Route>

          {/* Routing for Details page category wise */}
          <Route
            path="/component/categories/television/:id"
            render={(props) =>
              <InfoTelevision
                data={this.state.television} {...props}
                islogged={this.state.islogged}
                addToCart={this.state.addToCart}
              />}
          />


          <Route
            path="/component/categories/mobile/:id"
            render={(props) =>
              <InfoMobile
                data={this.state.mobile} {...props}
                addToCart={this.state.addToCart}
              />}
          />

          <Route><NotFound /></Route>
        </Switch>

        <Footer />
      </div>
    )
  }
}


export default App;
