import React from "react";
function Display(props) {
    // todo items
    const listItem = props.todo.map((ele, index) => (
        <div className="input-group mb-3" key={ele + index}>
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => props.TaskDone(ele)}
                >
                    <i className="fas fa-check"></i>
                </button>
            </div>
            <li className="list-group-item w-75">{ele}</li>
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => props.Delete(ele)}
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    ));
    // done items
    const doneItems = props.done.map((ele, index) => (
        <div className="input-group" key={ele + index}>
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => props.DelDone(ele)}
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <li className="list-group-item w-75 text-success">
                <strike>{ele}</strike>
            </li>
        </div>
    ));
    return (
        <div className="card border-success mb-3">
            <div className="card-header border-success">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-secondary input-group-btn"
                            onClick={props.Add}
                        >
                            +
                        </button>
                    </div>
                    <input
                        className="form-control"
                        type="text"
                        value={props.input}
                        onChange={e => props.TextInput(e)}
                        placeholder="Add task todo"
                    />
                </div>
            </div>
            <div className="card-body">
                <h5 className="bg-light">Todo Tasks</h5>
                <ul className="list-group">{listItem}</ul>
            </div>
            <div className="card-footer border-successs">
                <h5 className="bg-light">Completed Tasks</h5>
                <ul className="list-group">{doneItems}</ul>
            </div>
        </div>
    );
}

export default Display;
