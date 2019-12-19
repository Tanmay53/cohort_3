import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import Product from './Components/Product';
import About from './Components/About';
import Support from './Components/Support';
import Pricing from './Components/Pricing';
import Home from './Components/Home';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='border-bottom'>
          <div className='container'>
            <Navbar />
          </div>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/product' component={Product} />
        <Route path='/support' component={Support} />
        <Route path='/pricing' component={Pricing} />
      </React.Fragment>
    );
  }
}

export default App;
