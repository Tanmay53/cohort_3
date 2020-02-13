import React from "react";

class Print extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr:[],
            value: "",
            com:[]
        }
    }
     addNew = () => {
         let input = [...this.state.arr, this.state.value]
         this.setState({
             arr: input,
             value:""
         })

     }

     handleChange = (e) => {
        this.setState({
            value : e.target.value
        })
     }

     doneTask = (ele) => {
        let done = [ele]
            this.setState({
                com:done
            })
            console.log(done)
        }
        // console.log(com)
    //  
     

    render() {
        return (
            <div>
                {this.state.arr.map(ele => <p value ={this.state.value} onClick={()=>this.doneTask({ele})}>{ele}</p>)}
                <input onChange = {this.handleChange} />
                <button onClick = {this.addNew}>Add ToDo</button>
                
                <h3>done</h3>
                {/* {this.state.done.map(item => <p>{item}</p>)} */}
                console.log(this.state.done)
            </div>
        )
    }
}

export default Print;