/* eslint-disable no-useless-constructor */
import React from 'react';
import {connect} from 'react-redux';
import {addTodo, countTodo} from '../redux/action';
import TodoRow from './TodoRow';
import Total from './Total';


const mapStateToProps = (state) => { return {todos: state.todo}};

const mapDispatchToProps = (dispatch) => ({
    addTodo: (val) => dispatch(addTodo(val)),
    countTodo: () => dispatch(countTodo())
});

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        };
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleClick = () => {
        this.props.addTodo({itemName:this.state.name, completed: false});
        this.props.countTodo();
        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <div>
                <input type = "text" placeholder = "Enter Task Name" value = {this.state.name} onChange = {this.handleChange}></input>
                <button onClick = {this.handleClick}>Add</button>
                <ul>
                    {this.props.todos.map((e,i) => <TodoRow idx = {i} key = {i} />)}
                </ul>
                <Total />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);