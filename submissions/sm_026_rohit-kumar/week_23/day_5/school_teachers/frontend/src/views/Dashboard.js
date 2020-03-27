import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {fetchTeachers} from '../redux/Action'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.props.fetchTeachers()
    }

    render() {
        if(this.props.isLoggedIn === false) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.teachers.map((item, index) => {
                        return <tr>
                                    <td>{index + 1}</td> 
                                    <td>{item['teacher_name']}</td>
                                    <td>{item['class_name']}</td> 
                                    <td>{item['section_name']}</td>
                                    <td><a href='#'>Link</a></td>
                                    <td><a href='#'>Link</a></td>
                               </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        menuLabel: state.login.menuLabel,
        showRegisterButton: state.login.showRegisterButton,
        teachers: state.teacher.teachers

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeachers: () => dispatch(fetchTeachers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)