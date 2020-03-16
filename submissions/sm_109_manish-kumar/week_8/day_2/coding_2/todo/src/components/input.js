import React from 'react';

class Input1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            value:''
        }
    }
    addList =() => {
        let nlist =[...this.state.list, this.state.value]
         this.setState({
                  list:nlist
         })
    }
     handleChange = (e) =>{
         this.setState({
             value:e.target.value
         })
     }

    render() {
        return (
            <div>
                <input  value={this.state.value }onChange={this.handleChange}/>
                <button onClick={this.addList}>Submit</button>
                {this.state.list.map(item=><p>{item}</p>)}
            </div>
        )
    }
}

export default Input1;