import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tableData : []
        }
    }

    componentDidMount = () =>{
        axios.get('http://127.0.0.1:5000/users')
            .then(res => res = res.data)
            .then(res => this.setState({
                tableData : res.arr
            }))
    }

    handleNavigate = item =>{
        this.props.history.push(`/users/show/${item.id}?id=${item.id}&name=${item.name}&email=${item.email}&mobile=${item.mobile}&age=${item.age}`)
    }

    handleDelete = item =>{
        this.props.history.push(`/users/delete/${item.id}?id=${item.id}&name=${item.name}&email=${item.email}&mobile=${item.mobile}&age=${item.age}`)
    }

    render(){
        return (
            <div className='container'>
                <Navbar/>
                <table className="table text-center">
                <thead>
                    <tr>
                        <th className='text-left' scope="col">Name</th>
                        <th className='text-left' scope="col">Email</th>
                        <th className='text-left' scope="col">Mobile</th>
                        <th scope="col">Age</th>
                        <th scope="col">Info</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map(item => 
                            <tr key={item.id}>
                                <td className='text-left'>{item.name}</td>
                                <td className='text-left'>{item.email}</td>
                                <td className='text-left'>{item.mobile}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button className='btn btn-sm btn-info' onClick={()=>this.handleNavigate(item)}>Details</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-danger' onClick={()=>this.handleDelete(item)}>Delete</button>
                                </td>
                            </tr>
                        )}
                </tbody>
                </table>
            </div>
        )
    }
    
}
