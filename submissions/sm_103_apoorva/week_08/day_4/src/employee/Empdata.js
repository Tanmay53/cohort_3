import React from 'react'

class Empdetail extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            master : [],
            duplicate: [],
            emp:{
            name : "",
            age : 0,
            address : "",
            department : "",
            salary : 0,
            }
        }
    }


    handleChange=(event)=>{
        let newEmp = {...this.state.emp,[event.target.name]: event.target.value}
        newEmp.id = Date.now()
        this.setState({
            emp: newEmp
        });
        
    }

    componentDidMount=()=>{
        let localData = localStorage.getItem('empData')
        if(localData != null)
        {
            this.setState({
                master: JSON.parse(localData),
                duplicate: JSON.parse(localData)
            })
        }
    }

    submit=(event)=>
    {
        event.preventDefault();
        let data = [...this.state.master,{...this.state.emp}]
        console.log(data)
        this.setState({
            master : data,
            duplicate : data
        })
        console.log(this.state.master)
        localStorage.setItem('empData',JSON.stringify([...data]))
    }

    delete=(event)=>
    {
        event.preventDefault()
        let list = [...this.state.master]
        let updatedList = list.filter(item => item.id != event.target.value)
        localStorage.removeItem('empData')
        localStorage.setItem('empData',JSON.stringify([...updatedList]))
        this.setState({
            master: updatedList,
            duplicate: updatedList
        })
    }

    filterEmployee=(e)=>
    {
        let list = [...this.state.master]
        let updatedList = list.filter((item) =>{
            if(item.department == e.target.value)
            {
                return item
            }
            else if("all" == e.target.value)
            {
                return item
            }
        })

        this.setState({
            duplicate : updatedList
        })
    }

    sort=(e)=>
    {
        let list = [...this.state.master]
        if("asc" == e.target.value)
        {
            list.sort(function(a,b){
                return parseInt(a.salary) - parseInt(b.salary)
            })
        }

        else
        {
            list.sort(function(a,b){
                return parseInt(b.salary) - parseInt(a.salary)
            })
        }

        this.setState({
            duplicate : list
        })
    }

    

    render(){
        return(
            <div>
                <div className = "bgProduct my-4">
                    <h2 className="mx-2 my-2 text-center">Employee form</h2>
                    <form className= "mx-4" onSubmit={this.submit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input onChange={this.handleChange} name = "name" value ={this.state.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Age</label>
                            <input onChange={this.handleChange} name = "age" value ={this.state.age} type="number" className="form-control" id="exampleInputPassword1" placeholder="In Years" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Address</label>
                            <input onChange={this.handleChange} name="address"  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <label>Department</label>
                        <select className="form-group ml-4" onChange={this.handleChange} name = "department" value ={this.state.category}>
                            <option >Choose</option>
                            <option value = "IT">IT</option>
                            <option value = "Sales">Sales</option>
                            <option value = "Research">Research</option>
                            <option value = "Marketing">Marketing</option>
                            <option value = "Administration">Administration</option>
                        </select>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Salary</label>
                            <input onChange={this.handleChange} name = "salary" value ={this.state.salary} type="number" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button   type="submit" className="btn loginBtnColor">Submit</button>
                    </form>
                    <br />
                </div>
                <div>
                    <div className="row">
                        <div className ="col">
                            <h2>Product Deatils</h2>
                        </div>
                        <div className ="col">
                            <label>Sort Based on Department</label>
                            <select className="form-group ml-2" onChange={this.filterEmployee} name = "department">
                                <option >Choose</option>
                                <option value = "all">All</option>
                                <option value = "IT">IT</option>
                                <option value = "Sales">Sales</option>
                                <option value = "Research">Research</option>
                                <option value = "Marketing">Marketing</option>
                                <option value = "Administration">Administration</option>
                            </select>
                        </div>
                        <div className ="col">
                            <label>Sort Based on Salary</label>
                        <select className="form-group ml-2" onChange={this.sort} name = "department">
                            <option >Choose</option>
                            <option value = "asc">Ascending</option>
                            <option value = "dsc">Descending</option>
                        </select>
                        </div>
                    </div>
                    
                    
                    <table className="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Department</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.duplicate.map((ele)=> (
                                <tr>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td>{ele.address}</td>
                                <td>{ele.department}</td>
                                <td>{ele.salary}</td>
                                <td><button onClick={this.delete} value={ele.id} type="button" className="badge badge-danger">Delete</button></td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Empdetail