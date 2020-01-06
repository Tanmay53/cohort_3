import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

export default class Clothes extends Component {
    constructor(props){
        super(props)
        this.state = {
            Clothes : [
                {
                    name : 'Jackets',
                    id : 1,
                    price : 2200,
                    img : '/Images/clothes/jackets.jpeg'
                },
                {
                    name : 'Jeans',
                    id : 2,
                    price : 1200,
                    img : '/Images/clothes/jeans.jpeg'
                },
                {
                    name : 'Ladies Clothes',
                    id : 3,
                    price : 6000,
                    img : '/Images/clothes/lad.jpeg'
                },
                {
                    name : 'Shirt',
                    id : 4,
                    price : 500,
                    img : '/Images/clothes/shirt.jpeg'
                }
            ]
        }
    }
    render() {
        console.log(this.props)
        // console.log(this.props.match.url)
        // console.log(this.props.match.path)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.Clothes.map(ele => {
                            return (
                                <div className="col m-1" key={ele.id}>
                                    <div className="card">
                                        <img className="card-img-top img-fluid" style={{height:'250px'}} src={ele.img} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title m-2 font-weight-bold">{ele.name}</h5>
                                            <p className="card-text m-2">INR : {ele.price}</p>
                                            <Link to= {`${this.props.match.url}/${ele.id}`}>
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

