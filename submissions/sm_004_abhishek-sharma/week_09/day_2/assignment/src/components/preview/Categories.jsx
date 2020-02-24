import React from 'react'
import {Link} from 'react-router-dom'
const Categories = (props) => {
    return (
        <div className = "col-2 ">
            <div className="card" style={{}}>
                <img src={props.imageUrl} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <Link to={`/mens/${props.title}`} style = {{textDecoration : "none"}} ><p className="card-text text-center font-weight-bold">{props.title.toUpperCase()}</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Categories
