import React from 'react'
import {Link} from 'react-router-dom'

export default function ProductCard(props) {
    console.log(props.path)
    return (
            <div className="card" style={{width: '12rem'}}>
                <img src={props.path} className="card-img-top" alt="men's wear" />
                <div className="card-body">
                    <h5 className="card-title">{props.label}</h5>
                    <p className="card-text">₹ {props.price}</p>
                    <Link to={props.url} className="btn btn-info">More Info</Link>
                </div>
            </div>
    )
}
