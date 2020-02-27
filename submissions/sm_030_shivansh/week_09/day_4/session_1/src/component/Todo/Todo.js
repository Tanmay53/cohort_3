import React from 'react';
import store from "../redux/store";
import { add, toggleDone, deleteItem, showCompleted } from "../redux/action";
import Delete from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

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
                    <Button
                        variant="contained"
                        color="secondary"
                        className="mx-2"
                        onClick={() => store.dispatch(toggleDone(item.name))}
                    >
                        TOGGLE DONE
                   </Button>

                    <div onClick={() => store.dispatch(deleteItem(item.name))}>
                        <Delete />
                    </div>

                </div>
            ))}
        </div>

    )
}



export default Todo;