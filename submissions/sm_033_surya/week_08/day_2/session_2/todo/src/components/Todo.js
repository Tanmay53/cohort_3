import React from "react"

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    render(){
        console.log(this.props.input,"todo")
        return(
            
            <div className="container">
                <div className="col-6 rounded bg-info"><h3>{this.props.label}</h3></div>
            {this.props.input.map((ele)=><div className="col-6 rounded border border-primary" key ={ele.item+ele.id} style={{display:"flex"}}><div className="col-1 p-3"><input type ="checkbox" defaultChecked = {this.props.isCompleted} onClick={()=>this.props.toggle(ele.id)}/></div><div className="col-9 p-3 h5" style={{color:`${ele.isCompleted?"red":"black"}`,textDecoration:`${ele.isCompleted?"line-through":"black"}`}}>{ele.item}</div>
            
            <div className="col-2 p-3"><button onClick={()=>this.props.del(ele.id)} style={{border:"none",background:"none"}}><img className="img-fluid" src="https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/DeleteDustbin-512.png"/></button></div>
            </div>
            )}</div>
        )
    }

}

export default Todo