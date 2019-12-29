import React from 'react';


class ButtonX extends React.Component{
    render(){
        return(
            <button type="button" style={{background:this.props.colorX}} className="btn-lg btn-primary col-5 badge-pill text-white">{this.props.text}</button>

        )
    }
}


export default ButtonX;

