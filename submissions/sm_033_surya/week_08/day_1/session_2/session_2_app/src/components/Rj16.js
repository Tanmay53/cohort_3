import React from "react"
import "./Rj16.css"

function Rj13(props) {
    return (
        <div className="container">
            <div className="main">
                <div className="row_1">
                    <div className="profile_pic">
                        <div className="pro">PRO</div>
                        <div className="picture_div">
                            <div className="picture"><img src= {props.image} /></div>
                            <h1>{props.name}</h1>
                            <h6>{props.location}</h6>
                            <h4>{props.description}</h4>
                        </div>
                    </div>
                </div>
                <div className="row_2">
                    <button className="btn_1">Message</button>
                    <button className="btn_2">Following</button>
                </div>
                <div className="row_3">
                {props.skills}
                </div>
            </div>
        </div>
    )
}
export default Rj13