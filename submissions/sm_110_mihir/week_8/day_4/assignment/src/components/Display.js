import React from "react";

function Display(props) {
    const list = props.data.map(ele => {
        return (
            <tr key={ele.name}>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.address}</td>
                <td>{ele.department}</td>
                <td>{ele.salary}</td>
                <td>
                    <button onClick={() => props.delete(ele)}>Delete</button>
                </td>
                <td>
                    {/* <button
                        onClick={() => {
                            props.editItem(ele);
                        }}
                    >
                        Edit
                    </button> */}
                </td>
            </tr>
        );
    });
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
        </div>
    );
}

export default Display;
