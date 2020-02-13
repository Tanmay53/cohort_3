import React from 'react'

const TODO=(props)=>{
  
  return (
    
    <div>
      <h4 className='text-primary my-3'>{props.label}</h4>   {/*list of completed to to heading*/ /*completed to-dos heading*/}

      {props.item.map((elem)=>{
        return <div 
                key={elem.id} 
                style={{display:'flex'}}
                className="shadow my-2 p-2 bg-white rounded">
                  
                  <div className='d-flex align-items-baseline'>
                    
                      <input
                        type='checkbox'
                        checked={elem.isDone}
                        onChange={()=>props.toggleDone(elem.id)}
                      /> 
                    <div 
                      style={
                        {
                          color:`${elem.isDone ? 'green' : 'steelblue'}`,
                          textDecoration:`${elem.isDone ? 'line-through': ''}`
                        }
                      }>
                      <h4 className='mx-2'>{elem.name}</h4>
                    </div>

                    <button 
                      onClick={()=>props.del(elem.id)}
                      className='btn btn-primary'>
                    DELETE</button>
                      
                  </div>
                  
                    
                    </div>
                  


      })}
    </div>

  )
}

export default TODO