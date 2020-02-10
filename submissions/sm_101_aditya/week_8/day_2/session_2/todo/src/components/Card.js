import React from 'react'
function TodoDisplay(props){
    // items
    const listItems = props.todo.map((ele, index) => (
        <div>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={()=> props.TaskDone(ele)}
                >
                    <i className="fas fa-check">Mark Completed</i>
                </button>
            </div>
            <li className="list-group-item w-75"> {ele}</li>
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={()=>props.Delete(ele)}
                >
                    <i className="fas fa-times">Remove Data</i>
                </button>
            </div>
        </div>
        </div>
    ));
    // completed items
    const completedList = props.completed.map((ele, index) =>(
        <div className="input-group">
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    type="button" 
                    onClick={()=>props.DeleteDone(ele)}
                    >
                    <i className="fas fa-times">Remove Data</i>
                </button>
            </div>
            <li className="list-group-item w-75 text-success">
                <strike>{ele}</strike>
            </li>
        </div>
    ));

    // return
    return(
        <div className="card border-success mb-3">
            <div className="card-header border-success">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-secondary input-group-btn"
                            onClick={props.Add}
                        >
                            Enter Data
                        </button>
                    </div>
                    <input
                        className="form-control text-center"
                        type="text"
                        value={props.input}
                        onChange={e=>props.TextInput(e)}
                        placeholder="Add your task"
                    />
                </div>
            </div>
            <div className="card-body">
                <h5 className="bg-light text-center">Daily Tasks</h5>
    <ul className="list-group text-center">{listItems}</ul>
            </div>
            <div className="card-footer border-successs">
                <h5 className="bg-light text-center">Completed Tasks</h5>
    <ul className="list-group text-center">{completedList}</ul>
            </div>
        </div>
    );
}


export default TodoDisplay;