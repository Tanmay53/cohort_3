import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            address: "",
            department: "",
            salary: "",
            id: 1,
            data: {},
            allUsers: []


        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    inputdata = (e) => {
        e.preventDefault()
        this.setState({
            name: "",
            age: "",
            address: "",
            department: "",
            salary: "",
        })
        this.props.check(true)
        let storedData = JSON.parse(localStorage.getItem("userdata"))
        if (storedData != null) {
            let temp = {
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                department: this.state.department,
                salary: Number(this.state.salary),
                id: storedData[storedData.length - 1].id + 1
            }
            storedData.push(temp)
            this.setState({
                // data:temp,
                allUsers: storedData,
                id: storedData[storedData.length - 1].id
            })
            localStorage.setItem("userdata", JSON.stringify(storedData))
        }
        else {
            let storedData = []
            let temp = {
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                department: this.state.department,
                salary: Number(this.state.salary),
                id: Number(this.state.id) + 1
            }
            storedData.push(temp)
            localStorage.setItem("userdata", JSON.stringify(storedData))
            this.setState({
                // data:temp,
                allUsers: storedData,
                id: this.state.id + 1
            })
        }
    }
    render() {
        // this.props.datafromForm(this.state.allUsers)
        console.log(this.state.allUsers, "form")
        return (
            <div className="container"><h1>Fill Details</h1>
            <div className="row"> 
                <form onSubmit={this.inputdata} className="form-inline">
                    <div  className="form-group  my-2 col-4">                    
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChange} />
                    </label>
                    </div>
                    <div  className="form-group col-4 my-2">
                    <label>
                        Age:
                        <input type="text" name="age" value={this.state.age} className="form-control" onChange={this.handleChange} />
                    </label>
                    </div>
                    <div  className="form-group col-4 my-2">
                    <label>
                        Address:
                        <input type="text" name="address" value={this.state.address} className="form-control" onChange={this.handleChange} />
                    </label>
                    </div>
                    <div  className="form-group col-4 my-2">
                    <label>
                        Department:
                    <select name="department" className="form-control my-2 col-4" value={this.state.department} onChange={this.handleChange}>
                            <option value="IT">IT</option>
                            <option value="GIS">GIS</option>
                            <option value="ACCOUNTS">ACCOUNTS</option>
                            <option value="PRO.DELIVERY">PRO.DELIVERY</option>
                        </select>
                    </label>
                    </div>
                    <div  className="form-group  col-4 my-2">
                    <label>
                        Salary:
                        <input type="text" name="salary" className="form-control" value={this.state.salary} onChange={this.handleChange} />
                    </label>
                    </div>
                    <div className="col-4 my-2">
                    <input  className="btn btn-primary col-4" type="submit" />
                    </div>

                </form>
                </div>



            </div>
        )
    }
}
export default Form