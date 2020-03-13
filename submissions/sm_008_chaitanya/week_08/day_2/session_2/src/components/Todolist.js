import React from 'react'
class Todolist extends React.Component{
    render(){
        return(
            <div className="text-center border border-primary mx-5">
                <h4 className="text-primary font-weight-bold"><u>{this.props.label}</u></h4>
                {this.props.data.map((element)=>
                    <div className="row my-2" key={element.id}>
                        <div className="col-1 offset-1 offset-md-4 col-md-2 col-lg-1 offset-lg-4 mt-4">
                            <input type="checkbox" onClick={()=>this.props.handleDone(element.id)} className="mt-2"/>
                        </div>
                        <div className="col-2 offset-1 offset-md-0 col-md-2 col-lg-1 mt-4">
                            <h5 style={{color:`${element.isdone?"green":"black"}`,
                        textDecoration:`${element.isdone?'line-through':''}`}}>{element.task}</h5>
                        </div>
                        <div className="col-2 offset-1 offset-md-0 col-md-2 col-lg-1 mt-4">
                            <button onClick={()=>this.props.handleDel(element.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default Todolist 