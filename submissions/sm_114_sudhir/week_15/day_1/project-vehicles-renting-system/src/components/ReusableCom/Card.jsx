import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
                <div className="card" style={{width : "18rem"}}>
                    <img className="card-img-top" src='https://images.pexels.com/photos/2030561/pexels-photo-2030561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        )
    }
}
