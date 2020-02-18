import React from 'react'
import { Route, Link } from 'react-router-dom'

const AllProducts = (props) => {
    return (
        <React.Fragment>
            <h2 className="text-info text-center bg-dark"> Products Available </h2>
            <div className="container-fluid ">

                <div className="row">
                    {props.ProductArr.map(element => {
                        return (

                            <div className="card m-3 border-white text-info rounded shadow" key={element.id} style={{width: "18rem"}}>
                                <img className="card-img-top offset-4" src={element.link} style={{width:"100px"}} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{element.name}</h5>
                                    <button className="btn btn-outline-info offset-2 ">  <Link className="text-decoration-none text-dark" to={`${props.match.url}/${element.id}`}>See Product Details </Link> </button>
                                </div>
                            </div>
                            // <div key = {element.id} style = {{border : "1px solid black"}}>
                            //     <p> Name : {element.name} </p>
                            //     <Link to = {`${props.match.url}/${element.id}`}> Click to see the product </Link>
                            // </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default AllProducts