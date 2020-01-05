import { connect } from "react-redux";
import { del } from "../redux/action";
import React from "react";
const Completed = ({ todo, del }) => {
    const completedList = todo.filter(ele => ele.completed === true);
    return (
        <div className="card-footer border-success">
            <h3>Completed Tasks</h3>

            <ul className="list-group">
                {completedList.map(ele => (
                    <li key={ele.itemName} className="list-group-item">
                        <strike>{ele.itemName}</strike>
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
};

const mapState = state => {
    const todo = state;
    return todo;
};

export default connect(mapState, { del })(Completed);
