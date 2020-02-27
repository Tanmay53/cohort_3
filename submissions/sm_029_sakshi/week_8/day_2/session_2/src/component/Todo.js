import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             updateonn:false,
             newitem:"",
             currentid:""
        }
    }
    
    update=(id)=>{
        console.log(id)
        this.setState({
            updateonn:!this.state.updateonn,
            currentid:id
        })
       
    }

    newupdatebtn=()=>{
     var  finalnewdta=this.state.newitem
     var finalnewid=this.state.currentid
      console.log(finalnewdta)
     //callback
     this.props.updatecallback(finalnewdta,finalnewid)
    }
    render() {
        console.log(this.state.newitem)
        var updateisonn=this.state.updateonn
        return (
            <div>
            {updateisonn ? (<div><input value={this.state.newitem}
                           name="newitem"
                             onChange={(e)=>this.setState({newitem:e.target.value})} >
                             </input>
                           <button onClick={this.newupdatebtn}>UpdateNew</button>
                             </div>
                            
                           
                         )
                             :
                             null} 


            {this.props.label}  
            <ul className='list-group'>
            <div className="row">
                {this.props.data.map(itemName =>(
                    
                    <li className='  col-10 list-group-item' key={itemName.id} style={{color:`${itemName.isDone?"green":"black"}`,
                                                                                        textDecoration:`${itemName.isDone?"line-through":"none"}`
                                                                                        }}>
                        <input type='checkbox' className='mr-2' onClick={()=>this.props.taskDone(itemName.id)}/>
                        {itemName.name}
                       
                        <button className='col-3  float-right  ml-3 btn btn-sm btn-danger '   onClick={()=>this.update(itemName.id)}>update</button>
                        <button className=' col-3  float-right  btn btn-sm btn-danger '  onClick={()=>this.props.del(itemName.id)}>Delete</button>
                       
                       
                       
                        </li>

                ))}
                </div>
            </ul>
        </div>

        );
    }
}

export default Todo;