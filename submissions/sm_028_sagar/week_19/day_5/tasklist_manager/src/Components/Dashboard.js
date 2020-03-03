import React, { Component } from 'react'
import GenerateList from './GenerateList'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isGenerate : false,
            listdata:[]
        }
    }

    handleLogout = () =>{
        localStorage.setItem('userDetail',JSON.stringify({
            "token":"",
            "loggedIn":false
        }))
        console.log(this.props)
        this.props.history.push('/')
    }


    componentDidMount(){
        let token = JSON.parse(localStorage.getItem('userDetail'))['token']
            console.log(token)
            //create list with title and category
            Axios.get('http://127.0.0.1:5000/task/',{
                headers:{
                    Authorization:`Bearer ${token}` 
                }
            })
            .then(res => this.setState({
                helpText:res.data.message,
                listdata:res.data.tasklists
            }))
            .catch(err => console.log(err))
    }



    render(){
        console.log(this.state.listdata)
        return (
            <div>
                <div className='p-2 container bg-light text-right'>
                    <button className='btn btn-primary rounded-pill' onClick={() => this.handleLogout()}>Logout</button>
                </div>
                <div className='container border mt-5'>
                <h1 className='text-center mt-5 mb-3'>Task Manager</h1>
                <div className='d-flex justify-content-around'>
                <button className={`btn rounded-pill ${this.state.isGenerate ? 'btn-primary': 'btn-danger'}`} 
                    onClick={() => 
                        this.setState({
                            isGenerate:!this.state.isGenerate,
                        })}
                    >{this.state.isGenerate ? 'See TaskList': 'Generate List'}</button>
                </div>
                {this.state.isGenerate ? <GenerateList />
                :
                    <div className='row mt-5 justify-content-around'>
                        {this.state.listdata.map(list =>
                                <div key={list.id} className="card shadow-sm p-3 col-lg-3 col-12 my-2 col-sm-5" style={{width : '18rem'}}>
                                    <div className="card-header" style={{background:'#c9f9ff'}}>
                                        {list.listname}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Category: {list.category}</li>
                                        <li className="list-group-item">Total task count - {list.taskcount}</li>
                                        <li className="list-group-item text-center">
                                            <button className='btn btn-sm btn-danger rounded-pill px-4'>Delete</button>
                                        </li>
                                        <li className="list-group-item text-center">
                                            <button className='btn btn-sm btn-info rounded-pill px-4'>View</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                    </div>
                
                }
                </div>
            </div>
        )
    }
}
