import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Product from './Components/Product';
import About from './Components/About';
import Support from './Components/Support';
import Pricing from './Components/Pricing';
import Home from './Components/Home';
import Footer from './Components/Footer';
import product from './Components/product';
import Catalog from './Components/Product/items/Catalog';
import ProductDisplay from './Components/Product/ProductDisplay';
import NotFound from './Components/NotFound';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <div className='border-bottom'>
          <div className='container'>
            <Navbar />
          </div>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path='/product/t-shirt'
            exact
            render={props => (
              <Catalog {...props} item={product.Shirts} title='Shirts' />
            )}
          />
          <Route
            path='/product/shoes'
            exact
            render={props => (
              <Catalog {...props} item={product.Shoes} title='Shoes' />
            )}
          />
          <Route
            path='/product/watches'
            exact
            render={props => (
              <Catalog {...props} item={product.Watches} title='Watches' />
            )}
          />
          <Route
            path='/product/pants'
            exact
            render={props => (
              <Catalog
                {...props}
                item={product.Pants}
                title='Trousers & Pants'
              />
            )}
          />
          <Route
            path='/product/suits'
            exact
            render={props => (
              <Catalog
                {...props}
                item={product.Suits}
                title='Suits & Blazers'
              />
            )}
          />
          <Route
            path='/product/:catalog/:id'
            render={props => <ProductDisplay {...props} />}
          />
          <Route path='/about' component={About} />
          <Route path='/product' exact component={Product} />
          <Route path='/support' component={Support} />
          <Route path='/pricing' component={Pricing} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
