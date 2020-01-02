/* eslint-disable no-useless-constructor */
import React from 'react';
import {toggleTodo, deleteTodo, countTodo} from '../redux/action';
import { connect } from 'react-redux';

class TodoRow extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        this.props.toggleTodo();
        this.props.countTodo();
    }

    handleDelete = () => {
        this.props.deleteTodo();
        this.props.countTodo();
    }

    render() {
        return (
            <li>
                <p style = {{color: this.props.todo.completed?"green":"red"}}>{this.props.todo.itemName}</p>
                <button onClick = {this.handleToggle}>Toggle Todo</button>
                <button onClick = {this.handleDelete}>Delete Todo</button>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    todo: state.todo[Number(ownProps.idx)]
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    toggleTodo: () => dispatch(toggleTodo(Number(ownProps.idx))),
    deleteTodo: () => dispatch(deleteTodo(Number(ownProps.idx))),
    countTodo: () => dispatch(countTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);