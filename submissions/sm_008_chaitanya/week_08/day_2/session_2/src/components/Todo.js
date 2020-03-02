import React from 'react'

const Todo=(props)=>{
    return(
        <div className="my-2 font-weight-bold h2 center">
            {props.label}
            {props.data.map((item)=>(
                <div key={item.name} style={{display:'flex'}}>
                   <div style={{color:`${item.isDone?"green":"black"}`,
                            textDecoration:`${item.isDone?"line-through":""}`}}>{item.name}</div> 
                <button onClick={()=>props.toggleDone(item.name)} className="bg-danger text-light btn btn-sm mr-5 ml-5 mb-5">TOGGLE DONE</button> 
                <button onClick={()=>props.del(item.name)} className="btn bg-dark text-light btn-sm mb-5">DELETE</button>
                </div> ))}
        </div>
    )
}

export default Todo