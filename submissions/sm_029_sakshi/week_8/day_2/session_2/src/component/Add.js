import React, { Component } from 'react'
 
class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemName : ''
        }
    }

     render() {
         return (
             <div>
                 <input className='m-3' type='text'
                        value={this.state.itemName}
                        onChange={(e)=>this.setState({itemName:e.target.value})}    
                 ></input>      
                 <button className='btn btn-sm btn-primary m-3' onClick={()=>this.props.add(this.state.itemName)}>Add</button>
             </div>
         )
     }
 }
 

export default Add