import React from 'react'

class  Show extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className="card mx-3" style={{width:"25rem",height:"300px"}}>
                <div className="card-header" style={{color:"white"}}>
                    Completed tasks
                    <ul className="list-group list-group-flush">
                        {this.props.label.map(item => {
                            if(item.isDone == true)
                            return(
                                <li key={item.id} style={{color:"green"}}>
                                    <input 
                                        type="checkbox"
                                        name="isDone"
                                        checked={item.isDone}
                                    />
                                    {item.value}
                                    <button 
                                        className="badge badge-pill badge-success m-2"
                                        value={item.id}
                                            onClick={(e)=>{this.props.upd(e.target.value)}}
                                        >Delete
                                    </button>
                                </li>
                            ) 
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Show