import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class CreateTasklist extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            back:false
        }
    }
    handleChage=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    handleClick=()=>{
        this.setState({
            back:true
        })
        // this.props.history.push("/tlists")
    }
    render() {
        console.log("hello")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <label>Enter Tiitle of list</label>
                    </div>
                    <div className="col-12">
                        <input type="text" value={this.state.title} onChange={this.handleChage}/>
                    </div>
                    <div className="col-12">
                        <button onClick={this.handleClick}>Submit</button>
                    </div>
                </div>
                {this.state.back && <Redirect to='/tlists'/>}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTasklist)
