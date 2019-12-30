import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className="container text-center">
                <img
                    src={props.img}
                    alt=""
                    className="rounded-circle img-fluid"
                />
                <h3>{props.name}</h3>
                <small className="text-muted">{props.title}</small>
            </div>
        </div>
    );
}
