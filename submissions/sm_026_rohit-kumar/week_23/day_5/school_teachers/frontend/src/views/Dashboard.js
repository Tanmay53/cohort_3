import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teachers: []
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/teacher/fetch')
        .then(res => {
            this.setState({
                teachers: res['data']['data']
            })
        })
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
                    {this.state.teachers.map((item, index) => {
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
        showRegisterButton: state.login.showRegisterButton
    }
}

export default connect(mapStateToProps, null)(Dashboard)