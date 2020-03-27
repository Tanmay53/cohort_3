import React from 'react'
import axios from 'axios'
import {user_login} from '../redux/Action'
import {connect} from 'react-redux'
import uuid from 'react-uuid'
import {Redirect} from 'react-router-dom'

class Classes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class_name: '',
            classes: []
        }
    }

    loadClasses = () => {
        axios.get('http://localhost:5000/classes/fetch')
        .then(res => {
            console.log('classes : ', res)
            if (res['data']['result'] === 'success') {
                this.setState({
                    classes: res['data']['data']
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
        this.loadClasses()
    }

    handleClick = () => {
        const data = {
            'class_name': this.state.class_name,
            'class_uuid': uuid()
        }
        axios.post('http://localhost:5000/classes/add', data)
        .then(res => {
            if(res['data']['result'] === 'success') 
                this.loadClasses()
        })
    }

    handleDelete = (class_uuid) => {
        axios.delete('http://localhost:5000/classes/delete', {
            'data':{'class_uuid': class_uuid}
        }).then(res => {
            console.log(res)
            this.loadClasses()
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
                        <h3 className='bg-primary text-white p-2'>Add Class.</h3>
                    </div>                    
                </div>
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Class</div>
                    <div className='col-3'>
                        <input name="class_name" onChange={this.handleChange} value={this.state.class_name} type='text' placeholder = 'Enter Classname' className='form-control'></input>
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
                                    <th>Class</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.classes.map((item, index) => {
                                    return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item['class_name']}</td>
                                                <td><a onClick={() => this.handleDelete(item['class_uuid'])} href='#'>delete</a></td>
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

export default connect(mapStateToProps, null)(Classes) 

// export default Login