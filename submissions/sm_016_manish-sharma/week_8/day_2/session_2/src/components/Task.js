import React from 'react'

class Task extends React.Component{
    constructor(props){
        super(props)
    }
    todo1=(event)=>{
        this.props.parentCallback(event.target.textContent)
        let btn=event.target.parentElement
        btn.innerHTML=''
      }
    del=(event)=>{
        let btn=event.target.parentElement.parentElement
        btn.innerHTML=''
    }  
    render(){
        return(
            <div className='row'>
                <div onClick={this.todo1} className='col h4'>{this.props.name}</div>
                <div className='col justify-content-end'>
                <div onClick={this.del} className='btn btn-secondary'>Delete</div>
                </div>
            </div>
        )
    }
}

export default Task