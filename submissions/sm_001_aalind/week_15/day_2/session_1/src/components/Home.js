import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery_list: []
    };
  }

  componentDidMount = () => {
    axios.get('http://127.0.0.1:5000/listing').then(data => {
      this.setState({
        grocery_list: data.data
      });
    });
  };

  render() {
    return (
      <div className='container' style={{ background: 'red' }}>
        <div
          className='row d-flex justify-content-center'
          style={{ background: 'blue' }}
        >
          <h1>Grocery Listing</h1>
        </div>
        <div className='row d-flex justify-content-sm-center justify-content-center justify-content-md-between justify-content-lg-center'>
          {this.state.grocery_list.map((item, index) => {
            return (
              <Item key={index + 1} item_no={index + 1} item_info={item} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
