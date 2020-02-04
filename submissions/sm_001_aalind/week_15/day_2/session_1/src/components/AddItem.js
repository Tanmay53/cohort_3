import React from 'react';
import axios from 'axios';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: 0
    };
    this.initState = this.state;
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(
      {
        ...this.state,
        [name]: value
      },
      () => {
        // console.log(this.state);
        // console.log(this.initState);
      }
    );
  };

  formSubmitHandler = event => {
    axios
      .post('http://127.0.0.1:5000/create', this.state)
      .then(response => {
        alert('Item added successfully');
        console.log(response);
        this.setState(this.initState);
      })
      .catch(error => console.error(error));

    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1>Add Item</h1>
        </div>
        <div className='col-6 mx-auto'>
          <form onSubmit={this.formSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='item'>Item Name</label>
              <input
                type='text'
                name='item'
                className='form-control'
                value={this.state.item}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='quantity'>Quantity</label>
              <select
                name='quantity'
                className='form-control'
                value={this.state.quantity}
                onChange={this.changeHandler}
                required
              >
                <option value=''>---</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
              </select>
            </div>
            <div className='form-group'>
              <input
                type='submit'
                value='Add Item'
                className='form-control btn btn-primary'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
