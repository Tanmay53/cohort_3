import React from "react";
import { connect } from "react-redux";
// import { completeTask } from "./Action";

export class DisplayAllTasks extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    handleShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    
  render() {
    return (
      <div>
  <button  onClick={this.handleShow}>{(this.state.show)?<p className="h4" >Hide added tasks</p>:<p className="h4">Show added tasks</p>}</button>
          <ul>
        {this.state.show &&
          this.props.addedTask.map(e => <li>{e}</li>)
        //   console.log(this.props.addedTask)
          }
          
        
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedTask: state.addedtask
});

// const mapDispatchToProps = dispatch => {
//   return {
//     Done: () => dispatch(completeTask())
//   };
// };

export default connect(mapStateToProps, null)(DisplayAllTasks);
