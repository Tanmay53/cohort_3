import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

export default class Electrical extends Component {
    constructor(props){
        super(props)
        this.state = {
            Electrical : [
                {
                    name : 'Mobile',
                    id : 1,
                    price : 90000,
                    img : '/Images/eletrical/nokia.webp'
                },
                {
                    name : 'Laptop',
                    id : 2,
                    price : 1500000,
                    img : '/Images/eletrical/thinkpad.jpeg'
                },
                {
                    name : 'MacBook',
                    id : 3,
                    price : 60000,
                    img : '/Images/eletrical/macbook.webp'
                },
                {
                    name : 'Camera',
                    id : 4,
                    price : 3000,
                    img : '/Images/eletrical/camera.webp'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.Electrical.map(ele => {
                            return (
                                <div className="col m-1">
                                    <div className="card">
                                        <img className="card-img-top img-fluid" style={{height:'250px'}} src={ele.img} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title m-2 font-weight-bold">{ele.name}</h5>
                                            <p className="card-text m-2">INR : {ele.price}</p>
                                            <Link to={`${this.props.match.url}/${ele.id}`}>
                                                <button className="btn btn-outline-primary rounded">Add to cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
