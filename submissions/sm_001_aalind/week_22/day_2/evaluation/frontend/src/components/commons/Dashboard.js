import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: [],
      total_pages: 1,
      per_page: 10,
      curr_page: 1,
      categories: [],
      category_id: '0',
      order_by: 'asc'
    };
  }

  getProducts = (page_no, per_page, category_id) => {
    const token = localStorage.getItem('token');
    axios
      .get(
        `http://127.0.0.1:5000/products?page=${page_no}&per_page=${per_page}&category_id=${category_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        if (!res.data.error) {
          this.setState({
            ...this.state,
            productsArr: res.data.payload.products,
            total_pages: res.data.payload.total_pages
          });
        }
      });
  };

  componentDidUpdate = () => {
    let usp = new URLSearchParams(this.props.location.search);
    let curr_page = Number(usp.get('page')) || 1;
    let per_page = Number(usp.get('per_page')) || 10;
    let category_id = Number(usp.get('category_id')) || 0;
    if (
      curr_page !== this.state.curr_page ||
      per_page !== this.state.per_page ||
      category_id !== this.state.category_id
    ) {
      this.setState({
        ...this.state,
        curr_page: curr_page,
        per_page: per_page,
        category_id: category_id
      });
      this.getProducts(curr_page, per_page, category_id);
    }
  };

  componentDidMount = () => {
    const usp = new URLSearchParams(this.props.location.search);
    let curr_page = usp.get('page') || 1;
    let per_page = usp.get('per_page') || 10;
    let category_id = usp.get('category_id') || 0;

    const token = localStorage.getItem('token');

    this.setState(
      {
        ...this.state,
        curr_page: curr_page,
        per_page: per_page,
        category_id: category_id
      },
      () => {
        this.getProducts(curr_page, per_page, category_id);
      }
    );
    axios
      .get('http://127.0.0.1:5000/categories', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if (!res.data.error) {
          //   console.log(res.data.categories);
          this.setState({
            categories: res.data.payload.categories
          });
        }
      });
  };

  changeHandler = e => {
    const category_id = e.target.value;
    this.setState(
      {
        category_id: category_id
      },
      () => {
        this.props.history.push(
          `${this.props.match.url}?page=${1}&per_page=${
            this.state.per_page
          }&category_id=${category_id}`
        );
      }
    );
  };

  renderPagination = () => {
    let total_pages = this.state.total_pages;
    let lists_to_render = [];

    for (let i = 1; i <= total_pages; i++) {
      lists_to_render.push(
        <li className='page-item' key={i}>
          <Link
            to={`${this.props.match.url}?page=${i}&per_page=${this.state.per_page}&category_id=${this.state.category_id}`}
            className='page-link'
          >
            {i}
          </Link>
        </li>
      );
    }

    return lists_to_render;
  };

  productDeleteHandler = product_id => {
    const token = localStorage.getItem('token');
    axios
      .delete(`http://127.0.0.1:5000/products/${product_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        alert(res.data.message);
        this.getProducts(
          this.state.page_no,
          this.state.per_page,
          this.state.category_id
        );
        // this.props.history.push('/');
      });
  };

  renderProducts = productsArr => {
    return productsArr.map(product => {
      return (
        <div
          className='card m-1 bg-light'
          style={{ width: '25rem' }}
          key={product.product_id}
        >
          <div className='row'>
            <div className='col'>
              <div className='card-body'>
                <p>Product Name: {product.product_name}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category_name}</p>
              </div>
              {this.props.user['type'] === 'admin' ? (
                <div className='card-footer'>
                  {/* <button className='btn btn-success m-1'>Edit</button> */}
                  <button
                    className='btn btn-danger m-1'
                    onClick={() =>
                      this.productDeleteHandler(product.product_id)
                    }
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <select
            name='categories'
            onChange={this.changeHandler}
            value={this.state.category_id}
            className='m-2'
          >
            <option value='0' disabled>
              Select a category
            </option>
            {this.state.categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {this.state.productsArr.length ? (
          <React.Fragment>
            {/* <div className='row'>
              <Link to='desc'> Order By Descending Price</Link>
              <Link to='asc'> Order By Ascending Price</Link>
            </div> */}
            <div className='row justify-content-center'>
              {this.renderProducts(this.state.productsArr)}
            </div>
            <div className='row justify-content-center m-2'>
              <nav>
                <ul className='pagination'>
                  <li className='page-item'>
                    <Link
                      to={`${this.props.match.url}?page=${1}&per_page=${
                        this.state.per_page
                      }&category_id=${this.state.category_id}`}
                      className='page-link'
                    >
                      Start
                    </Link>
                  </li>

                  {this.renderPagination()}

                  <li className='page-item'>
                    <Link
                      to={`${this.props.match.url}?page=${this.state.total_pages}&per_page=${this.state.per_page}&category_id=${this.state.category_id}`}
                      className='page-link'
                    >
                      End
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </React.Fragment>
        ) : (
          <h1>No Products</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Dashboard);
