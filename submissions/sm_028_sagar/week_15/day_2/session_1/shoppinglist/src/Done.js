import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default class Done extends Component {
    constructor(props){
        super(props)
        this.state = {
            completedData:[]
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:5000/purchased')
        .then(res => this.setState({
            completedData : res.data.filter(item => item.purchased === 'True')
        }))
    }
    render() {
        return (
            <div className='container'>
                <Navbar />
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            this.state.completedData.map((item,i) => 
                                <tr key={`${i}`}>
                                    <td>{item.item}</td>
                                    <td>{item.quantity}</td>
                                    <td>Purchased</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
