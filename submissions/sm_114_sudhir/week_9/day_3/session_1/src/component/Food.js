import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

export default class Food extends Component {
    constructor(props){
        super(props)
        this.state = {
            Food : [
                {
                    name : 'Samosa',
                    id : 1,
                    price : 10,
                    img : '/Images/food/samosa.jpeg'
                },
                {
                    name : 'Pizza',
                    id : 2,
                    price : 500,
                    img : '/Images/food/pizza.jpeg'
                },
                {
                    name : 'Chicken',
                    id : 3,
                    price : 590,
                    img : '/Images/food/chicken.jpeg'
                },
                {
                    name : 'Tea',
                    id : 4,
                    price : 50,
                    img : '/Images/food/tea.jpeg'
                }
            ]
        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.Food.map(ele => {
                            return (
                                <div className="col m-1">
                                    <div className="card">
                                        <img className="card-img-top" src={ele.img} alt="Card image cap" />
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
