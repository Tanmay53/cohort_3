import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return (
            <div className="card shadow-lg mb-5 bg-white rounded" style={{width : "18rem"}}>
                <img className="card-img-top" src={this.props.item.img}/>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{this.props.item.type}</h5>
                    <p className="card-text text-muted">Floor :- {this.props.item.floor}</p>
                    <div className="pb-3">
                        <div className="card-text text-muted float-left">Capcity:- {this.props.item.capacity}</div> 
                        <div className="card-text text-muted float-right">Price:-{this.props.item.rate}</div>
                    </div>
                    <br/>
                    {/* <button onClick = {this.props.bookRooms} value={this.props.item.id} className="btn btn-primary float-left">BOOK NOW</button> */}
                    <button onClick = {this.props.bookRooms} 
                            value={this.props.item.id} 
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="btn btn-primary float-left">BOOK NOW</button>
                    <button className="btn btn-primary float-right">DETAILS</button>
                </div>
            </div>
        )
    }
}
