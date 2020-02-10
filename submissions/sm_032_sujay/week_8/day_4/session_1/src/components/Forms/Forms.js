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

        this.setState({
            name: "",
            age: '',
            address: '',
            department: '',
            salary: ''
    
        })
    }


    // to be edited to make edit work
    // editData = () => {
    //     console.log("inside update")
    //     let update = this.state.emplyData.filer()
    //     this.setState({
    //         emplyData:update
          
    //     })
    //     console.log("edit",update)
    // }

    delData = (index) => {
        // var del= this.props.data.filter(a=>a.name!=name)
            // console.log("inside delete function",name)

        let deleted = this.state.emplyData.filter((item,index) => index !== index)
        this.setState({
            emplyData: deleted
        })
        console.log("del",this.state.emplyData)
    }

    
     sortData = () =>{
         console.log("inside sortData")
        let sorted = this.state.emplyData.sort((a,b) => Number(a.salary)-Number(b.salary))
        this.setState({
            emplyData : sorted
        })
        console.log("srt",sorted)
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
                  

                </div>

                <div className="container-fluid">

                <Table data = {this.state.emplyData} del ={this.delData} srt = {this.sortData} updt ={this.editData}/>


                </div>
            </div>
        )
    }
}