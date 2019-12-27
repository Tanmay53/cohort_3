import React from 'react';
class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            TaskDone:[]
        }
    }
    // handleTaskClick=(e)=>{
    //     let textC=e.target.textContent
    //     console.log(textC)
    //     let selectedData=this.state.TaskDone
    //     selectedData.push(textC)
    //     this.setState({
    //         TaskDone:selectedData
    //     })
    //     console.log(this.state.TaskDone)
    //  }
     
    render() {
        return (
           <div className="row">
             <p onClick={this.props.selectX} className="h3 mx-auto text-danger" style={{cursor:"pointer"}}>{this.props.taskName}</p>
           </div>
            
        )
    }
}

export default Tasks;