import React from 'react';
import axios from 'axios';

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: 0
    };
  }

  componentDidMount = () => {
    axios.get(`http://127.0.0.1:5000/listing`).then(response => {
      let item_no = Number(this.props.match.params.index);
      this.setState(response.data[item_no - 1]);
    });
  };

  changeHandler = () => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  formSubmitHandler = () => {
    axios
      .post(
        `http:///127.0.0.1:5000/edit/${this.props.match.params.index}`,
        this.state
      )
      .then(response => {
        alert('Item updated successfully!');
        console.log(response);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        {/* {console.log(this.props)} */}
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
                value='Edit Item'
                className='form-control btn btn-primary'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditItem;
