import React from  'react';

class ButtonCreate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newBtn : this.props.ele 
        }
    }

    render(){
        return (
            <div id="btnDiv">
                {this.state.newBtn.map(val => <button className="btnPro" style={{backgroundColor:val[1]}}>{val[0]}</button>)}
            </div>
        )
    }
}

export default ButtonCreate;