import React from 'react';
import './Button.css'

const Button = (props) => {
    return (<div>
        <button className="btn btn-lg rounded-pill m-2" style={{ background: props.color }}>{props.label}</button>
    </div>
    );
}


export default Button;