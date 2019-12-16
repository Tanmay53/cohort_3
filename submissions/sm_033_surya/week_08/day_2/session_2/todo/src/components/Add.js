import React from "react"

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:"",
        }
    }
    render(){
        return(
            <div className="container">
                <div className="col">
                <input className="col-5 p-1 m-2"
                type="text"
                value={this.state.text} 
                onChange={(e)=>this.setState({text:e.target.value
                })}
                />
                <button className="col-1 btn btn-success" onClick={()=>this.props.add(this.state.text)}>Add</button>
                </div>
            </div>
        )
    }
}
export default Add