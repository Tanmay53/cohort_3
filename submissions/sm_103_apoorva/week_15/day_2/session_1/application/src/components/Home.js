import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data : [],
            table : false
        }
    }

    componentDidMount = () =>{
        console.log("hello")
        axios.get('http://127.0.0.1:5000/listing').then
        (
            res => {
                const data = res.data
                console.log(data)
                this.setState({
                    data : data,
                    table : true
                })
            }
        ).catch(error => console.log(error))
    }
    render()
    {
        return(
            <div>
                <h1 className="text-center">Grocery Data</h1>
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Items</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Purchase</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.table?(
                            this.state.data.map((ele,index) =>
                                <tr key={ele.items}>
                                    <td>{ele.items}</td>
                                    <td>{ele.quantity}</td>
                                    <td><Link to={`/edit/${index}/?item=${ele.items}&quantity=${ele.quantity}`}><button className ="badge-pill badge-warning">Edit</button></Link></td>
                                    <td><Link to={`/done/${index}`}><button className =" badge-pill badge-success">Purchase</button></Link></td>
                                    <td><Link to={`/delete/${index}`}><button className ="badge-pill badge-danger">Delete</button></Link></td>
                                </tr>
                            )
                        ):(
                            <tr>
                                <td>Loading</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home