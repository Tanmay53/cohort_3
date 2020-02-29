import React from 'react'
function ToDoList(props) {
    return (
        <div className="p-2 border m-2">
            <h3>To Do List :</h3>
            {console.log(props.itemsArr)}
            {props.itemsArr && props.itemsArr.map((each, index) => {
                return (
                    <div key={each.itemName + index} 
                    className="p-1 border m-1 d-flex justify-content-between align-items-center">
                        <input type="checkbox" onChange={() => props.checkBoxChecked(each.itemName)} />
                        <b style={{
                            color: `${each.checkBoxCheck ? "green" : "blue"}`,
                            textDecoration: `${each.checkBoxCheck ? "line-through" : ''}`,
                            margin:"0 10px",textTransform:"capitalize"
                        }}>
                            {each.itemName}
                        </b>
                        <button type="button" onClick={() => props.removeItem(each.itemName)} 
                            className="mx-1 bg-danger border">
                            Remove
                            </button>
                    </div>
                )
            })}
        </div>
    )
}
export default ToDoList