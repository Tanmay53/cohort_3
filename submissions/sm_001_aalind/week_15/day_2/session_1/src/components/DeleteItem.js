import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class DeleteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: 0,
      purchased: ''
    };
  }

  componentDidMount = () => {
    let item_no = Number(this.props.match.params.index);
    axios.get('http://127.0.0.1:5000/listing').then(response => {
      //   console.log(response);
      this.setState(response.data[item_no - 1], () => console.log(this.state));
    });
  };

  clickHandler = () => {
    axios
      .post(`http://127.0.0.1:5000/delete`, {
        item_no: Number(this.props.match.params.index)
      })
      .then(response => {
        console.log(response);
        this.props.history.push('/home');
      });
  };

  render() {
    return (
      <div className='card m-2' style={{ minWidth: '19rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>{this.state.item}</h5>
          <p className='card-text'>Quantity: {this.state.quantity}</p>
          <p
            className={`card-text ${
              this.state.purchased.toLowerCase() === 'true'
                ? 'text-success'
                : 'text-danger'
            }`}
          >
            {this.state.purchased.toLowerCase() === 'true'
              ? 'Purchased'
              : 'Not Purchased'}
          </p>
          <div className='d-flex justify-content-between'>
            <button className='btn-primary btn' onClick={this.clickHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteItem;
