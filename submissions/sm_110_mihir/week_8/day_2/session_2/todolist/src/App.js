import React from "react";
import Display from "./components/displayCard";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            done: [],
            input: ""
        };
    }

    handleInput = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleAdd = () => {
        if (this.state.input.length > 0) {
            this.setState({
                todo: [...this.state.todo, this.state.input]
            });
        }
    };

    handleDone = item => {
        const position = this.state.todo.indexOf(item);
        this.state.todo.splice(position, 1);

        this.setState({
            done: [...this.state.done, item]
        });
    };

    DelTodo = item => {
        const position = this.state.todo.indexOf(item);
        this.state.todo.splice(position, 1);
        this.setState({
            todo: [...this.state.todo]
        });
    };

    DelDone = item => {
        const position = this.state.done.indexOf(item);
        this.state.done.splice(position, 1);
        this.setState({
            done: [...this.state.done]
        });
    };

    render() {
        return (
            <div>
                <Display
                    todo={this.state.todo}
                    done={this.state.done}
                    input={this.state.input}
                    TextInput={this.handleInput}
                    Add={this.handleAdd}
                    TaskDone={this.handleDone}
                    Delete={this.DelTodo}
                    DelDone={this.DelDone}
                />
            </div>
        );
    }
}

export default App;
