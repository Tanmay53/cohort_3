import React from "react";


function Button(props) {
    return (
        <button className="button" style={{backgroundColor: props.color}}>{props.text}</button>
    );
}

export default Button