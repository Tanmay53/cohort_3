import React from 'react'
import { connect } from 'react-redux'
import { addTask} from './Action'


 class InputTasks extends React.Component {
    constructor(props) {
        super(props)  
        this.state = {
             addT:''
        }
    }
    handleInput=(e)=>{
        this.setState({
            addT:e.target.value
        })
    }
    addedTaskComp=""
    handleAddTask=()=>{
        if(this.state.addT.length > 0){
            this.addedTaskComp=this.state.addT
        }
        this.props.addTheTask(this.state.addT)
        
            this.setState({
                addT:""
            })
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInput} value={this.state.addT} type="text" id=""/>
                <button onClick={this.handleAddTask}>Add Task</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
    addTheTask: (data)=>dispatch(addTask(data))
    };
};    

export default connect(null, mapDispatchToProps)(InputTasks)
