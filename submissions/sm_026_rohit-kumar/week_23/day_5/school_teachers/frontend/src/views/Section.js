import React from 'react'
import axios from 'axios'
import {user_login} from '../redux/Action'
import {connect} from 'react-redux'
import uuid from 'react-uuid'
import {Redirect} from 'react-router-dom'


class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            section_name: '',
            section: []
        }
    }

    loadSection = () => {
        axios.get('http://localhost:5000/section/fetch')
        .then(res => {
            console.log('section : ', res)
            if (res['data']['result'] === 'success') {
                this.setState({
                    section: res['data']['data']
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
        this.loadSection()
    }

    handleClick = () => {
        const data = {
            'section_name': this.state.class_name,
            'section_uuid': uuid()
        }
        axios.post('http://localhost:5000/section/add', data)
        .then(res => {
            if(res['data']['result'] === 'success') 
                this.loadSection()
        })
    }


    handleDelete = (section_uuid) => {
        axios.delete('http://localhost:5000/section/delete', {
            'data':{'section_uuid': section_uuid}
        }).then(res => {
            console.log(res)
            this.loadSection()
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
                        <h3 className='bg-primary text-white p-2'>Add Section.</h3>
                    </div>                    
                </div>
                <div className='row mt-4'>
                    <div className='col-2 offset-2'>Section</div>
                    <div className='col-3'>
                        <input name="class_name" onChange={this.handleChange} value={this.state.class_name} type='text' placeholder = 'Enter Section' className='form-control'></input>
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
                                {this.state.section.map((item, index) => {
                                    return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item['section_name']}</td>
                                                <td><a onClick={() => this.handleDelete(item['section_uuid'])} href='#'>delete</a></td>
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

export default connect(mapStateToProps, null)(Section)