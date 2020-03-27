import React, { useState, useEffect } from 'react'
import { Logout } from "../Redux/Auth/AuthAction"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetch_teachers } from "../Redux/Teachers/TeacherAction"
import TeacherRecord from './Teachers/TeacherRecord'

function Home({ Logout, fetch_teachers, teachers }) {
    const [curr_page, setPage] = useState(1)
    const logout = () => {
        Logout()
    }
    useEffect(() => {
        fetch_teachers({ "curr_page": curr_page })
    }, [])
    return (
        <div className="container p-2">
            <div className="row justify-content-end ">
                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                <Link className="btn btn-success px-1 mx-2" to="/add" >Add New Teacher</Link>
            </div>
            {teachers && <TeacherRecord data={teachers.data} sections={teachers.sections} classes={teachers.classes} />}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        teachers: state.Teachers.response,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Logout: () => dispatch(Logout()),
        fetch_teachers: (data) => dispatch(fetch_teachers(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
