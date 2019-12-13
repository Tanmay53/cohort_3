import React from 'react';
import './index.css'

const Button = (props) => {
    return (
        <button  style={{background: props.color}} >{props.label}</button>      
    );
}

export default Button
  