import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Logout } from "../Redux/Auth/AuthAction"
import { connect } from "react-redux"
import { fetch_teachers } from "../Redux/Teachers/TeacherAction"
import TeacherRecord from './Teachers/TeacherRecord'

function Home({ Logout, history, fetch_teachers, teachers }) {
    const [curr_page, setPage] = useState(1)
    const logout = () => {
        Logout()
    }
    useEffect(() => {
        fetch_teachers({ "curr_page": curr_page })
    }, [])

    return (
        <div>
            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
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
