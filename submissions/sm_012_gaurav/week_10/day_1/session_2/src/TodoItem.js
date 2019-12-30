/* eslint-disable no-useless-constructor */
import React from 'react';
import {toggleItem, deleteItem} from './redux/Action';
import store from './redux/Store';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <p style = {this.props.todoItem.completed?{color:"green"}:{color: "red"}}>{this.props.todoItem.item}</p>
                <button onClick = {() => store.dispatch(toggleItem(this.props.todoItem.item))}>Toggle Item</button>
                <button onClick = {() => store.dispatch(deleteItem(this.props.todoItem.item))}>DeleteItem</button>
            </>
        );
    }
}

export default TodoItem;