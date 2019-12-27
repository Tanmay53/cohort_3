import React from 'react';
import {
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTodo
} from '../actions/todoActions';
import { connect } from 'react-redux';
let globalCounter = 0;
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddTodo = e => {
    let todo = {
      id: ++globalCounter,
      task: this.state.todo
    };
    const { addTodo } = this.props;

    addTodo(todo);
    this.forceUpdate();
    this.setState({ todo: '' });
  };

  componentDidMount() {
    const { fetchTodo } = this.props;
    fetchTodo();
  }
  updateTask = id => {
    let target = {};
    this.props.items.forEach(item => {
      if (item.id == id) {
        target = item;
      }
    });
    console.log(target);
    this.props.updateTodo(target);
    this.forceUpdate();
  };

  deleteItem = id => {
    let target = {};
    console.log(id);
    this.props.completed.forEach(item => {
      if (item.id == id) {
        target = item;
      }
    });
    console.log(target);
    this.props.deleteTodo(target);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <input
          type='text'
          placeholder='add todo'
          value={this.state.todo}
          onChange={this.handleChange}
          name='todo'
        />
        <button onClick={this.onAddTodo}>Add Todo</button>
        <div className='task'>
          <h2>Task To Complete</h2>
          <ol>
            {this.props.items.map(item => (
              <li key={item.id}>
                {item.task}
                <button
                  onClick={() => {
                    this.updateTask(item.id);
                  }}
                  style={{ marginLeft: '10px' }}
                >
                  Mark as Completed
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className='completed'>
          <h2>Completed task</h2>
          <ol>
            {this.props.completed.map(item => (
              <li key={item.id}>
                <strike>{item.task}</strike>
                <span>
                  <button
                    style={{ margin: '0px 20px' }}
                    onClick={() => {
                      this.deleteItem(item.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    items: state.todos.items,
    completed: state.todos.completed
  };
};

export default connect(mapStatetoProps, {
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTodo
})(Todo);
