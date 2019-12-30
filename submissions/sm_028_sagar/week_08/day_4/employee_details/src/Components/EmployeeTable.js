import React from 'react'

export default class EmployeeTable extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            value:'all',
            salary:'all',
            departmentArr:JSON.parse(localStorage.getItem('employeeTable')),
            table:JSON.parse(localStorage.getItem('employeeTable'))
        }
    }

    handleChange = (event) =>{
        switch(event.target.value){
            case 'marketing':
                this.setState({
                    table : this.state.departmentArr.filter(ele => ele.department === 'marketing'),
                    value:event.target.value
                })
                break
            case 'hr':
                this.setState({
                    table : this.state.departmentArr.filter(ele => ele.department === 'hr'),
                    value:event.target.value
                })
                break
            case 'sales':
                this.setState({
                    table : this.state.departmentArr.filter(ele => ele.department === 'sales'),
                    value:event.target.value
                })
                break
            case 'tech':
                this.setState({
                    table : this.state.departmentArr.filter(ele => ele.department === 'tech'),
                    value:event.target.value
                })
                break
            case 'all':
                this.setState({
                    table:this.state.departmentArr,
                    value:event.target.value
                }) 
        }
    }

    handleSalaryChange = (event) =>{
        switch(event.target.value){
            case 'asc':
                this.setState({
                    table:this.state.table.sort((a,b) => a.salary - b.salary),
                    salary:event.target.value
                })
                break
            case 'desc':
                this.setState({
                    table:this.state.table.sort((a,b) => b.salary - a.salary),
                    salary:event.target.value
                })
                break
            case 'all':
                this.setState({
                    table:this.state.table,
                    salary:event.target.value
                })
                break
        }
    }

    handleDeleteRecord = (id) =>{
        console.log('delete record ',id)
        this.setState({
            departmentArr:this.state.departmentArr.filter(emp => emp.id !== id)
        })
    } 

    componentWillUnmount(){
        let changedTable = JSON.stringify(this.state.table)
        console.log('table state while table unmounting ',this.state.table)
        localStorage.setItem('employeeTable',changedTable)
    }

    render(){
        console.log('while table rendering',this.state.table)
        return (
            <div>
                <h3>These are our employees:</h3>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Department <br/>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value='marketing'>marketing</option>
                                    <option value='hr'>human resource</option>
                                    <option value='sales'>sales</option>
                                    <option value='tech'>technical</option>
                                    <option value='all'>all</option>
                                </select>
                            </th>
                            <th scope="col">Salary <br/>
                                <select value={this.state.salary} onChange={this.handleSalaryChange}>
                                    <option value='asc'>Low to High</option>
                                    <option value='desc'>High to Low</option>
                                    <option value='all'>all</option>
                                </select>
                            </th>
                            <th scope="col">Delete</th> 
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.table.map(ele => {
                            return (    <tr key={ele.id}>
                                            <td>{ele.name}</td>
                                            <td>{ele.age}</td>
                                            <td>{ele.address}</td>
                                            <td>{ele.department}</td>
                                            <td>{ele.salary}</td>
                                            <td><button onClick={()=>this.props.onDeleteClick(ele)} className='btn btn-sm btn-outline-danger'>Delete record</button></td>
                                            <td><button onClick={()=>this.props.onEditClick(ele)} className='btn btn-sm btn-outline-primary'>Edit record</button></td>
                                        </tr>
                                    )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
