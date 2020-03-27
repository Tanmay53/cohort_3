import React from 'react'
import axios from 'axios'
import {user_login} from '../redux/Action'
import {connect} from 'react-redux'
import uuid from 'react-uuid'
import {Redirect} from 'react-router-dom'


class Teacher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class_uuid:   '',
            section_uuid: '',
            subject_uuid: '',
            teacher_name: '',
            teacher_uuid: '',
            teachers: [],
            classes: [],
            section: [],
            subjects: []
        }
    }




    loadTeachers = () => {
        axios.get('http://localhost:5000/teacher/fetch')
        .then(res => {
            console.log('teacher : ', res)
            if (res['data']['result'] === 'success') {
                this.setState({
                    teachers: res['data']['data']
                })
            }            
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state)
    }

    componentDidMount = () => {
        // load classes
        axios.get('http://localhost:5000/classes/fetch')
        .then(res=> {
            this.setState({
                classes: res['data']['data']
            })
        })
        // load sections
        axios.get('http://localhost:5000/section/fetch')
        .then(res=> {
            this.setState({
                section: res['data']['data']
            })
        })
        // load subjects
        axios.get('http://localhost:5000/subject/fetch')
        .then(res=> {
            this.setState({
                subjects: res['data']['data']
            })
        })
        // load teachers
        // this.loadTeachers()
    }

    handleClick = () => {
        const data = {
            class_uuid: this.state.class_uuid,
            section_uuid: this.state.section_uuid,
            subject_uuid: this.state.subject_uuid,
            teacher_name: this.state.teacher_name,
            teacher_uuid: uuid()
        }
        axios.post('http://localhost:5000/teacher/add', data)
        .then(res => {
            if(res['data']['result'] === 'success') 
                this.loadTeachers()
        })
    }


    handleDelete = (teacher_uuid) => {
        axios.delete('http://localhost:5000/teacher/delete', {
            'data':{'teacher_uuid': teacher_uuid}
        }).then(res => {
            console.log(res)
            this.loadTeachers()
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
                        <h3 className='bg-primary text-white p-2'>Add Teacher.</h3>
                    </div>                    
                </div>
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Teacher Name</div>
                    <div className='col-3'>
                        <input name="teacher_name" onChange={this.handleChange} value={this.state.teacher_name} type='text' placeholder = 'Enter Subject' className='form-control'></input>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Class</div>
                    <div className='col-3'>
                        <select onChange={this.handleChange} name='class_uuid' className='form-control'>
                            <option value='select'>Select</option>
                            {this.state.classes.map(item => {
                                return <option value={item['class_uuid']}>{item['class_name']}</option>
                            })}
                            
                        </select>
                    </div>
                </div>   
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Section</div>
                    <div className='col-3'>
                        <select onChange={this.handleChange} name='section_uuid' className='form-control'>
                            <option value='select'>Select</option>
                            {this.state.section.map(item => {
                                return <option value={item['section_uuid']}>{item['section_name']}</option>
                            })}
                            
                        </select>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Subject</div>
                    <div className='col-3'>
                        <select onChange={this.handleChange} name='subject_uuid' className='form-control'>
                            <option value='select'>Select</option>
                            {this.state.subjects.map(item => {
                                return <option value={item['subject_uuid']}>{item['subject_name']}</option>
                            })}
                            
                        </select>
                    </div>
                </div>                       
                <div className='row mt-4'>
                <div className='col-2 offset-4'>
                    <button onClick={this.handleClick} className='btn btn-primary'>Add Teacher</button>
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

export default connect(mapStateToProps, null)(Teacher)

// export default Login