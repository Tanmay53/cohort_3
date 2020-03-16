import React from 'react'
import './TODO.css'

const TODO=(props)=>{
  
  return (
    
    <div>
      <h4 className='text-primary my-3'>{props.label}</h4>   {/*list of completed to to heading*/ /*completed to-dos heading*/}

      {props.item.map((elem)=>{
        return <div 
                key={elem.id} 
                className="shadow my-2 p-2 bg-white rounded">
                  
                  <div className='row'>
                    <div className="col-1">
                      <input
                        type='checkbox'
                        checked={elem.isDone}
                        onChange={()=>props.toggleDone(elem.id)}
                      /> 
                    </div>
                    <div
                      className="col-7 d-flex flex-row justify-content-start" 
                      style={
                        {
                          color:`${elem.isDone ? 'green' : 'steelblue'}`,
                          textDecoration:`${elem.isDone ? 'line-through': ''}`
                        }
                      }>
                      <h4 className='mx-2'>{elem.name}</h4>
                    </div>
                    <div className="col-4 d-flex flex-row justify-content-end">
                      <button 
                        onClick={()=>props.del(elem.id)}
                        className='btn btn-primary'>
                        DELETE</button>
                    </div>
                  </div>
        </div>
      })}
    </div>

  )
}

export default TODO