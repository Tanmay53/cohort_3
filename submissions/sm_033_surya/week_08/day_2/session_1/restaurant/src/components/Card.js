import React from "react"
import "./Card.css"

function card(props){
    return(
        <div className="container">
            <div className="main">
                <div className="row1">
                    <div className="image">
                        <img src={props.data.image}/>
                    </div>
                    <div className="content">
                        <h1>{props.data.name}</h1>
                        <p>{props.data.categeries}</p>
                        <p>{props.data.cost}</p>
                        <h5>{props.data.time}</h5>
                        <h5>{props.data.payment}</h5>
                    </div>
                    <div>
                        <div className="ratingDiv">
                            <div><h2>{props.data.rating}</h2></div>
                            <p><small>{props.data.votes}</small></p>
                            <p><small>{props.data.reviews}</small></p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="btn">OrderOnline ></div>
                </div>

            </div>
        </div>
    )
}


export default card