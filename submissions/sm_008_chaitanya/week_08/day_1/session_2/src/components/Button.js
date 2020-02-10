import React from 'react';
function Button(props){
    return(
        <div className="header mx-5">
            <button style={{backgroundColor:props.colordata[0]}}>{props.labdata[0]}</button>
            <button style={{backgroundColor:props.colordata[1]}}>{props.labdata[1]}</button>
            <button style={{backgroundColor:props.colordata[2]}}>{props.labdata[2]}</button>
            <button style={{backgroundColor:props.colordata[3]}}>{props.labdata[3]}</button>
            <button style={{backgroundColor:props.colordata[4]}}>{props.labdata[4]}</button>
            <button style={{backgroundColor:props.colordata[5]}}>{props.labdata[5]}</button>
            <button style={{backgroundColor:props.colordata[6]}}>{props.labdata[6]}</button>
            <button style={{backgroundColor:props.colordata[7]}}>{props.labdata[7]}</button>
        </div>
    )
}
export default Button