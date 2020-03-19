import React from 'react'

const Employee_table = ({ employees, data }) => {
    localStorage.setItem("dp_list", JSON.stringify(data.dp_list))
    return (
        <table className="table border shadow-sm">
            <thead>
                <tr className="bg-dark text-white shadow-sm">
                    <td>#</td>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Department</td>
                    <td>Salary</td>
                </tr>
            </thead>
            <tbody>
                {employees && employees.map(employee => {
                    return <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.department}</td>
                        <td>{employee.salary}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Employee_table
