import React from 'react'
import axios from 'axios'
import queryString from 'query-string'

class Edit extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            name : '',
            email : '',
            mobile : '',
            age : ''
        }
    }


    componentDidMount = () =>{
        const values = queryString.parse(this.props.location.search)
        console.log("dkjkjds",values)
        let name = values.Name
        let email = values.email
        let mobile = values.mobile
        let age = values.age
        this.setState({
            name : name,
            email : email,
            mobile : mobile,
            age : age
        })
        
    }
    
    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    submit = (event) =>{
        event.preventDefault()
        let Name = this.state.name
        let email = this.state.email
        let mobile = this.state.mobile
        let age = this.state.age
        alert(Name+" Edited")
        let baseUrl = 'http://127.0.0.1:5000/edit'
        let id = this.props.match.params.id
        console.log(id)
        let url = baseUrl +"/"+id
        axios.post(url,{
            id : id,
            Name : Name,
            email : email,
            mobile : mobile,
            age : age
        }).then
        (res =>
            console.log(res)
        ).catch(error => console.log(error))
    }


    render()
    {
        let option = []
        for(let i = 1;i < 101; i++){
            option.push(<option value = {i}>{i}</option>)
        }
        return (
            <div className="p-5">
                <h1 className="text-info text-center">Edit Data</h1>
                <form onSubmit={this.submit} className="w-25  p-5 m-auto border border-info">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={this.state.name} name = "name" onChange={this.handleChange} placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} name = "email" onChange={this.handleChange} placeholder="Enter Email Id" />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" id="mobile" aria-describedby="emailHelp" value={this.state.mobile} name = "mobile" onChange={this.handleChange} placeholder="Enter Contact No." />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <select className="form-control" name = "age" value={this.state.age}  onChange={this.handleChange}>
                            <option>Select Age</option>
                            {option}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default Edit
