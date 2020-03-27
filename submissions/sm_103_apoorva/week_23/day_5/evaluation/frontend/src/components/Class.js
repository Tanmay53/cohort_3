import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class  ClassSec extends Component {
    constructor(props){
        super(props)
        this.state = {
            section: "",
            class: "",
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addClass = (e) => {
        e.preventDefault()
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        let classs = this.state.class
        if(classs === ""){
            swal("Fill all the table","try again","error")
        }
        else if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/addClass',{
                "cname" : classs
            },tokenCheck).then
            (res =>{
                if(res.data.message === "class already exist"){
                    swal(res.data.message,"try again","error")
                }
                else if(res.data.message === "new class added"){
                    swal(res.data.message,"welcome","success")
                }
                else{
                    swal(res.data,"try again","error")
                }
            }
            ).catch(error => swal(error,"try again","error"))
        }
        this.setState({
            class : "",
        })
    }

    addSection = (e) => {
        e.preventDefault()
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        let section = this.state.section
        if(section === ""){
            swal("Fill all the table","try again","error")
        }
        else if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/addSection',{
                "sname" : section
            },tokenCheck).then
            (res =>{
                if(res.data.message === "section already exist"){
                    swal(res.data.message,"try again","error")
                }
                else if(res.data.message === "new section added"){
                    swal(res.data.message,"welcome","success")
                }
                else{
                    swal(res.data,"try again","error")
                }
            }
            ).catch(error => swal(error,"try again","error"))
        }
        this.setState({
            section : "",
        })
    }


    render(){
        return (
            <div className="container-fuid row">
                <div className="col">
                    <div className="bgLogin mt-5">
                        <h3 className="text-center mt-1">Add Class</h3>
                        <div className="mx-3">
                            <label className="ml-1 mt-2">Class</label>
                            <input className="form-control" onChange={this.handleChange} type="text" value={this.state.class} name="class" placeholder="Enter Standard KG,UKG,1-12" />
                        </div>
                        <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.addClass}>Add Class</button>
                    </div>
                </div>
                <div className="col">
                    <div className="bgLogin mt-5">
                        <h3 className="text-center mt-1">Add Section</h3>
                        <div className="mx-3">
                            <label className="ml-1 mt-2">Section Name</label>
                            <input className="form-control" onChange={this.handleChange} type="text" value={this.state.section} name="section" placeholder="Enter A-Z" />
                        </div>
                        <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.addSection}>Add Section</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ClassSec
