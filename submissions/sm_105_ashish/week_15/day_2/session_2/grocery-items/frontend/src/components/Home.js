import React, { Component } from 'react'
// import axios from 'axios'
import { MDBTable, MDBTableBody } from 'mdbreact';
import { Link } from 'react-router-dom';



class Home extends Component {
    
    render() {
        return (
        <div className ="container-fluid border border-success m-2">
            <h1 className ="text-center m-auto p-3">Item list</h1>
            <MDBTable hover>
                <thead className="black white-text">
                    <tr>
                        <th>Item_no</th>
                        <th>Item_Name</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Mark purchased</th>
                    </tr>
                </thead>
                <MDBTableBody>
                    {this.props.arr.map((ele,index)=>{
                        return( <tr key={index+1}>
                            <td> {index+1}</td>
                            <td>{ele.item_name}</td>
                            <td>{ele.quantity}</td>
                            <td><Link to = {`/change/${index+1}`}    value = {index+1} className="btn btn-warning">Edit</Link></td>
                            <td><Link to = {`/delete/${index+1}`}  value = {index+1} className="btn btn-danger" >Delete</Link></td>
                            <td><Link to = {`/mark/${index+1}`}  value = {index+1} className="btn btn-success" onClick={(e)=>this.props.markPurchased(e.target.value)}>purchased</Link></td>
                        </tr>)
                    })}
                   
                </MDBTableBody>
            </MDBTable>
        </div>
        );
    }

}

export default Home




