import React from 'react';
import { Link } from 'react-router-dom';
import product from '../product';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let query = id.split('_')[0];
    product[query].forEach(item => {
      if (item.id == id) {
        this.setState({ item: item });
      }
    });
  }

  render() {
    return (
      <div className='d-flex container'>
        <div className='col-lg-12 p-5'>
          <div className='row'>
            <div className='col-lg-4'>
              <img src={this.state.item.img_url} alt='' className='img-fluid' />
            </div>
            <div className='col-lg-6'>
              <h1 className='lead' style={{ fontSize: '2.5rem' }}>
                {this.state.item.name}
              </h1>
              <p className='lead text-muted'>Mens Shirt Designs </p>
              <hr />
              <h1 className='lead' style={{ fontSize: '2rem' }}>
                Rs. {this.state.item.price}
              </h1>
              <div className='d-flex'>
                <div
                  className='rounded-circle border text-center mr-2'
                  style={{ width: '50px', height: '50px', paddingTop: '12px' }}
                >
                  XS
                </div>
                <div
                  className='rounded-circle border text-center mr-2'
                  style={{ width: '50px', height: '50px', paddingTop: '12px' }}
                >
                  SM
                </div>
                <div
                  className='rounded-circle border text-center mr-2'
                  style={{ width: '50px', height: '50px', paddingTop: '12px' }}
                >
                  LG
                </div>
                <div
                  className='rounded-circle border text-center mr-2'
                  style={{ width: '50px', height: '50px', paddingTop: '12px' }}
                >
                  XL
                </div>
              </div>
              <div className='mt-5'>
                <button className='btn btn-danger p-3 px-5 m-2'>
                  Add to Cart
                </button>
                <Link to='/cart' className='btn btn-warning p-3 px-5 m-2'>
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDisplay;
