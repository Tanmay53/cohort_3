import React, { Component } from 'react'
import Table from './Table'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            age : "",
            address : "",
            department : "",
            salary : "",
            arr : [],
            // deopt : [],
            isShow : false,
        }
    }

    handelChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        // let employee = {
        //     name : this.state.name,
        //     age : this.state.age,
        //     address : this.state.address,
        //     department : this.state.department,
        //     salary : this.state.salary,
        // }
        // this.setState({
        //     arr : [...this.state.arr, employee]
        // })

        let employee ={...this.state};
        delete employee.arr;
        this.setState({
            arr : [...this.state.arr, {...employee}]
        })
        this.setState({
            name : "",
            age : "",
            address : "",
            department : "",
            salary : ""
        })
    }

    showTable = () => {
        this.setState ({
            isShow:!this.state.isShow 
        })
    }

    sortSalary = (e)=>{
        console.log(e)
        let sortedSalary = this.state.arr.sort((a,b)=>{
            if(e == "high"){
                return Number(b.salary) - Number(a.salary)
            }
            else{
                return Number(a.salary) - Number(b.salary)
            }
        })
        this.setState({
            arr : sortedSalary
        })
    }

    handelDelete = (a) => {
        console.log("Del is called" , a)
        let delData = this.state.arr.filter((item,index)=>{
            return index !== a
        })
        this.setState({
            arr : delData
        })
    }
    render() {
        console.log(this.state.isShow)
        return (
            <div>
                <div className="container p-5">
                    <h1 className="text-center"> Employee Details</h1>
                    <form >
                       <div className ="col-6">
                       <label>Name</label>
                        <input name="name" value={this.state.name} onChange = {this.handelChange} className="form-control"></input>
                    
                        <label>Age</label>
                        <input type="number" name="age"  value={this.state.age} onChange = {this.handelChange} className="form-control"></input>
                    
                        <label>Address</label>
                        <input name="address"  value={this.state.address} onChange = {this.handelChange} className="form-control"></input>
                    
                        <label>Department</label>
                        <input name="department"  value={this.state.department} onChange = {this.handelChange} className="form-control"></input>
                    
                        <label>Salary</label>
                        <input type="number" name="salary"  value={this.state.salary} onChange = {this.handelChange} className="form-control"></input>
                       </div>
                    </form>
                    <button onClick ={this.submit} className="btn btn-primary m-3">Submit</button>
                    <button onClick ={this.showTable} className="btn btn-primary m-3">Show Table</button>
                    {this.state.isShow ? <Table data ={this.state.arr} 
                                                del={this.handelDelete} 
                                                sortSalary={this.sortSalary}
                                        /> : null}
                </div>
            </div>
        )
    }
}
