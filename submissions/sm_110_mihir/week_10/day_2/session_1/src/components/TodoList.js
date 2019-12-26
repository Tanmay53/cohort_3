import React from "react";
import { done, del } from "../redux/action";
import { connect } from "react-redux";
function TodoList({ todo, done, del }) {
    console.log(todo);
    const uncompletedList = todo.filter(ele => ele.completed === false);

    return (
        <div className="card-body">
            <ul className="list-group">
                {uncompletedList.map(ele => (
                    <li
                        key={ele.itemName}
                        className="list-group-item card-text"
                    >
                        <button
                            className="btn"
                            onClick={() => {
                                done(ele.itemName);
                            }}
                        >
                            Done
                        </button>
                        {ele.itemName}

                        <button
                            className="btn"
                            onClick={() => {
                                del(ele.itemName);
                            }}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    const todo = state;
    return todo;
};

export default connect(mapStateToProps, { done, del })(TodoList);
