import React from 'react'

import Table from './Table'

export default class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            address: '',
            department: '',
            salary: '',
            emplyData: []
        }
      
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const obj={
            name:this.state.name,
            age:this.state.age,
            address:this.state.address,
            department: this.state.department,
            salary : this.state.salary

        }
        this.setState({emplyData: [...this.state.emplyData,obj] })
        
 
        

       

    }


    reset = () => {
       
        this.setState({
            name: "",
            age: '',
            address: '',
            department: '',
            salary: ''

        })
    }

   

   


    render() {
        return (
            <div>
                <div className="container col-4 shadow my-5">
                    <form>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" className="form-control" name="name" placeholder=" Enter Name" value={this.state.name} onChange={this.handleChange} />
                        </div>


                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" className="form-control" name="age" placeholder="Enter Age" value={this.state.age} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" name="address" placeholder="Residential Address" value={this.state.address} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Department</label>
                            <input type="text" className="form-control" name="department" placeholder="Department" value={this.state.department} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Salary</label>
                            <input type="text" className="form-control" name="salary" placeholder="Enter Salary" value={this.state.salary} onChange={this.handleChange} />
                        </div>
                    </form>
                    <button className="btn btn-lg btn-outline-dark offset-5" onClick={this.handleSubmit}>Submit</button>
                       <button className="btn btn-lg btn-outline-dark offset-5" onClick={this.reset}>Reset</button>
                       <Table data = {this.state.emplyData}/>

                </div>





              
            </div>
        )
    }
}