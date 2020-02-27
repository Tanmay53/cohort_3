import React from 'react'

const CompletedTodo=(props)=>{
    return(
        <div>
            Completed TODO:
            {props.data.map((item,index)=><div key={item.name+index}>{item.name}
                <button onClick={()=>props.toggleDone(index)}>TOGGLE DONE</button> </div> )}
        </div>
    )
}

export default CompletedTodo