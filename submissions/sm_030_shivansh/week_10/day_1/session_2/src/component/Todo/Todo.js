import React from 'react';
import store from "../redux/store";
import { add, toggleDone, deleteItem, showCompleted } from "../redux/action";

const Todo = (props) => {

    console.log("todo store state", store.getState());
    return (

        <div className="border">
            {props.label}
            {props.data.map((item) => (
                <div key={item.name} className="d-flex justify-content-center my-3">
                    <div style={{
                        color: `${item.isDone ? "green" : "black"}`,
                        textDecoration: `${item.isDone ? "line-through" : "none"}`,
                    }}>
                        {item.name}
                    </div>
                    <button
                        onClick={() => store.dispatch(toggleDone(item.name))}
                        className="btn btn-primary mx-3">
                        TOGGLE DONE
                    </button>

                    <div onClick={() => store.dispatch(deleteItem(item.name))}>
                        <i className="fas fa-trash-alt fa-lg"></i>
                    </div>
                </div>
            ))}
        </div>

    )
}



export default Todo;