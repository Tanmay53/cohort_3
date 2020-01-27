import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props)
        this.state ={
            data : this.props.data
        }
    }

    selectDepartment = (e) => {
        let optVal = e.target.value
        if (e.target.value.length === 0) {
            this.setState({
                data: this.props.data
            });
        }
        else {
            let filteredDepartment = this.props.data.filter((item, index) =>{
                return item.department === optVal;
            })
            this.setState({
                data : filteredDepartment
            })
        }
    }

    handelDelete = (a) => {
        console.log("Del is called" , a)
        let delData = this.state.data.filter((item,index)=>{
            return index !== a
        })
        this.setState({
            data : delData
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department
                                <select onClick={this.selectDepartment} className="custom-select"> 
                                    <option value="">All</option>
                                    {this.props.data.map((item,index)=><option value ={item.department} key ={item,index}>{item.department}</option>)}   
                                </select>
                            </th>
                            <th>Salary
                                <select onClick={(e)=>this.props.sortSalary(e.target.value)} className="custom-select"> 
                                    <option value="high">High</option>
                                    <option value = "low" >Low</option>
                                </select>
                            </th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item,index)=>
                            <tr key={item+index}>
                            <td>{index +1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.department}</td>
                            <td>{item.salary}</td>                          
                            <td><button>Edit</button></td>
                            <td><button onClick={()=>{this.handelDelete(index); this.props.del(index)}}>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
