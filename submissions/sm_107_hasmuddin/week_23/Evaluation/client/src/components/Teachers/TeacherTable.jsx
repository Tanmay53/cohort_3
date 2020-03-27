import React from 'react'


export default function TeacherTable({ data }) {
    return (
        <div className="responsive table">
            <table className="table border">
                <thead className="bg-dark text-white border">
                    <tr >
                        <td>Teacher</td>
                        <td>Class</td>
                        <td>Section</td>
                        <td>Subject</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(teacher => {
                        return <tr>
                            <td>{teacher.name}</td>
                            <td>{teacher.class}</td>
                            <td>{teacher.section}</td>
                            <td>{teacher.subject}</td>
                            <td>Link</td>
                            <td>Link</td>
                        </tr>

                    })}
                </tbody>

            </table>

        </div>
    )
}

