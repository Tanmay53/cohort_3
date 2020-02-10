import React, { Component } from 'react'
import axios from 'axios'
import { MDBTable, MDBTableBody } from 'mdbreact';
import { Link} from 'react-router-dom';


class PurchasedList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:[]
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/purchased/"+0)
        .then(res => {
            const resArr = res.data.purchased_items
            console.log(res)
            this.setState({
                arr: [...resArr]
            })
        })
        .catch(res => {
            console.log(res)
        })
    }
    
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
                        <th>Delete Item</th>

                    </tr>
                </thead>
                <MDBTableBody>
                    {this.state.arr.map((ele,index)=>{
                        return( <tr key={index+1}>
                            <td> {index+1}</td>
                            <td>{ele.item_name}</td>
                            <td>{ele.quantity}</td>
                            <td><Link to = {`/delete/${index+1}`}  value = {index+1} className="btn btn-danger" >Delete</Link></td>
                        </tr>)
                    })}
                   
                </MDBTableBody>
            </MDBTable>
            <Link className="btn btn-dark m-2" to ="/">Back to Home page</Link>
        </div>
        )
    }
}

export default PurchasedList
