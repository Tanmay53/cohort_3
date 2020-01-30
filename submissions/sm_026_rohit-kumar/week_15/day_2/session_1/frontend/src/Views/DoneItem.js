import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class DoneItems extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            productListings: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/purchased', {
            headers: {'Access-Control-Allow-Origin': '*'}}
        )
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    productListings: res.data
                })
            }
        })  
        .catch(error=>console.log(error))
    }

    render() {
        console.log(this.state.productListings)
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-8 offset-2'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Purchased</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.productListings['data'] && this.state.productListings['data'].map((item, index) => {
                                return <tr>
                                            <td>{item['item']}</td>
                                            <td>{item['quantity']}</td>
                                            <td>{item['purchased']}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default DoneItems