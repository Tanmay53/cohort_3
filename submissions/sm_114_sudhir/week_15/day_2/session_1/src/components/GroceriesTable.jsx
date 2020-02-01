import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios'


export default class GroceriesTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
           groceries : [],
           item_no : ''
        }
    }

    updateItems = () => {
        return (
            axios.get('http://127.0.0.1:5000/listing')
            .then(res => {
                const data = res.data.item
                this.setState({
                    groceries: data
                })
            })
            .catch(err => console.log(err))
        )
    }
    
    componentDidMount = () => {
        this.updateItems()
    }

    deleteItem = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/delete/'+e.target.value)
        .then(res => console.log(res))

        axios.get('http://127.0.0.1:5000/listing')
        .then(res => {
            const data = res.data.item
            this.setState({
                groceries : data
            })
        })
        this.updateItems()
    }

    markPurchased = (e) => {
        this.setState({
            item_no : Number(e.target.value)
        })
        axios
        .post('http://127.0.0.1:5000/purchased', {...this.state.item_no})
        .then(res => console.log(res))
        .catch(err => alert(err))

        this.updateItems()
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <MDBTable>
                            <MDBTableHead color="primary-color">
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Purchased</th>
                                    <th>Change</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.groceries.map((ele, i) => {
                                    return (
                                        <tr key={i+1}>
                                            <th>{ele.item}</th>
                                            <th>{ele.quantity}</th>
                                            <th>
                                                <button onClick={this.markPurchased} value={i+1} className="btn bg-primary">Mark Purchased</button>
                                            </th>
                                            <th>
                                                <button className="btn btn-outline-primary">Change</button>
                                            </th>
                                            <th>
                                                <button className="btn btn-outline-primary">Edit</button>
                                            </th>
                                            <th>
                                                <button onClick={this.deleteItem} value={i+1} className="btn btn-outline-primary">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                })}
                            </MDBTableBody>
                        </MDBTable>            
                    </div>
                </div>
            </div>
            
        )
    }
}


