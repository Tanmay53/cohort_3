import React from 'react'
import { connect } from "react-redux";
import { deleteJob } from "../redux/action/actions";
import { Link } from "react-router-dom"

const Table = (props) => {
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Location</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Nos. Openings</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {props.jobList.map((ele, index) => (
                        <tr key={index}>
                            <td>{ele.companyName}</td>
                            <td>{ele.place}</td>
                            <td>{ele.jobTitle}</td>
                            <td>{ele.jobQty}</td>
                            <td>{ele.salary}</td>
                            <td><Link to={`/edit/${index}`} className="btn btn-success">Edit</Link></td>
                            <td><button className="btn btn-danger" onClick={() => props.deleteJob(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    jobList: state.jobList
})

const mapDispatchToProps = (Dispatch) => {
    return {
        deleteJob: (index) => Dispatch(deleteJob(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)
