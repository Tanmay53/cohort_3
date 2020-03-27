import React from 'react'
import axios from 'axios'
import {user_login} from '../redux/Action'
import {connect} from 'react-redux'
import uuid from 'react-uuid'
import {Redirect} from 'react-router-dom'

class Subject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subject_name: '',
            subjects: []
        }
    }

    loadSubjects = () => {
        axios.get('http://localhost:5000/subject/fetch')
        .then(res => {
            console.log('section : ', res)
            if (res['data']['result'] === 'success') {
                this.setState({
                    subjects: res['data']['data']
                })
            }            
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount = () => {
        this.loadSubjects()
    }

    handleClick = () => {
        const data = {
            'subject_name': this.state.subject_name,
            'subject_uuid': uuid()
        }
        axios.post('http://localhost:5000/subject/add', data)
        .then(res => {
            if(res['data']['result'] === 'success') 
                this.loadSubjects()
        })
    }


    handleDelete = (subject_uuid) => {
        axios.delete('http://localhost:5000/subject/delete', {
            'data':{'subject_uuid': subject_uuid}
        }).then(res => {
            console.log(res)
            this.loadSubjects()
        })
    }


    
    render() {
        if(this.props.isLoggedIn === false) {
            return <Redirect to="/login"></Redirect>
        }

        return (
            <div>
                <div className='row mt-2'>
                    <div className='col-7 offset-2'>
                        <h3 className='bg-primary text-white p-2'>Add Subject.</h3>
                    </div>                    
                </div>
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Subject</div>
                    <div className='col-3'>
                        <input name="subject_name" onChange={this.handleChange} value={this.state.subject_name} type='text' placeholder = 'Enter Subject' className='form-control'></input>
                    </div>
                    <div className='col-2'>
                        <button onClick={this.handleClick} className='btn btn-primary form-control'>Add</button>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-7 offset-2'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Section</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.subjects.map((item, index) => {
                                    return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item['subject_name']}</td>
                                                <td><a onClick={() => this.handleDelete(item['subject_uuid'])} href='#'>delete</a></td>
                                            </tr>
                                })}
                            </tbody>
                        </table>
                    </div>                    
                </div>
            </div>
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

export default connect(mapStateToProps, null)(Subject)

// export default Login