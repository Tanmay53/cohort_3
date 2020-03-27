import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            section: "",
            class: "",
            gender: "",
            subject: "",
            mobile: "",
            sec: [],
            cla: []
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount = () =>{
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
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

    handleClick = (e) =>{
        e.preventDefault()
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        let name = this.state.name
        let email = this.state.email
        let classs = this.state.class
        let section = this.state.section
        let gender = this.state.gender
        let subject = this.state.subject
        let mobile = this.state.mobile
        if(name === "" || email === "" || gender === "" || section === "" || classs === ""){
            swal("Fill all the table","try again","error")
        }
        else if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/add',{
                "name" : name,
                "email" : email,
                "class" : classs,
                "gender" : gender,
                "section": section,
                "subject" : subject,
                "mobile" : mobile
            },tokenCheck).then
            (res =>{
                if(res.data.message === "Email Already exist"){
                    swal(res.data.message,"try again","error")
                }
                else if(res.data.message === "teacher added"){
                    swal(res.data.message,"welcome","success")
                }
                else{
                    swal(res.data,"try again","error")
                }
            }
            ).catch(error => swal(error,"try again","error"))
    
            this.setState({
                name: "",
                email: "",
                class:"",
                section: "",
                gender: "",
                subject: "",
                mobile: ""
            })
        }
        else if(JSON.parse(isLoggedIn) === false){
            swal("Login First","try again","error")
        }
        
    }


    render() {
        return (
            <div>
                <div className="bgLogin mt-5">
                    <h3 className="text-center mt-1">Add Teacher Data</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Name</label>
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.name} name="name" placeholder="Enter Name" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Email</label>
                        <input className="form-control" onChange={this.handleChange} type="email" value={this.state.email} name="email" placeholder="Enter email" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Gender</label>
                        <select className="custom-select" id="inputGroupSelect01" name="gender" value={this.state.gender} onChange={this.handleChange} >
                            <option defaultValue>Choose..</option>
                            <option value="male">Male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Section</label>
                        <select className="custom-select" id="inputGroupSelect01" name="section" value={this.state.section} onChange={this.handleChange} >
                            <option defaultValue>Choose..</option>
                            {this.state.sec.map(ele => (
                                <option key={ele.sname} value={ele.sid}>Section {ele.sname}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mx-3">
                    <label className="ml-1 mt-2">Class</label>
                        <select className="custom-select" id="inputGroupSelect01" name="class" value={this.state.class} onChange={this.handleChange} >
                            <option defaultValue>Choose..</option>
                            {this.state.cla.map(ele => (
                                <option key={ele.cname} value={ele.cid}>Standard {ele.cname}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Subject</label>
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.subject} name="subject" placeholder="Enter subject" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Mobile</label>
                        <input className="form-control" onChange={this.handleChange} type="number" value={this.state.mobile} name="mobile" placeholder="Enter Contact Number" />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Add Teacher</button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Add
