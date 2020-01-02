import React from "react";

function Table(props) {
    const changeData = (props) => {
        if(props.data.length === 0) {
            return (
                <p>No Records to display!!</p>
            )
        }

        const tableColumns = Object.keys(props.data[0]).map((val, index) => {
            return (
                <th key={index}>{val}</th>
            )
        });
    
        const tableRows = props.data.map((val1,index1) => {
            return (
                <tr key={index1}>
                    {Object.values(val1).map((val2, index2) => {
                        return (
                            <td key={`${index1}${index2}`}>{val2}</td>
                        )
                    })}
                </tr>
            )
        });
        
        const tableStruct = (
            <table>
                <thead>
                    <tr>{tableColumns}</tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        );

        return tableStruct;
    }

    return (
        <div>
            {changeData(props)}
        </div>
    )
}

export default Table