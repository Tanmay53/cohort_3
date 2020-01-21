/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "../UIcomponets/addTodo";
import RemoveTodo from "./removeTodo";
import ToggleItem from "./toggleTodo";
import "bootstrap/dist/css/bootstrap.min.css";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-12 col-md-8 col-lg-6 bg-light py-3">
            <h1>Todos</h1>
            <AddTodo />
            <br></br>
            <h1>Incompleted Todos</h1>
            <ul className="list-group">
              {this.props.items.map(item =>
                !item.completed ? (
                  <li
                    key={item.itemName}
                    className="list-group-item h3 text-warning bg-dark m-2"
                  >
                    {item.itemName}
                    <RemoveTodo item={item.itemName} />
                    <ToggleItem status={item.completed} item={item.itemName} />
                  </li>
                ) : null
              )}
            </ul>
            <br></br>
            <h1>Completed Todos</h1>
            <ul className="list-group">
              {this.props.items.map(item =>
                item.completed ? (
                  <li
                    key={item.itemName}
                    className="list-group-item h3 text-warning bg-dark m-2"
                  >
                    {item.itemName}

                    <RemoveTodo item={item.itemName} />
                    <ToggleItem status={item.completed} item={item.itemName} />
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.todo,
    count: state.count
  };
};

export default connect(mapStateToProps)(Todo);
