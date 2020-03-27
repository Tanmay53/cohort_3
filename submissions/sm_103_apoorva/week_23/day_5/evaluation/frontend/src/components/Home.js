import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            sec : [],
            cla : [],
            class : "",
            section : "",
            subject : "",
            teacher : [],
            duplicate : [],
            clickVal: 0
        }
    }

    fetchData = () => {
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/teacher',{
                "clickVal" : 0
            },tokenCheck).then
            (res =>{
                console.log(res.data)
                this.setState({
                    teacher:res.data.teacher,
                    duplicate:res.data.teacher
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    componentDidMount = () =>{
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/teacher',{
                "clickVal" : 0
            },tokenCheck).then
            (res =>{
                console.log(res.data)
                this.setState({
                    teacher:res.data.teacher,
                    duplicate:res.data.teacher
                })
            }
            ).catch(error => swal(error,"try again","error"))

            axios.post('http://127.0.0.1:5000/classSection',{},tokenCheck).then
            (res =>{
                console.log(res.data)
                this.setState({
                    sec:res.data.section,
                    cla:res.data.class
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    classChange = (e) => {
        this.setState({
            class: e.target.value
        })

        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/classfilter',{
                "class" : e.target.value,
                "clickVal" : 0
            },tokenCheck).then
            (res =>{
                this.setState({
                    teacher:res.data.teacher,
                    duplicate:res.data.teacher
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    sectionChange = (e) => {
        this.setState({
            section: e.target.value
        })

        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/sectionfilter',{
                "section" : e.target.value,
                "clickVal" : 0
            },tokenCheck).then
            (res =>{
                this.setState({
                    teacher:res.data.teacher,
                    duplicate:res.data.teacher
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    next=()=>{
        this.setState({
            clickVal : this.state.clickVal+1
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/teacher',{
                "clickVal" : this.state.clickVal+1
            },tokenCheck).then
            (res =>{
                this.setState({
                    teacher:res.data.teacher,
                    duplicate:res.data.teacher
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    back=()=>{
        this.setState({
            clickVal : this.state.clickVal-1
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/teacher',{
                "clickVal" : this.state.clickVal-1
            },tokenCheck).then
            (res =>{
                this.setState({
                    teacher:res.data.teacher,
                    duplicate:res.data.teacher
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    delete = (id) =>{
        // alert(id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                let local = localStorage.getItem("token")
                // console.log(JSON.parse(local))
                if(JSON.parse(local) != null){
                    const token = {
                        headers : {Authorization : "Bearer "+JSON.parse(local)}
                    }
                    axios.post('http://127.0.0.1:5000/delete',{
                        "tid" : id
                    },token).then
                    (res =>
                         {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          })
                        this.fetchData()
                         }
                    ).catch(error => console.log(error))
                }
              
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className = "col ml-3 mt-2">
                            <div className="card" style={{width:"12rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Class Filter</h5>
                                    <select className="custom-select" id="inputGroupSelect01" name="class" value={this.state.class} onChange={this.classChange} >
                                        <option defaultValue>Choose..</option>
                                        <option value="all">All</option>
                                        {this.state.cla.map(ele => (
                                            <option key={ele.cname} value={ele.cid}>Standard {ele.cname}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className = "col mt-2">
                            <div className="card" style={{width:"12rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Section Filter</h5>
                                    <select className="custom-select" id="inputGroupSelect01" name="section" value={this.state.section} onChange={this.sectionChange} >
                                        <option defaultValue>Choose..</option>
                                        <option value="all">All</option>
                                        {this.state.sec.map(ele => (
                                            <option key={ele.sname} value={ele.sid}>Section {ele.sname}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="container-fluid">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Section</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.duplicate.map(ele =>{
                                    return(<tr>
                                        <td>{ele.tid}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.subject}</td>
                                        <td>{ele.cname}</td>
                                        <td>{ele.sname}</td>
                                        <td><Link to={`/update/${ele.tid}`}><button className="btn btn-warning">Update</button></Link></td>
                                        <td><button className="btn btn-danger" onClick={() =>  this.delete(ele.tid)}>Delete</button></td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                            {this.state.clickVal != 0 ? (
                            <button className="btn btn-lg bg-info float-left m-5" onClick={this.back}>Back</button>
                            ):(
                                <div></div>
                            )}
                            <button className="btn btn-lg bg-info float-right m-5" onClick={this.next}>Next</button>
                </div>              
            </div>  
        )
    }
    
}


export default Home
