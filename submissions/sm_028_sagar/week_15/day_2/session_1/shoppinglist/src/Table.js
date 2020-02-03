import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'


export default class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:5000/listing')
            .then(res => this.setState({
                tableData : res.data.arr
            }))
            
    }

    handleEdit = (item,i) =>{
        console.log(item,i)
        this.props.history.push(`edit/${i}?id=${i}&name=${item.item}&quantity=${item.quantity}`)
    }

    handleDelete = (item,i) =>{
        this.props.history.push(`delete/${i}?id=${i}&name=${item.item}&quantity=${item.quantity}`)
    }

    handlePurchase = (item,i) =>{
        this.props.history.push(`mark/${i}?id=${i}&name=${item.item}&quantity=${item.quantity}`)
    }

    render(){
        return (
            <div className='container'>
                <Navbar />
                <table className="table mt-2 table-striped">
                    <thead className=" text-center">
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Purchased</th>
                            <th scope="col">Change</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Mark Purchased</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            this.state.tableData.map((item,i) => 
                                <tr key={`${i}`}>
                                    <td>{item.item}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.purchased}</td>
                                    <td><button className='btn btn-sm btn-success' onClick={()=>this.handleEdit(item,i)}>Change</button></td>
                                    <td> <button className='btn btn-sm btn-danger' onClick={()=>this.handleDelete(item,i)}>Delete</button></td>
                                    <td><input type='submit' className={(item.purchased === 'True')?'btn btn-sm':'btn btn-sm btn-primary'} onClick={()=>this.handlePurchase(item,i)} value={(item.purchased === 'True')?'Purchased':'Purchase'} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    
}
