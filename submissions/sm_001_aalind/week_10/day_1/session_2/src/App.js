import React, { Component } from 'react';
import store from './Redux/store';
import { addItem, markItem, unmarkItem, deleteItem } from './Redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: '',
      completed: false
    };
    this.initState = this.state;
  }

  changeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  formHandler = event => {
    store.dispatch(addItem(this.state));
    this.setState(this.initState);
    event.preventDefault();
  };

  markItem = () => {
    let value = event.target.value;
    store.dispatch(markItem(value));
  };

  unmarkItem = () => {
    let id = event.target.value;
    store.dispatch(unmarkItem(id));
  };

  deleteItem = item_id => {
    store.dispatch(deleteItem(item_id));
  };

  incompleteTodo = todos => {
    return todos.all_items
      .filter(item => item.completed === false)
      .map(item => {
        return (
          <p key={item.id}>
            <input type='checkbox' onChange={this.markItem} value={item.id} />
            {item.item_name}
            <button onClick={() => this.deleteItem(item.id)} value='hi'>
              delete
            </button>
          </p>
        );
      });
  };

  completeTodo = todos => {
    return todos.all_items
      .filter(item => item.completed)
      .map(item => {
        return (
          <p key={item.id}>
            <input
              type='checkbox'
              checked
              onChange={this.unmarkItem}
              value={item.id}
            />
            {item.item_name}
            <button onClick={() => this.deleteItem(item.id)} value='hi'>
              delete
            </button>
          </p>
        );
      });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h1>To-do App</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 mx-auto d-flex justify-content-center'>
            <form onSubmit={this.formHandler} className='form-inline'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='item_name'
                  value={this.state.item_name}
                  onChange={this.changeHandler}
                  required
                  autoFocus
                />
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='Add Item'
                />
              </div>
            </form>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 text-center'>
            <h3>Incomplete</h3>
            {this.incompleteTodo(store.getState())}
          </div>
          <div className='col-sm-6 text-center'>
            <h3>Complete</h3>
            {this.completeTodo(store.getState())}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
